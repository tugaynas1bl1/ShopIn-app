import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useMMKVBoolean } from "react-native-mmkv";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

const Layout = () => {
  const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')


  return (
    
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="register" options={{ title: 'Register' }} />
    </Stack>
    
  );
}

export default Layout