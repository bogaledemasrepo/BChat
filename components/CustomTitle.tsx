import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomTitle = ({ text }: { text: string }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#7f7f7f",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({});
