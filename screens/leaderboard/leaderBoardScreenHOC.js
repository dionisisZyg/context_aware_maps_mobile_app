import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLeaderboard} from "../../actions";
import LeaderBoardScreen from "./leaderBoardScreen";

class LeaderBoardScreenHOC extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchLeaderboard()
    }

    render() {
        return (
            <LeaderBoardScreen
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.person.fetching,
        persons: state.person.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLeaderboard: (payload) => {
            dispatch(fetchLeaderboard(payload))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardScreenHOC);