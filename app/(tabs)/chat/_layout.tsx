import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerContentContainerStyle: {},
          drawerStyle: {
            borderWidth: 1,
            borderColor: "#f00",
          },
        }}
      >
        <Drawer.Screen
          name="Allusers"
          options={{
            drawerLabel: "Chat history",
            title: "Chat history",
            drawerIcon: () => <MaterialIcons name="manage-history" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Groups"
          options={{
            drawerIcon: () => <MaterialIcons name="group" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Personal"
          options={{
            drawerIcon: () => <MaterialIcons name="person" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Favorite"
          options={{
            drawerIcon: () => <MaterialIcons name="favorite" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Setting"
          options={{
            drawerIcon: () => <MaterialIcons name="settings" size={24} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
