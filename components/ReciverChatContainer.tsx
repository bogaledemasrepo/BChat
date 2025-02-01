import { StyleSheet, Text, View } from "react-native";
const ReciverChatContainer = ({
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
        borderEndEndRadius: 16,
        borderEndStartRadius: 8,
        borderStartEndRadius: 16,
        borderStartStartRadius: 8,
        alignSelf: "flex-end",
      }}
    >
      <View style={{ flex: 9, overflow: "hidden", padding: 8 }}>
        <Text
          style={{ textOverflow: "wrap", color: "#777", fontWeight: "500" }}
        >
          {msg}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderEndEndRadius: 99,
          borderEndStartRadius: 99,
        }}
      ></View>
    </View>
  );
};

export default ReciverChatContainer;

const styles = StyleSheet.create({});
