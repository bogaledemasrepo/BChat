import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AuthNavigater from "@/components/AuthNavigater";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import CustomTitle from "@/components/CustomTitle";

const index = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  const signInHandler = () => {
    console.log("Sign In");
  };
  const signUpHandler = () => {
    console.log("Sign Up");
  };
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
              label="First Name"
              inputChangeHandler={async () => {}}
            />
            <CustomInput
              label="Last Name"
              inputChangeHandler={async () => {}}
            />
            <CustomInput label="User Name" inputChangeHandler={() => {}} />
            <CustomInput label="password" inputChangeHandler={() => {}} />
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
              label="User name"
              inputChangeHandler={async () => {}}
            />
            <CustomInput label="Password" inputChangeHandler={async () => {}} />
            <CustomButton label="Sign In" pressHandler={signInHandler} />
          </View>
          <AuthNavigater
            text="I have't any account "
            btnTitle="Go to Sign In"
            pressHandler={async () => setHaveAnAccount(!haveAnAccount)}
          />
        </View>
      )}
    </View>
  );
};

export default index;
const styles = StyleSheet.create({});
