import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import List from './List'
import StyledText from './StyledText';

const Products = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')

      if (!res.ok)
        throw new Error("Fetch link error!")

      const data = await res.json()
      setProducts(data.products)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <View className='w-full mt-10 gap-5'>
      <View className='flex-row justify-between px-12'>
        <StyledText className='text-2xl font-bold'>New Arrivals</StyledText>
        <TouchableOpacity className='bg-[#8b4fff] p-3 rounded-xl'>
            <Text className='text-white font-medium'>View All</Text>
        </TouchableOpacity>
      </View>
      <List products={products}/>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})