import geolib from "geolib";
import _ from "lodash";

export const actionCreator = (type) => (payload) => ({
    type: type,
    payload: payload
});

export const getElapsedTime = (startTime) => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000 % 60 );
    const elapsedTimeInMinutes = Math.floor(elapsedTime / 1000 / 60 % 60 );
    const elapsedTimeInHours = Math.floor(elapsedTime / 1000 / 60 /  60 % 24);

    const hours = elapsedTimeInHours > 9 ? elapsedTimeInHours:`0${elapsedTimeInHours}`;
    const minutes = elapsedTimeInMinutes > 9 ? elapsedTimeInMinutes:`0${elapsedTimeInMinutes}`;
    const seconds = elapsedTimeInSeconds > 9 ? elapsedTimeInSeconds:`0${elapsedTimeInSeconds}`;

    return `${hours} : ${minutes} : ${seconds}`;
};

export const getRouteDistance = (route) => {
    let distance = 0.0;
    if(route.length < 2) {
        return 0.0;
    }
    for(let i = 0; i < route.length - 1; i++){
        const distanceOfTwoPoints = geolib.getDistance(
            {
                latitude: route[i].coords.latitude,
                longitude: route[i].coords.longitude,
            },
            {
                latitude: route[i + 1].coords.latitude,
                longitude: route[i + 1].coords.longitude,
            },
            1,
            1
        );
        distance =  distance + distanceOfTwoPoints
    }
    return distance;
};

export const getRouteTimeElapsed = (route) => {
    if(route.length < 2) {
        return 0
    }
    const lastPoint = _.last(route);
    const firstPoint = route[0];
    const elapsedTime = lastPoint.timestamp - firstPoint.timestamp;
    const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000 % 60 );
    const elapsedTimeInMinutes = Math.floor(elapsedTime / 1000 / 60 % 60 );

    const minutes = elapsedTimeInMinutes > 9 ? elapsedTimeInMinutes:`0${elapsedTimeInMinutes}`;
    const seconds = elapsedTimeInSeconds > 9 ? elapsedTimeInSeconds:`0${elapsedTimeInSeconds}`;

    return `${minutes} : ${seconds}`;
};

export const getEnumNameByCode = (code, enumList) =>{
    const item = enumList.find(item => item.code === code);
    if(!item){
        return "";
    }

    return item.name;
};

export const refineLocation = (location, lastLocation, measurementNoise) => {
    const accuracy = Math.max(location.accuracy, 1);
    const result = { ...location, ...lastLocation };
    if (!lastLocation) {
        result.variance = accuracy * accuracy;
    } else {
        const timestampInc = location.timestamp.getTime() - lastLocation.timestamp.getTime();
        if (timestampInc > 0) {
            // We can tune the velocity and particularly the coefficient at the end
            // const velocity = _calculateGreatCircleDistance(location, lastLocation) / timestampInc * measurementNoise;
            // result.variance += timestampInc * velocity * velocity / 1000;
        }
        const k = result.variance / (result.variance + accuracy * accuracy);
        result.latitude += k * (location.latitude - lastLocation.latitude);
        result.longitude += k * (location.longitude - lastLocation.longitude);
        result.variance = (1 - k) * result.variance;
    }
    return {
        ...location,
        ..._.pick(result, ['latitude', 'longitude', 'variance']),
    };
};