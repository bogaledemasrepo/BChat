import { View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
interface EditableInputProbs {
  defualtValue: string;
  changeHandler: () => void;
}
const EditableInput = ({ defualtValue, changeHandler }: EditableInputProbs) => {
  const [value, setValue] = useState(defualtValue);
  const [editable, setEditable] = useState(false);
  return (
    <View
      style={{
        padding: 8,
        borderColor: "#adadad",
        backgroundColor: "#dcdcdc",
        borderWidth: 1,
        width: "100%",
        height: 40,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 8,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          outline: "none",
          color: "#7f7f7f",
        }}
        {...{ "aria-disabled": !editable }}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable onPress={() => setEditable(!editable)}>
        <Feather
          name={editable ? `arrow-right` : `edit`}
          color={"#4e4e4e"}
          size={18}
        />
      </Pressable>
    </View>
  );
};

export default EditableInput;
