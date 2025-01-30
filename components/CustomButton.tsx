import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
interface CustomBtnProbs {
  label: string;
  pressHandler: () => void;
}
const CustomButton = ({ label, pressHandler }: CustomBtnProbs) => {
  return (
    <TouchableOpacity
      onPress={() => pressHandler()}
      style={{
        width: "100%",
        height: 40,
        padding: 8,
        backgroundColor: "#232353",
        borderRadius: 99,
        borderColor: "#84ff84",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "monospace",
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
