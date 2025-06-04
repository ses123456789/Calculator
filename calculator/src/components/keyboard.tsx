import * as React from "react";
import Button from "./button";
import { View, Text } from "react-native";
import { styles } from "../styles/globalstyles";
import { mycolors } from "../styles/colors";

export default function MyKeyboard(){
    const [firstNumber, setFirstNumber] = React.useState("");
const [secondNumber, setSecondNumber] = React.useState("");
const [operation, setOperation] = React.useState("");
const [result, setResult] = React.useState<number | null>(null);
const handleNumberPress = (buttonValue: string) => {
  if (result !== null) {
    setFirstNumber(buttonValue);
    setResult(null);
  } else if (firstNumber.length < 10) {
    setFirstNumber(firstNumber + buttonValue);
  }
};
const handleOperationPress = (buttonValue: string) => {
      if (result !== null && firstNumber === "") {
    setSecondNumber(result.toString());
    setOperation(buttonValue);
    setResult(null);
  } 
  
  else if (firstNumber !== "") {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }
};
const clear = () => {
  setFirstNumber("");
  setSecondNumber("");
  setOperation("");
  setResult(null);
};
const clearafteroperation = () => {
  setFirstNumber("");
  setSecondNumber("");
  setOperation("");
 
};

const calculateResult = () => {
  if (firstNumber === "" || secondNumber === "" || operation === "") return;

  const num1 = parseFloat(secondNumber);
  const num2 = parseFloat(firstNumber);
  let calculatedResult = 0;

  switch (operation) {
    case "+":
      calculatedResult = num1 + num2;
      break;
    case "-":
      calculatedResult = num1 - num2;
      break;
    case "×":
    case "*":
      calculatedResult = num1 * num2;
      break;
    case "÷":
    case "/":
      calculatedResult = num2 !== 0 ? num1 / num2 : 0; 
      break;
    default:
      return; 
  }

  setResult(calculatedResult);
  clearafteroperation(); 
  
  
  
};
const firstNumberDisplay = () => {
  if (result !== null) {
    return <Text style={result < 99999 ? [styles.screenFirstNumber, {color: mycolors.result}] : [styles.screenFirstNumber ,{fontSize: 50, color: mycolors.result }]}>{result?.toString()}</Text>;
  }
  if (firstNumber && firstNumber.length < 6) {
    return <Text style={styles.screenFirstNumber}>{firstNumber}</Text>;
  }
  if (firstNumber === "") {
    return <Text style={styles.screenFirstNumber}>0</Text>;
  }
  if (firstNumber.length > 5 && firstNumber.length < 8) {
    return (
      <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>
        {firstNumber}
      </Text>
    );
  }
  if (firstNumber.length > 7) {
    return (
      <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>
        {firstNumber}
      </Text>
    );
  }
  return <Text style={styles.screenFirstNumber}>0</Text>;
};
return (
    <View style = {styles.viewBottom}>
        <View
  style={{
    height: 120,
    width: "90%",
    justifyContent: "flex-end",
    alignSelf: "center",
  }}
>
  <Text style={styles.screenSecondNumber}>
    {secondNumber}
    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>
      {operation}
    </Text>
  </Text>
  {firstNumberDisplay()}
</View>
  <View style={styles.row}>
  <Button title="C" isgray onPress={clear} />
  <Button title="+/-" isgray onPress={() => handleOperationPress("+/-")} />
  <Button title="%" isgray onPress={() => handleOperationPress("%")} />
  <Button title="÷" isblue onPress={() => handleOperationPress("/")} />
</View>

<View style={styles.row}>
  <Button title="7" onPress={() => handleNumberPress("7")} />
  <Button title="8" onPress={() => handleNumberPress("8")} />
  <Button title="9" onPress={() => handleNumberPress("9")} />
  <Button title="×" isblue onPress={() => handleOperationPress("*")} />
</View>

<View style={styles.row}>
  <Button title="4" onPress={() => handleNumberPress("4")} />
  <Button title="5" onPress={() => handleNumberPress("5")} />
  <Button title="6" onPress={() => handleNumberPress("6")} />
  <Button title="-" isblue onPress={() => handleOperationPress("-")} />
</View>

<View style={styles.row}>
  <Button title="1" onPress={() => handleNumberPress("1")} />
  <Button title="2" onPress={() => handleNumberPress("2")} />
  <Button title="3" onPress={() => handleNumberPress("3")} />
  <Button title="+" isblue onPress={() => handleOperationPress("+")} />
</View>

<View style={styles.row}>
  <Button title="." onPress={() => handleNumberPress(".")} />
  <Button title="0" onPress={() => handleNumberPress("0")} />
  <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
  <Button title="=" isblue onPress={calculateResult} />
</View>
</View>
);
}