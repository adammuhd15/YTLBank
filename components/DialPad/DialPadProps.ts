import { dialPad } from "../../constants/DialPadDimensions";


export interface DialPadProps {
  onPress: (item: typeof dialPad[number]) => void;
}
