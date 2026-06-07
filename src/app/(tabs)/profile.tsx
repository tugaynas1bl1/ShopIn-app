import { useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import {
    Ionicons,
    MaterialCommunityIcons,
    Feather
} from '@expo/vector-icons'

import { getCurrentUser } from '@/api/users'
import { useAuth } from '@/hooks/useAuth'
import { KEYS, storage } from '@/store/store'
import { useRouter } from 'expo-router'

const User = () => {
    const [user, setUser] = useState(null)
    const { accessToken, setAccessToken } = useAuth()
    const router = useRouter()


    useEffect(() => {
        ; (async () => {
            const data = await getCurrentUser()
            setUser(data)
        })()
    }, [])

    if (!user) return null


    return (
        <ScrollView
            contentContainerClassName="flex-grow bg-white"
        >
            <View
                className="h-[260px] bg-gradient-to-r from-blue-950 via-purple-800 to-purple-400 items-center justify-center relative rounded-b-full"
            >
                <TouchableOpacity className="absolute left-5 top-12">
                    <Ionicons
                        name="arrow-back"
                        size={32}
                        color="white"
                    />
                </TouchableOpacity>

                <Text className="text-white text-3xl font-medium">
                    {user.firstName} {user.lastName}
                </Text>

                <View
                    className="absolute -bottom-10 w-[110px] h-[110px] border-gray-400 border rounded-full bg-white items-center justify-center"
                    
                >
                    <Image
                        source={{ uri: user.image }}
                        className="w-[95px] h-[95px] rounded-full"
                    />
                </View>
            </View>

            <View className="mt-20">

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.firstName} {user.lastName}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="at-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.username}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <MaterialCommunityIcons
                            name="calendar-month-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.birthDate}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Feather
                            name="smartphone"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.phone}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="mail-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.email}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="male-female-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500 capitalize">
                        {user.gender}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <MaterialCommunityIcons
                            name="cake-variant-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.age} years old
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <MaterialCommunityIcons
                            name="water-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.bloodGroup}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="school-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.university}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="business-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        {user.company?.name}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="location-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text
                        numberOfLines={1}
                        className="flex-1 text-[18px] text-zinc-500"
                    >
                        {user.address?.city}, {user.address?.country}
                    </Text>
                </View>

                <View className="h-[75px] gap-10 border-b border-zinc-200 flex-row items-center px-5">
                    <View className="w-10">
                        <Ionicons
                            name="eye-outline"
                            size={24}
                            color="#7B5CFF"
                        />
                    </View>

                    <Text className="flex-1 text-[18px] text-zinc-500">
                        ••••••••••
                    </Text>

                    <Ionicons
                        name="refresh-outline"
                        size={24}
                        color="#aaa"
                    />
                </View>

            </View>

            <TouchableOpacity
                onPress={() => {
                    setUser(null)
                    storage.remove(KEYS.ACCESS_TOKEN)
                    storage.remove(KEYS.REFRESH_TOKEN)
                    router.replace('/(auth)')
                }}
                className="mx-10 my-10 h-[60px] rounded-[25px] bg-gradient-to-r from-blue-800 via-purple-800 to-purple-400 items-center justify-center"
            >
                <Text className="text-white text-xl font-semibold">
                    Log out
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default User