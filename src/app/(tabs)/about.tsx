import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View className='flex-1 justify-center items-center bg-blue-200'>
      <View className='bg-white p-5 rounded-b-xl'>
        <Text className='text-3xl'>About page</Text>
        <Link href={'/products'}>Go To Products page</Link>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})