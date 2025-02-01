import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ChatLink from "@/components/ChatLink";
import SearchInput from "@/components/SearchInput";

const Allusers = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{ marginBottom: 8 }}>
        <SearchInput searchHandler={() => {}} />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12]}
        renderItem={() => <ChatLink email="user123" fullname="Bogale Demas" />}
      />
    </View>
  );
};

export default Allusers;

const styles = StyleSheet.create({});
