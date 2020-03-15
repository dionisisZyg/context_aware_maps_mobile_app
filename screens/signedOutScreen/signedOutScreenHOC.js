import React, {Component} from 'react';
import SignedOutScreen from "./signedOutScreen";

class SignedOutScreenHOC extends Component {
    render(){
        return (
            <SignedOutScreen {...this.props}/>
        );
    }
}

export default SignedOutScreenHOC;