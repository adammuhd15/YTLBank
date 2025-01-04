import { Dimensions } from "react-native";

export const { width } = Dimensions.get("window");

export const pinLength = 6; // Can change size
export const pinContainerSize = width * (2 / 3); // Can change size
export const pinMaxSize = pinContainerSize / pinLength;
export const pinSpacing = 10;
export const pinSize = pinMaxSize - pinSpacing * 2;

export const dialPad: (string | number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
export const dialPadSize = width * .2;
export const dialPadTextSize = dialPadSize * .4;
export const _spacing = 20;
