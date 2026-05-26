import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { View, Text } from "react-native";

const ProductCard = ({product}: any) => {
    return (
        <view>
            <Image source={{uri: product.image}}></Image>
            <Text>{product?.title}</Text>
        </view>
    )
}

const List = ({products}: any) => {

    
    return (
        <FlashList data={products} renderItem={({item}) => <ProductCard></ProductCard>}></FlashList>
    )
}

export default List;