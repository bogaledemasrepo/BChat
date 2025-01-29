import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = ({ pressHandler }: { pressHandler: () => {} }) => {
  return (
    <Pressable
      onPress={() => pressHandler()}
      style={{
        width: "90%",
        height: 48,
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
        Get started
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
