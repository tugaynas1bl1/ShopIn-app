import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import List from '../components/List';
import Categories from '../components/categories';
import Products from '../components/products';

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
    <ScrollView>
      <View className='mb-10'>
        <Header product={products[6]} />
        <List />
        <Categories />
        <Products />
        <StatusBar style="dark" />
      </View>
    </ScrollView>
    
  );
}
