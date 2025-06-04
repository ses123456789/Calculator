import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { themecontext } from "../context/themecontext";
import { styles } from "../styles/globalstyles";

interface buttonprops{
    onPress: () => void;
    title: string;
    isblue?: boolean
    isgray?: boolean
    
}
export default function Button({onPress, title, isblue, isgray}: buttonprops){
    const theme= useContext(themecontext);
    return (
  <TouchableOpacity
    style={
      isblue
        ? styles.btnBlue
        : isgray
        ? styles.btnGray
        : theme === "light"
        ? styles.btnLight
        : styles.btnDark
    }
    onPress={onPress}
  >
    <Text
      style={
        isblue || isgray
          ? styles.smallTextLight
          : theme === "dark"
          ? styles.smallTextLight
          : styles.smallTextDark
      }
    >
      {title}
    </Text>
  </TouchableOpacity>
);
}