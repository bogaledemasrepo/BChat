import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExplorableItem from "@/components/ExplorableItem";
import { FlatList } from "react-native-gesture-handler";
import SearchInput from "@/components/SearchInput";

const explore = () => {
  const explorale = [
    { fullname: "Bogale Demas", email: "bogidemas@bechat.io" },
    { fullname: "Bogale Demas", email: "bogidemas@bechat.io" },
    { fullname: "Bogale Demas", email: "bogidemas@bechat.io" },
    { fullname: "Bogale Demas", email: "bogidemas@bechat.io" },
    { fullname: "Bogale Demas", email: "bogidemas@bechat.io" },
    { fullname: "Bogale Demas", email: "bogidemas@bechat.io" },
  ];

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={{ marginBottom: 8 }}>
        <SearchInput searchHandler={() => {}} />
      </View>
      <FlatList
        data={explorale}
        renderItem={({ item }) => <ExplorableItem {...item} />}
      />
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({});
