import CustomTitle from "@/components/CustomTitle";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: "#777",
        headerTitleAlign: "center",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#232353",
        },
        tabBarLabelStyle: {
          padding: 0,
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: () => <CustomTitle text="Explore friends" />,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
