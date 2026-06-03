import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css"
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useMMKVBoolean, useMMKVString } from "react-native-mmkv";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')
  const [accessToken, setAccessToken] = useMMKVString('accessToken')
  const router = useRouter()

  useEffect(() => {
    router.push(accessToken ? '/(tabs)' : '/(auth)')
  }, [accessToken])

  return (
    
      <KeyboardProvider>
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="productDetails/[id]" options={{ headerShown: false }} />
           
          </Stack>
          <StatusBar style={darkmode ? 'light' : 'dark'}/>
      </KeyboardProvider>
    
    
  );
}
