import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import UploadedRoutesHOC from "../../components/routes/uploadedRoutesHOC";
import UnsavedRoutesHOC from "../../components/routes/unsavedRoutesHOC";
import OtherUsersUploadedRoutesHOC from "../../components/routes/otherUsersUploadedRoutesHOC";

const RoutesScreen  = (props) => {
    return (
        <Container>
            <Tabs>
                <Tab heading="Local routes">
                    <UnsavedRoutesHOC {...props}/>
                </Tab>
                <Tab heading="My uploaded routes">
                    <UploadedRoutesHOC {...props}/>
                </Tab>
                <Tab heading="Other users uploaded routes">
                    <OtherUsersUploadedRoutesHOC {...props}/>
                </Tab>
            </Tabs>
        </Container>
    )
};

export default RoutesScreen;