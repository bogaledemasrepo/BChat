import CustomTitle from "@/components/CustomTitle";
import ApiContextProvider from "@/hooks/ApiContext";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <ApiContextProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerTitle: () => <CustomTitle text="Authentication page!" />,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="chatDetail"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ApiContextProvider>
  );
};

export default _layout;
