import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import StyledText from "./StyledText";

const ProductCard = ({product}: any) => {
    const router = useRouter()
    return (
        <TouchableOpacity 
        onPress={() => router.push({
            pathname: "/productDetails/[id]",
            params: { id: product.id }
        })}  
        className="w-45 mr-6 px-4">
            <TouchableOpacity className="self-end">
                <Ionicons color={'gray'} size={25} name='heart-outline'/>
            </TouchableOpacity>
            <Image 
                source={{ uri: product.thumbnail }}
                style={{ width: 150, height: 150}}>
            </Image>
            <StyledText numberOfLines={1}>{product?.title}</StyledText>
            <StyledText className="text-[12px] text-gray-500 pl-3 py-3">Category: {product.category}</StyledText>
            <View className="flex-row justify-between items-center">
                <StyledText className="font-semibold text-[15px]">${product.price}</StyledText>
    
                <TouchableOpacity>
                    <StyledText className="text-[24px] text-gray-500">+</StyledText>
                </TouchableOpacity>
            </View>
            
        </TouchableOpacity>
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