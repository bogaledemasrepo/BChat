import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { goBack, push } from "expo-router/build/global-state/routing";
import { router } from "expo-router";

const index = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  return (
    <View>
      {haveAnAccount && (
        <View>
          <Text>I have an account Sign In</Text>
        </View>
      )}
      {!haveAnAccount && (
        <View>
          <Text>I have not any account Sign Up</Text>
        </View>
      )}
      <Button
        onPress={() => setHaveAnAccount(!haveAnAccount)}
        title={`${haveAnAccount ? "Sign In" : "Sign Up"}`}
      />
      <Button
        onPress={() => router.navigate("/(tabs)/chat/Allusers")}
        title="Authenticate"
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
