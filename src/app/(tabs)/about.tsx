import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='bg-white p-5 rounded-b-xl'>
        <Text className='text-3xl text-center text-red-500'>Cart</Text>
        <Link href={'/products'}>No any item on cart</Link>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})