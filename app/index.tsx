import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const index = () => {
  const [hasToken, setHasToken] = useState(false);
  const checkHasToken = async () => {
    const token = await AsyncStorage.getItem("bchat-token");
    if (token) setHasToken(true);
  };

  useEffect(() => {
    checkHasToken();
  }, []);
  if (hasToken) return Redirect({ href: "/(tabs)/chat/Allusers" });
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("./../assets/images/ddd.png")}
      style={{ width: "100%", height: "100%" }}
    >
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
            backgroundColor: "#aaaa",
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
            {"Wellcome to bchat application"}
          </Text>
        </View>
        <CustomButton
          label={"Get started"}
          pressHandler={async () => router.push("/auth")}
        />
      </View>
    </ImageBackground>
  );
};

export default index;
