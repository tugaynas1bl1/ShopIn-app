import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'expo-image';

const Header = ({product} : any) => {
    const width = Dimensions.get('screen').width
    return (
        <View className='bg-[#8b4fff] pt-28 pb-48 px-5 rounded-b-[40px] relative'>
            <View className='flex-row justify-between items-center'>
                <Text className='text-white text-3xl font-extrabold'>SHOPIN</Text>
                <View className='flex-row gap-3'>
                    <View className='bg-white rounded-xl w-50 h-16 relative'>
                        <Ionicons className='absolute top-3 left-2' name='search-outline'/>
                        <TextInput className='pl-12 h-full placeholder:text-xl placeholder:font-semibold' placeholder='Search'/>
                    </View>
                    <TouchableOpacity className='bg-white rounded-xl size-16 items-center justify-center'>
                        <Ionicons name='camera-outline' size={30}/>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={{width: width-50}} className={`bg-white flex-row items-center rounded-3xl self-center h-50 gap-3 absolute -bottom-20`}>
                <Image contentFit='scale-down' style={{width: 160, height: 140, objectFit: 'scale-down', borderWidth: 1, borderRadius: 20, borderColor: '#ccc', marginLeft: 10}} className='' source={{uri:product?.thumbnail}} />
                
                <View className='gap-2'>
                    <Text className='text-lg font-medium'>Introducing</Text>
                    <Text className='text-xl font-bold'>{product?.title}</Text>
                    <TouchableOpacity className='bg-black rounded-xl w-25'>
                        <Text className='text-white text-center text-xl p-2'>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})