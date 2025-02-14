import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthNavigater from "@/components/AuthNavigater";
import CustomButton from "@/components/CustomButton";
import SecuredInput from "@/components/SecuredInput";
import CustomTitle from "@/components/CustomTitle";
import CustomInput from "@/components/CustomInput";
import { handleResponce } from "@/components/lib";

const signIn = () => {
  // State for Sign In
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signInHandler = async () => {
    const responce = await fetch(
      "https://bchat-api-server.onrender.com/bchat/api/v1/users/signIn",
      {
        method: "POST",
        body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      }
    );
    await handleResponce(responce);
  };
  return (
    <View>
      <View
        style={{
          gap: 8,
        }}
      >
        <CustomTitle text="Fill the form & sign in!" />
        <CustomInput label="Enter email" inputChangeHandler={setSignInEmail} />
        <SecuredInput label="Password" inputChangeHandler={setSignInPassword} />
        <CustomButton label="Sign In" pressHandler={signInHandler} />
      </View>
      <AuthNavigater
        text="I have't any account "
        btnTitle="Go to Sign Up"
        href={"./signUp"}
      />
    </View>
  );
};

export default signIn;
