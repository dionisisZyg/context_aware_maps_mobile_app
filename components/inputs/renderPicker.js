import React from 'react';
import {Picker} from 'native-base'

const RenderPicker = ({ input: { onChange, value, ...inputProps }, children, ...pickerProps }) => (
    <Picker
        selectedValue={ value }
        onValueChange={ value => onChange(value) }
        { ...inputProps }
        { ...pickerProps }
    >
        { children }
    </Picker>
);

export default RenderPicker;