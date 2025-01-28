import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          height: "40%",
          borderWidth: 1,
          borderColor: "#aaa",
          backgroundColor: "#aaaaaaaa",
          borderRadius: 8,
          marginVertical: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#59606c",
          }}
        >
          Wellcome to BChat App
        </Text>
      </View>
      <Link href={"/(auth)/signIn"}>
        <Pressable
          style={{
            padding: 8,
            backgroundColor: "#84ff84d7",
            borderRadius: 99,
            borderColor: "#84ff84",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              fontWeight: "semibold",
            }}
          >
            Get started
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
