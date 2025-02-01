import { StyleSheet, Text, View } from "react-native";

const SenderChatContainer = ({
  bgcolor,
  msg,
}: {
  bgcolor: string;
  msg: string;
}) => {
  return (
    <View
      style={{
        marginVertical: 4,
        position: "relative",
        backgroundColor: `${bgcolor}`,
        width: "70%",
        flexDirection: "row",
        borderEndEndRadius: 8,
        borderEndStartRadius: 16,
        borderStartEndRadius: 8,
        borderStartStartRadius: 16,
        alignSelf: "flex-start",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderEndEndRadius: 99,
          borderEndStartRadius: 99,
        }}
      ></View>
      <View style={{ flex: 9, overflow: "hidden", padding: 8 }}>
        <Text
          style={{ textOverflow: "wrap", color: "#777", fontWeight: "500" }}
        >
          {msg}
        </Text>
      </View>
    </View>
  );
};

export default SenderChatContainer;

const styles = StyleSheet.create({});
