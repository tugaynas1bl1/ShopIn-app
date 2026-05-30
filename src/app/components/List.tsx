import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from "react-native";

const ProductCard = ({product}: any) => {
    return (
        <View className="w-45 mr-6 px-4">
            <TouchableOpacity className="self-end">
                <Ionicons color={'gray'} size={25} name='heart-outline'/>
            </TouchableOpacity>
            <Image 
                source={{ uri: product.thumbnail }}
                style={{ width: 150, height: 150}}>
            </Image>
            <Text numberOfLines={1}>{product?.title}</Text>
            <Text className="text-[12px] text-gray-500 pl-3 py-3">Category: {product.category}</Text>
            <View className="flex-row justify-between items-center">
                <Text className="font-semibold text-[15px]">${product.price}</Text>
    
                <TouchableOpacity>
                    <Text className="text-[24px] text-gray-500">+</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const List = ({products}: any) => {

    
    return (
        <FlashList 
        className="pl-12"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products} 
            renderItem={({item}) => (
                <ProductCard product={item} />
            )}
        />
            
    )
}

export default List;