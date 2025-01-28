import Header from "@/components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <MaterialIcons
                name="menu"
                style={{
                  fontWeight: "bold",
                  margin: 8,
                }}
                size={24}
              />
            </TouchableOpacity>
          ),
          headerStyle: styles.header,
          title: "Be Chat",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#996565",
          },
        }}
      />
    </Stack>
  );
};
export default _layout;
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#c7c7c7",
  },
});
