import React from 'react';
import { Item, Input, Text } from 'native-base';

const RenderTextInput = ({ input, label, type, meta: { touched, error, warning }, custom }) => {
    let hasError= false;
    if(error !== undefined){
        hasError= true;
    }
    return(
        <Item error= {hasError}>
            <Input {...input} {...custom}/>
            {hasError ? <Text>{error}</Text> : <Text />}
        </Item>
    )
};

export default  RenderTextInput;