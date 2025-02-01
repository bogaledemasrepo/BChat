import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const SearchInput = ({ searchHandler }: { searchHandler: () => void }) => {
  const [queryText, setQueryText] = useState("");
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
        placeholder={"Search..."}
        onChangeText={(text) => setQueryText(text)}
      />
      <Pressable onPress={searchHandler}>
        <Feather name={`search`} color={"#4e4e4e"} size={18} />
      </Pressable>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
