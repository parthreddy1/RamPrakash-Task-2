import { Dimensions, ToastAndroid, PixelRatio } from 'react-native';


export const width = Dimensions.get("screen").width
export const height = Dimensions.get("screen").height


export const showNotification = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}

export const customSize = (size) => {
    const newSize = size * (Dimensions.get("window").width / 320)
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
