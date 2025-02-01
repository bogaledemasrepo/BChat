import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ExplorableItem = ({
  fullname,
  email,
}: {
  fullname: string;
  email: string;
}) => {
  return (
    <View
      style={{
        borderColor: "#dcdcdc",
        backgroundColor: "#dcdcdc40",
        borderWidth: 1,
        width: "100%",
        height: 60,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
        position: "relative",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 8,
          backgroundColor: "#7c7c7c",
          marginRight: 4,
        }}
      >
        <Image source={{ uri: "" }} style={{ flex: 1 }} />
      </View>
      <View>
        <Text style={{ color: "#505050" }}>{fullname}</Text>
        <Text style={{ color: "#505050" }}>{email}</Text>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 4,
          bottom: 4,
          borderColor: "#aab1ff",
          backgroundColor: "#7680b4de",
          borderWidth: 1,
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 4,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Add friend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExplorableItem;

const styles = StyleSheet.create({});
