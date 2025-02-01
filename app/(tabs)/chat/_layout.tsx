import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import CustomTitle from "@/components/CustomTitle";
const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTintColor: "#777",
          headerTitleAlign: "center",
          drawerInactiveTintColor: "#777",
          drawerLabelStyle: {
            color: "#777",
            fontWeight: "600",
          },
        }}
      >
        <Drawer.Screen
          name="Allusers"
          options={{
            drawerLabel: "Chat history",
            headerTitle: () => <CustomTitle text="Chat history" />,
            drawerIcon: ({ color }) => (
              <MaterialIcons color={color} name="manage-history" size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Groups"
          options={{
            headerTitle: () => <CustomTitle text="Groups" />,
            drawerIcon: ({ color }) => (
              <MaterialIcons color={color} name="group" size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Personal"
          options={{
            headerTitle: () => <CustomTitle text="Personal" />,
            drawerIcon: ({ color }) => (
              <MaterialIcons color={color} name="person" size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorite"
          options={{
            headerTitle: () => <CustomTitle text="Favorite" />,
            drawerIcon: ({ color }) => (
              <MaterialIcons color={color} name="favorite" size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          options={{
            headerTitle: () => <CustomTitle text="Setting" />,
            drawerIcon: ({ color }) => (
              <MaterialIcons color={color} name="settings" size={24} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
