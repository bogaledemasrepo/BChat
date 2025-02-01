import { StyleSheet, Text, View } from "react-native";
import SenderChatContainer from "@/components/SenderChatContainer";
import ReciverChatContainer from "@/components/ReciverChatContainer";
import SendChatContent from "@/components/SendChatContent";

const ChatDetail = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SenderChatContainer bgcolor="#e8e8e8" msg="hi" />
      <ReciverChatContainer bgcolor="#e8e8e8" msg="hello world!!!" />
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          marginVertical: 8,
        }}
      >
        <SendChatContent />
      </View>
    </View>
  );
};

export default ChatDetail;

const styles = StyleSheet.create({});
