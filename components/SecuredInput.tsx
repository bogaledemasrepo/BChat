import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
interface SecuredInputProbs {
  label: string;
  inputChangeHandler: (text: string) => void;
}
const SecuredInput = ({ label, inputChangeHandler }: SecuredInputProbs) => {
  const [isHiden, setIsHiden] = useState(true);
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
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <TextInput
        {...{ secureTextEntry: isHiden ? true : false }}
        style={{
          flex: 1,
          outline: "none",
          color: "#7f7f7f",
        }}
        placeholder={label}
        onChangeText={inputChangeHandler}
      />
      <Pressable onPress={() => setIsHiden(!isHiden)}>
        <Feather
          name={`${isHiden ? "eye-off" : "eye"}`}
          color={"#4e4e4e"}
          size={18}
        />
      </Pressable>
    </View>
  );
};

export default SecuredInput;

const styles = StyleSheet.create({});
