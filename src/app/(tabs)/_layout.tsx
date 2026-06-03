import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMMKVBoolean } from "react-native-mmkv";

export default function TabsLayout() {
  const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')
  return <Tabs screenOptions={{headerTitleStyle: {color: darkmode ? 'white' : 'black'}, headerStyle: {backgroundColor: darkmode ? 'black' : 'white', borderBottomWidth: 1}, tabBarActiveTintColor: '#8b4fff', tabBarInactiveTintColor: darkmode ? 'white' : '#ccc', tabBarStyle: {backgroundColor: darkmode ? 'black' : 'white'}}}>
    <Tabs.Screen name="index" options={{headerShown:false, title: "Home", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='home-outline'/>}}/>
    <Tabs.Screen name="about" options={{title: "About", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='cart-outline'/>}}/>
    <Tabs.Screen name="profile" options={{title: "Login", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='person-outline'/>}}/>
  </Tabs>;
}
