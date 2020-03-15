import React  from 'react';
import { Container,Form , Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm,  } from 'redux-form';
import RenderTextInput from "../inputs/renderTextInput";


const SignUpForm = (props) => {
    const { handleSubmit, onSubmit, navigation } = props;
    return (
        <Container >
            <Header>
                <Body>
                <Title>{'Sign Up'}</Title>
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
                        name="email"
                        component={RenderTextInput}
                        custom={{
                            placeholder: 'Email'
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
                    <Button block primary onPress={handleSubmit(onSubmit)}>
                        <Text>Sign up</Text>
                    </Button>
                    <Button block transparent onPress={() => navigation.navigate('LoginScreen')}>
                        <Text>Cancel</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
};

export default reduxForm({
    form: 'signUpForm'
})(SignUpForm)