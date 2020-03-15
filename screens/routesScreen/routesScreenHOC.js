import React, {Component} from 'react';
import RoutesScreen from "./routesScreen";

class RoutesScreenHOC extends Component {
    render () {
        return (
            <RoutesScreen
                {...this.props}
            />
        )
    }
}

export default RoutesScreenHOC;