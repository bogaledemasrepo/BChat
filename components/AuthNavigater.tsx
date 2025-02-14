import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Link, RelativePathString } from "expo-router";
interface AuthNavigaterProbs {
  text: string;
  href: RelativePathString;
  btnTitle: string;
}
const AuthNavigater = ({ text, href, btnTitle }: AuthNavigaterProbs) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          color: "#7f7f7f",
        }}
      >
        {text}
      </Text>
      <Link href={href}>
        <Text
          style={{
            color: "#6060ff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {btnTitle}
        </Text>
      </Link>
    </View>
  );
};

export default AuthNavigater;

const styles = StyleSheet.create({});
