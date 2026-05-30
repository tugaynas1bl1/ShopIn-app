import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Categories = () => {
  return (
    <View className='flex-row px-12 mb-5 justify-center mt-28 gap-8'>
        
        <View className='gap-2 items-center'>
            <TouchableOpacity className='size-17 flex justify-center items-center bg-purple-100 rounded-3xl'>
                <Ionicons size={30} color={'#8b4fff'} name='copy-outline'/>
            </TouchableOpacity>
            <Text>Category</Text>
        </View>

        <View className='gap-2 items-center'>
            <TouchableOpacity className='size-17 flex justify-center items-center bg-purple-100 rounded-3xl'>
                <Ionicons size={30} color={'#8b4fff'} name='git-compare-outline'/>
            </TouchableOpacity>
            <Text>Compare</Text>
        </View>
        
        <View className='gap-2 items-center'>
            <TouchableOpacity className='size-17 flex justify-center items-center bg-purple-100 rounded-3xl'>
                <Ionicons size={30} color={'#8b4fff'} name='pricetags'/>
            </TouchableOpacity>
            <Text>Sales event</Text>
        </View>
        
        <View className='gap-2 items-center'>
            <TouchableOpacity className='size-17 flex justify-center items-center bg-[#fee5de] rounded-3xl'>
                <Ionicons size={30} color={'#ff7c59'} name='cash'/>
            </TouchableOpacity>
            <Text>Offers</Text>
        </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})