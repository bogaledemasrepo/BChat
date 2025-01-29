import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

const Allusers = () => {
  return (
    <View>
      <Text>Allusers</Text>
      <Button
        title="Go to chat"
        onPress={() => router.navigate("/chatDetail")}
      />
    </View>
  );
};

export default Allusers;

const styles = StyleSheet.create({});
