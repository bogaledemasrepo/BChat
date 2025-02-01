import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const SendChatContent = () => {
  const [textContent, setTextContent] = useState("");
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
        style={{
          flex: 1,
          outline: "none",
          color: "#7f7f7f",
        }}
        placeholder={""}
        onChangeText={(text) => setTextContent(text)}
      />
      <Pressable onPress={() => ""}>
        <Feather name={`send`} color={"#4e4e4e"} size={18} />
      </Pressable>
    </View>
  );
};

export default SendChatContent;
