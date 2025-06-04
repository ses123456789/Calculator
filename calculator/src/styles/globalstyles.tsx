import { StyleSheet } from "react-native";
import { mycolors } from "./colors";

export const styles = StyleSheet.create({
    
 btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mycolors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mycolors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mycolors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mycolors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: mycolors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: mycolors.black,
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: "row",
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: mycolors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: mycolors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
    
})