import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomTitle from "@/components/CustomTitle";
import CustomInput from "@/components/CustomInput";
import SecuredInput from "@/components/SecuredInput";
import CustomButton from "@/components/CustomButton";
import AuthNavigater from "@/components/AuthNavigater";
import { handleResponce } from "@/components/lib";
import { navigate } from "expo-router/build/global-state/routing";

const signUp = () => {
  // State for Sign Up
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpFullname, setSignUpFullname] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const signUpHandler = async () => {
    try {
      const responce = await fetch(
        "http://localhost:8000/bchat/api/v1/users/signUp",
        //"https://bchat-api-server.onrender.com/bchat/api/v1/users/signUp",
        {
          method: "POST",
          body: JSON.stringify({
            email: signUpEmail,
            fullname: signUpFullname,
            password: signUpPassword,
          }),
        }
      );
      await handleResponce(responce);
    } catch (error) {
      console.log("Somethig went wrong!", error);
    }
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
          href={"./signIn"}
        />
      </View>
    </View>
  );
};

export default signUp;
