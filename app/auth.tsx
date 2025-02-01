import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AuthNavigater from "@/components/AuthNavigater";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import CustomTitle from "@/components/CustomTitle";
import { ApiContext } from "@/hooks/ApiContext";
import SecuredInput from "@/components/SecuredInput";
import { router } from "expo-router";

const index = () => {
  const { sock } = useContext(ApiContext);
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  // State for Sign In
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signInHandler = () => {
    router.navigate("/(tabs)/chat/Allusers");
    // sock.emit(
    //   "/signIn",
    //   JSON.stringify({
    //     email: signInEmail,
    //     password: signInPassword,
    //   })
    // );
  };
  // State for Sign Up
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpFullname, setSignUpFullname] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const signUpHandler = () => {
    sock.emit(
      "/signUp",
      JSON.stringify({
        fullname: signUpFullname,
        email: signUpEmail,
        password: signUpPassword,
      })
    );
  };
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {haveAnAccount && (
        <View>
          <View
            style={{
              gap: 8,
            }}
          >
            <CustomTitle text="Fill the form & sign up!" />
            <CustomInput
              label="Enter full name"
              inputChangeHandler={(i) => setSignUpFullname(i)}
            />
            <CustomInput
              label="Enter email"
              inputChangeHandler={(i) => setSignUpEmail(i)}
            />
            <SecuredInput
              label="Password"
              inputChangeHandler={(i) => setSignUpPassword(i)}
            />
            <SecuredInput
              label="Confirm password"
              inputChangeHandler={(i) => setPasswordConfirm(i)}
            />
            <CustomButton label="Sign Up" pressHandler={signUpHandler} />
          </View>
          <AuthNavigater
            text="I have an account "
            btnTitle="Go to Sign In"
            pressHandler={async () => setHaveAnAccount(!haveAnAccount)}
          />
        </View>
      )}
      {!haveAnAccount && (
        <View>
          <View
            style={{
              gap: 8,
            }}
          >
            <CustomTitle text="Fill the form & sign in!" />
            <CustomInput
              label="Enter email"
              inputChangeHandler={setSignInEmail}
            />
            <SecuredInput
              label="Password"
              inputChangeHandler={setSignInPassword}
            />
            <CustomButton label="Sign In" pressHandler={signInHandler} />
          </View>
          <AuthNavigater
            text="I have't any account "
            btnTitle="Go to Sign Up"
            pressHandler={async () => setHaveAnAccount(!haveAnAccount)}
          />
        </View>
      )}
    </View>
  );
};

export default index;
const styles = StyleSheet.create({});
