import React, {Component} from 'react';
import {connect} from "react-redux";
import RouteScreen from "./routeScreen";
import {DEFAULT_RATING} from "../../constants/constants";
import * as actions from '../../actions';

class RouteScreenHOC  extends Component{
    constructor(props){
        super(props);
        this.state = {
            route: this.props.navigation.getParam("route", {points: []}),
            isModalOpen: false,
            rating: DEFAULT_RATING,
            review: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(!this.props.postingReview && prevProps.postingReview){
            this.setState({...this.state, review: "", rating: DEFAULT_RATING, isModalOpen: false})
        }
    }

    openModal = () => this.setState({...this.state, isModalOpen: true});

    closeModal = () => {
        this.setState({
            ...this.state,
            isModalOpen: false,
            rating: DEFAULT_RATING,
            review: ""
        })
    };

    onRatingChange = (rating) => this.setState({...this.state, rating: rating});

    onReviewChange = (value) => this.setState({...this.state, review: value});

    onRateSubmit = () => {
        this.props.createReview({
            sendBody: {
                rating: this.state.rating,
                body: this.state.review,
                personId: this.props.personId,
                routeId: this.state.route.id
            }
        })
    };

    onFinishRating = (rating) => {
        this.setState({
            ...this.state,
            rating: rating
        })
    };

    render(){
        return (
            <RouteScreen
                {...this.props}
                openModal={this.openModal}
                closeModal={this.closeModal}
                isModalOpen={this.state.isModalOpen}
                rating={this.state.rating}
                review={this.state.review}
                onRatingChange={this.onRatingChange}
                onReviewChange={this.onReviewChange}
                onRateSubmit={this.onRateSubmit}
                onFinishRating={this.onFinishRating}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personId: state.loggedInPerson.userId,
        postingReview: state.review.posting
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: payload => {
            dispatch(actions.createReview(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreenHOC);