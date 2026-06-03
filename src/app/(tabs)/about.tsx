import { Link } from 'expo-router'
import { prefetch } from 'expo-router/build/global-state/router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv'
import StyledView from '../components/StyledView'


const About = () => {
  const [darkmode, setDarkmode] = useMMKVBoolean('darkmode')
  return (
    <StyledView className="justify-center items-center">
      <View className='p-5 rounded-b-xl'>
        <Text className='text-3xl text-center text-red-500'>Cart</Text>
        <Link href={'/products'}>No any item on cart</Link>
        <TouchableOpacity onPress={() => {
          setDarkmode(prevState => !prevState)
        }} className='rounded-xl bg-blue-500 px-6 py-3 mt-5 active:bg-blue-600'>
          <Text className='text-center text-base font-semibold text-white'>
            {darkmode ? "Disable" : "Enable"} Darkmode
          </Text>
        </TouchableOpacity>
      </View>
    </StyledView>
  )
}

export default About

const styles = StyleSheet.create({})