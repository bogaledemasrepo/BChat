import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
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
      <CustomButton pressHandler={async () => router.navigate("/auth")} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
