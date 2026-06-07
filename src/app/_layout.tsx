import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css"
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useMMKVBoolean, useMMKVString } from "react-native-mmkv";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"

export default function RootLayout() {
  const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')
  const { isAuthenticated } = useAuth()
  
  const router = useRouter()

  useEffect(() => {

    router.push(isAuthenticated ? '/(tabs)' : '/(auth)')
  }, [isAuthenticated])

  return (
    
      <KeyboardProvider>
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="productDetails/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="User" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style={darkmode ? 'light' : 'dark'}/>
      </KeyboardProvider>
    
    
  );
}
