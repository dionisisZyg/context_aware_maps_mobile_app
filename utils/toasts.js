import { Toast } from 'native-base';
import {TOAST_DURATION} from "../constants/constants";

export const generalToast = (message, options = {} ) => {
    Toast.show({
        text: message,
        position: 'bottom',
        textStyle: { textAlign: 'center' },
        duration: TOAST_DURATION,
        ...options
    });
};