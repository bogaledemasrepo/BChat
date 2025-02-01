import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import CustomTitle from "@/components/CustomTitle";

const ChatDetailLayout = () => {
  const { groupId } = useLocalSearchParams();
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#777",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="[groupId]"
        options={{
          headerTitle: () => <CustomTitle text={`Group ${groupId}`} />,
        }}
      />
    </Stack>
  );
};

export default ChatDetailLayout;
