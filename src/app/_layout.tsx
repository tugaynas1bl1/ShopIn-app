import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css"
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="products" options={{ title: 'Products' }} />
      </Stack>
    </SafeAreaProvider>
    
  );
}
