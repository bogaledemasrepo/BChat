import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ChatLink = ({ fullname, email }: { fullname: string; email: string }) => {
  return (
    <Link href={`/chatDetail/${email}`}>
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
      </View>
    </Link>
  );
};

export default ChatLink;

const styles = StyleSheet.create({});
