import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { ApiContext } from "@/hooks/ApiContext";

const index = () => {
  const { sock, user } = useContext(ApiContext);
  const [smsg, sayWellcome] = useState("");
  sock.on("wellcome", (msg: string) => {
    sayWellcome(msg);
  });
  sock.on("disconnect", () => {
    sayWellcome("");
    console.log("Disconnected!");
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginHorizontal: "auto",
      }}
    >
      <View
        style={{
          width: "100%",
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
          {smsg === "" ? "Loading..." : smsg}
        </Text>
      </View>
      <CustomButton
        label={smsg === "" ? "Chat app loading..." : "Get started"}
        pressHandler={async () => router.push("/auth")}
      />
    </View>
  );
};

export default index;
