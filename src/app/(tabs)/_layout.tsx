import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return <Tabs screenOptions={{tabBarActiveTintColor: '#8b4fff'}}>
    <Tabs.Screen name="index" options={{headerShown:false, title: "Home", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='home-outline'/>}}/>
    <Tabs.Screen name="about" options={{title: "About", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='cart-outline'/>}}/>
    <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='person-outline'/>}}/>
  </Tabs>;
}
