import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
 
const Register = () => {
    const router = useRouter()

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        country: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        country: ''
    })
 
    const validate = () => {
        if (!formData.name) {
            setErrors(prevState => ({ ...prevState, name: 'Name is required' }))
        }
 
        if (!formData.lastname) {
            setErrors(prevState => ({ ...prevState, lastname: 'Lastname is required' }))
        }
 
        if (!formData.phone) {
            setErrors(prevState => ({ ...prevState, phone: 'Number is required' }))
        }
 
        if (step === 2) {
            if (!formData.email) {
                setErrors(prevState => ({ ...prevState, email: 'Email is required' }))
            }
 
            if (!formData.email.includes('@')) {
                setErrors(prevState => ({ ...prevState, email: 'Invalid email' }))
            }
 
            if (formData.password.length < 8) {
                setErrors(prevState => ({ ...prevState, password: 'Password must be at least 8 characters long' }))
            }
        }
 
        if (step === 3) {
            if (!formData.address) {
                setErrors(prevState => ({ ...prevState, address: 'Address is required' }))
            }
 
            if (!formData.city) {
                setErrors(prevState => ({ ...prevState, city: 'City is required' }))
            }
 
            if (!formData.country) {
                setErrors(prevState => ({ ...prevState, country: 'Country is required' }))
            }
        }
 
        return Object.values(errors).every(error => error === '')
    }
 
    const handleChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }
 
    const handleSubmit = () => {
        setErrors({
            name: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            city: '',
            country: ''
        })
 
        if (!validate()) {
            return
        }
 
        if (step === 1 && formData.name && formData.lastname && formData.phone) {
            setStep(2)
        } else if (step === 2 && formData.email && formData.password) {
            setStep(3)
        } else {
            console.log(formData)
        }
    }
 
    return (
        <KeyboardAwareScrollView
    contentContainerClassName="flex-1 bg-[#fafafa] justify-center px-5 py-8"
    bottomOffset={16}
    keyboardShouldPersistTaps="handled"
>
    <View className="bg-white rounded-[32px] p-6 gap-6 border border-zinc-100 shadow-sm">

        {/* STEP INDICATOR */}
        <View className='flex-row items-center justify-between'>
            <TouchableOpacity
                onPress={() => setStep(1)}
                className={`size-14 rounded-full items-center justify-center ${
                    step === 1
                        ? 'bg-[#8b4fff]'
                        : 'bg-zinc-100'
                }`}
            >
                <Text
                    className={`font-bold text-lg ${
                        step === 1
                            ? 'text-white'
                            : 'text-zinc-500'
                    }`}
                >
                    1
                </Text>
            </TouchableOpacity>

            <View className='h-1 flex-1 mx-3 rounded-full bg-zinc-200' />

            <TouchableOpacity
                onPress={() => {
                    formData.name &&
                        formData.lastname &&
                        formData.phone &&
                        setStep(2)
                }}
                className={`size-14 rounded-full items-center justify-center ${
                    step === 2
                        ? 'bg-[#8b4fff]'
                        : 'bg-zinc-100'
                }`}
            >
                <Text
                    className={`font-bold text-lg ${
                        step === 2
                            ? 'text-white'
                            : 'text-zinc-500'
                    }`}
                >
                    2
                </Text>
            </TouchableOpacity>

            <View className='h-1 flex-1 mx-3 rounded-full bg-zinc-200' />

            <TouchableOpacity
                onPress={() => {
                    formData.email &&
                        formData.password &&
                        setStep(3)
                }}
                className={`size-14 rounded-full items-center justify-center ${
                    step === 3
                        ? 'bg-[#8b4fff]'
                        : 'bg-zinc-100'
                }`}
            >
                <Text
                    className={`font-bold text-lg ${
                        step === 3
                            ? 'text-white'
                            : 'text-zinc-500'
                    }`}
                >
                    3
                </Text>
            </TouchableOpacity>
        </View>

        {/* STEP 1 */}
        {step === 1 ? (
            <>
                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Name
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.name}
                            onChangeText={(text) =>
                                handleChange('name', text)
                            }
                            placeholder="John"
                            placeholderTextColor="#a1a1aa"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.name && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.name}
                        </Text>
                    )}
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Lastname
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.lastname}
                            onChangeText={(text) =>
                                handleChange('lastname', text)
                            }
                            placeholder="Doe"
                            placeholderTextColor="#a1a1aa"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.lastname && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.lastname}
                        </Text>
                    )}
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Phone
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.phone}
                            onChangeText={(text) =>
                                handleChange('phone', text)
                            }
                            placeholder="+994 xx xxx xx xx"
                            placeholderTextColor="#a1a1aa"
                            keyboardType="phone-pad"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.phone && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.phone}
                        </Text>
                    )}
                </View>
            </>
        ) : step === 2 ? (
            <>
                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Email
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.email}
                            onChangeText={(text) =>
                                handleChange('email', text)
                            }
                            placeholder="example@email.com"
                            placeholderTextColor="#a1a1aa"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.email && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.email}
                        </Text>
                    )}
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Password
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.password}
                            onChangeText={(text) =>
                                handleChange('password', text)
                            }
                            placeholder="••••••••"
                            placeholderTextColor="#a1a1aa"
                            secureTextEntry
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.password && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.password}
                        </Text>
                    )}
                </View>
            </>
        ) : (
            <>
                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Address
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.address}
                            onChangeText={(text) =>
                                handleChange('address', text)
                            }
                            placeholder="Your address"
                            placeholderTextColor="#a1a1aa"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.address && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.address}
                        </Text>
                    )}
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        City
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.city}
                            onChangeText={(text) =>
                                handleChange('city', text)
                            }
                            placeholder="Baku"
                            placeholderTextColor="#a1a1aa"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.city && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.city}
                        </Text>
                    )}
                </View>

                <View className="gap-2">
                    <Text className="text-zinc-700 font-semibold ml-1">
                        Country
                    </Text>

                    <View className="bg-zinc-50 rounded-2xl px-4 border border-zinc-100">
                        <TextInput
                            value={formData.country}
                            onChangeText={(text) =>
                                handleChange('country', text)
                            }
                            placeholder="Azerbaijan"
                            placeholderTextColor="#a1a1aa"
                            className="py-4 text-zinc-800"
                        />
                    </View>

                    {errors.country && (
                        <Text className="text-red-500 text-sm ml-1">
                            {errors.country}
                        </Text>
                    )}
                </View>
            </>
        )}

        

        <TouchableOpacity
            onPress={handleSubmit}
            className="bg-[#8b4fff] rounded-2xl py-5"
        >
            <Text className="text-center text-white font-bold text-lg">
                {step === 3 ? 'Create Account' : 'Continue'}
            </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center">
            <Text className="text-zinc-500">
                Already have an account?
            </Text>

            <TouchableOpacity onPress={() => router.push('/')}>
                <Text className="text-[#8b4fff] font-bold ml-1">
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>

    </View>
</KeyboardAwareScrollView>
    )
}
 
export default Register