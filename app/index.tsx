import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const index = () => {
  const [user, setUser] = useState("");
  let { getItem, setItem } = useAsyncStorage("@bogitocken");
  async function setUserToken(val: string) {
    await setItem(val);
  }
  async function getUserToken() {
    const tocken = await getItem();
    setUser(tocken || "");
  }
  useEffect(() => {
    setUserToken("");
    getUserToken();
  }, []);
  if (user !== "") return router.replace("/(tabs)/chat/Allusers");
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
          Wellcome to BChat App
        </Text>
      </View>
      <CustomButton
        label="Get started"
        pressHandler={async () => router.push("/auth")}
      />
    </View>
  );
};

export default index;

// const styles = StyleSheet.create({});
// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { useAsyncStorage } from "@react-native-async-storage/async-storage";

// export default function App() {
//   const [value, setValue] = useState("value");
//

//   const readItemFromStorage = async () => {
//     const item = await getItem();
//     setValue(item);
//   };

//   const writeItemToStorage = async (newValue) => {
//     await setItem(newValue);
//     setValue(newValue);
//   };

//   useEffect(() => {
//     readItemFromStorage();
//   }, []);

//   return (
//     <View style={{ margin: 40 }}>
//       <Text>Current value: {value}</Text>
//       <TouchableOpacity
//         onPress={() =>
//           writeItemToStorage(Math.random().toString(36).substr(2, 5))
//         }
//       >
//         <Text>Update value</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
