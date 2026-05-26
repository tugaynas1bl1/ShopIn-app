import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import List from '../components/List';

export default function HomeScreen() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')

      if (!res.ok)
        throw new Error('Error while fetching products')

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
    <View className="">
      <Header product={products[6]} />
      <List />
      <StatusBar style="dark" />
    </View>
  );
}
