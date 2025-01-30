import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
interface AuthNavigaterProbs {
  text: string;
  btnTitle: string;
  pressHandler: () => {};
}
const AuthNavigater = ({
  text,
  btnTitle,
  pressHandler,
}: AuthNavigaterProbs) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          color: "#7f7f7f",
        }}
      >
        {text}
      </Text>
      <TouchableWithoutFeedback onPress={pressHandler}>
        <Text
          style={{
            color: "#6060ff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {btnTitle}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AuthNavigater;

const styles = StyleSheet.create({});
