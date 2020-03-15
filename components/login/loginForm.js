import React , { Component } from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Header, Body, Content, Title, Button, Text, Form } from 'native-base';
import { Field,reduxForm,  } from 'redux-form';
import RenderTextInput from "../inputs/renderTextInput";


const LoginForm = (props) => {
    const { handleSubmit, navigation } = props;
    return (
        <Container >
            <Header>
                <Body>
                <Title>{'Login'}</Title>
                </Body>
            </Header>
            <Content padder>
                <Form>
                    <Field
                        name="username"
                        component={RenderTextInput}
                        custom={{
                            placeholder: 'Username'
                        }}
                    />
                    <Field
                        name="password"
                        component={RenderTextInput}
                        custom={{
                            secureTextEntry: true,
                            placeholder: 'Password'
                        }}
                    />
                    <Button block primary onPress={handleSubmit(props.onSubmit)}>
                        <Text>Login</Text>
                    </Button>
                    <Button block transparent onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text>Sign up</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm)