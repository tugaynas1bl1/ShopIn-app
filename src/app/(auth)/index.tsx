import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { useMMKVString } from 'react-native-mmkv'
import { login

 } from '@/api/auth'


const Login = () => {

    const router = useRouter()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleLogin = async () => {
        const newErrors = {
            username: '',
            password: ''
        }

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required'
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required'
        }

        setErrors(newErrors)

        if (Object.values(newErrors).some(error => error)) {
            return
        }

        try {
            await login(formData)
            router.replace('/(tabs)/profile')
        } catch (error) {
            console.error(error)
            alert('Username və ya password yanlışdır')
        }
    }

    return (
        <KeyboardAwareScrollView
            contentContainerClassName="flex-1 bg-[#fafafa] justify-center px-5 py-8"
            bottomOffset={16}
            keyboardShouldPersistTaps="handled"
        >
            <View className="bg-white rounded-4xl p-6 gap-6 border border-zinc-100 shadow-sm">

                <View className="items-center gap-2 mb-2">
                    <View className="size-20 rounded-full bg-[#8b4fff] items-center justify-center">
                        <Text className="text-white text-3xl font-bold">
                            👋
                        </Text>
                    </View>

                    <Text className="text-3xl font-bold text-zinc-900">
                        Welcome Back
                    </Text>

                    <Text className="text-zinc-500 text-center">
                        Sign in to continue
                    </Text>
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Username
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.username}
                            onChangeText={(text) =>
                                setFormData(prev => ({
                                    ...prev,
                                    username: text
                                }))
                            }
                            placeholder="Enter username"
                            placeholderTextColor="#a1a1aa"
                            autoCapitalize="none"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.username ? (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.username}
                        </Text>
                    ) : null}
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Password
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.password}
                            onChangeText={(text) =>
                                setFormData(prev => ({
                                    ...prev,
                                    password: text
                                }))
                            }
                            placeholder="••••••••"
                            placeholderTextColor="#a1a1aa"
                            secureTextEntry
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.password ? (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.password}
                        </Text>
                    ) : null}
                </View>

                <TouchableOpacity className="self-end">
                    <Text className="text-[#8b4fff] font-semibold">
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-[#8b4fff] rounded-2xl py-5"
                >
                    <Text className="text-center text-white font-bold text-lg">
                        Sign In
                    </Text>
                </TouchableOpacity>

                <View className="flex-row justify-center">
                    <Text className="text-zinc-500">
                        Don't have an account?
                    </Text>

                    <TouchableOpacity onPress={() => router.push('/register')}>
                        <Text className="text-[#8b4fff] font-bold ml-1">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAwareScrollView>
    )
}

export default Login