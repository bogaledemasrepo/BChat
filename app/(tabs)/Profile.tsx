import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Feather } from "@expo/vector-icons";
import EditableInput from "@/components/EditableInput";
import SecuredInput from "@/components/SecuredInput";
import { router } from "expo-router";

const Setting = () => {
  const [fullname, setFullname] = useState("Bogale Demas");
  const [email, setEmail] = useState("bogaledemas@bechat.io");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2aa",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: "100%",
          backgroundColor: "#a65858",
          margin: 8,
        }}
      >
        <Image
          style={{ flex: 1 }}
          source={{ uri: "" }}
          height={100}
          width={100}
        />
      </View>
      <View style={{}}>
        <EditableInput defualtValue={fullname} changeHandler={() => {}} />
        <EditableInput defualtValue={email} changeHandler={() => {}} />
        <CustomButton
          label="Change Password"
          pressHandler={() => {
            setModalVisible(true);
          }}
        />
        <CustomButton
          label="Sign out"
          pressHandler={() => {
            router.navigate("/");
          }}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "10%",
            marginVertical: "auto",
            gap: 8,
          }}
        >
          <SecuredInput
            label="Previos password"
            inputChangeHandler={() => {}}
          />
          <SecuredInput label="New password" inputChangeHandler={() => {}} />
          <SecuredInput
            label="Confirm New password"
            inputChangeHandler={() => {}}
          />
          <CustomButton
            label="Submit"
            pressHandler={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
