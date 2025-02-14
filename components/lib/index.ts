import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";

export const handleResponce = async (resp: Response) => {
  let tokenSeted = false;
  try {
    const { succes, data } = await resp.json();
    if (succes === true) {
      const { token } = data;
      await AsyncStorage.setItem("bchat-tocken", token);
      tokenSeted = true;
    }
  } catch (error) {
    console.log(error);
  }
  if (tokenSeted) return Redirect({ href: "/(tabs)/chat/Allusers" });
};
