import { StyleSheet, View } from "react-native";
import { useState } from "react";
import AuthNavigater from "@/components/AuthNavigater";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import CustomTitle from "@/components/CustomTitle";
import SecuredInput from "@/components/SecuredInput";

const index = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  // State for Sign In
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  (async () => {
    try {
      const res = await fetch("http://localhost:3000s/");
      console.log("Hallo", res);
    } catch (error) {
      console.log(error);
    }
  })();
  const signInHandler = async () => {
    console.log({ email: signInEmail, password: signInPassword });
    try {
      const responce = await fetch("http://localhost:4000/signIn", {
        method: "POST",
        // body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      });
      console.log(responce);
    } catch (error) {
      console.log(error);
    }
  };
  // State for Sign Up
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpFullname, setSignUpFullname] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const signUpHandler = () => {};
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
