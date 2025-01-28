import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={{}}>
      <View>
        <MaterialIcons size={24} name="menu" />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#29395cdd",
        }}
      >
        Be Chat
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
