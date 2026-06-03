import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'expo-image'
import { FlashList } from "@shopify/flash-list";

const ProductDetails = () => {

    const { id } = useLocalSearchParams()
    const width = Dimensions.get('screen').width
    const [product, setProduct] = useState()

    const getProduct = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`)

            if (!res.ok)
                throw new Error('Fetch failed!')
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <View className='bg-[#8b4fff] pt-20 pb-47 px-5 rounded-b-[40px] relative'>
           

            <View style={{width: width-55}} className={`bg-white top-15 justify-center items-center rounded-3xl shadow-md shadow-olive-400 self-center h-60 absolute`}>
                
               
                
            </View>
          
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})