import { io } from "socket.io-client";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
const uri = "http://localhost:3000/";
let socket = io(uri, {
  transports: ["websocket"],
  query: {
    username: "bogale",
    password: "bogi123",
  },
  extraHeaders: {
    "my-custom-header": "1234", // ignored
  },
});

const index = () => {
  const [msg, setMsg] = useState("");
  socket.on("wellcome", (msg) => {
    setMsg(msg);
  });
  socket.on("friends", (friends) => {
    console.log(JSON.parse(friends));
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#226e224b",
        paddingHorizontal: 4,
      }}
    >
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ index }) =>
          index % 2 === 0 ? (
            <View
              style={{
                marginVertical: 4,
                width: "60%",
                padding: 8,
                borderColor: "#2aa02a92",
                backgroundColor: "#6fb96fc1",
                borderRadius: 8,
                borderEndEndRadius: 4,
                borderWidth: 1,
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ color: "#0d4d0d" }}>Messages from user</Text>
            </View>
          ) : (
            <View
              style={{
                marginVertical: 4,
                width: "60%",
                padding: 8,
                borderColor: "#2aa02a92",
                backgroundColor: "#6fb96fc1",
                borderRadius: 8,
                borderEndStartRadius: 4,
                borderWidth: 1,
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ color: "#0d4d0d" }}>Messages from user</Text>
            </View>
          )
        }
      />
      <View style={{ flexDirection: "row", alignItems: "center", margin: 8 }}>
        <TextInput
          style={{
            flex: 3,
            padding: 8,
            borderCurve: "circular",
            borderWidth: 1,
            borderColor: "#0d4d0d",
            borderStartStartRadius: 8,
            borderEndStartRadius: 8,
          }}
        />
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 8,
            borderWidth: 1,
            borderColor: "#0d4d0d",
            borderStartEndRadius: 8,
            borderEndEndRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "semibold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
