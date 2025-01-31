import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
interface CustomInputProbs {
  label: string;
  inputChangeHandler: (input: string) => void;
}
const CustomInput = ({ label, inputChangeHandler }: CustomInputProbs) => {
  return (
    <View
      style={{
        padding: 8,
        borderColor: "#adadad",
        backgroundColor: "#dcdcdc",
        borderWidth: 1,
        width: "100%",
        height: 40,
        borderRadius: 99,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          outline: "none",
          color: "#7f7f7f",
          paddingHorizontal: 16,
        }}
        placeholder={label}
        onChangeText={inputChangeHandler}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
