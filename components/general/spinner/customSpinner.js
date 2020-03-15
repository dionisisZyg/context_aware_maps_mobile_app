import React, { Component } from 'react';
import { Content, Spinner } from 'native-base';

class CustomSpinner extends Component {
    render() {
        return (
            <Content>
                <Spinner color={"blue"}/>
            </Content>
        );
    }
}

export default CustomSpinner;