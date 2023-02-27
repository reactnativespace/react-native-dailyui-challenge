import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>

            {isLoading &&
                <View style={{ flex: 1 }}>
                    <LottieView
                        autoPlay={true}
                        style={{
                            width: width,
                            backgroundColor: '#FFF',
                            alignSelf: 'center'
                        }}
                        source={require('./99274-loading.json')}
                    />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF', alignSelf: 'center', position: 'absolute', top: 225 }}>Loading</Text>
                </View>

            }

            {!isLoading &&
                <>
                    <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                        <Image source={require('./save.png')} style={{ width: 175, height: 175, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#323646', alignSelf: 'center', marginTop: 20 }}>Welcome to Todify!</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#323646', alignSelf: 'center' }}>Make your day great!</Text>
                    </Animated.View>


                    <Animated.View entering={FadeInDown.delay(600).duration(300)} style={{ flex: 1 }}>

                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#323646', marginTop: 20 }}>Email</Text>
                        <View style={{ backgroundColor: '#f6f6f6', height: 50, borderRadius: 10, paddingHorizontal: 10 }}>
                            <TextInput value='hi@reactnativespace.com' style={{ fontFamily: 'Poppins-Medium', color: '#323646', padding: 10 }} />
                        </View>

                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#323646', marginTop: 20 }}>Password</Text>
                        <View style={{ backgroundColor: '#f6f6f6', height: 50, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                            <TextInput value='1234567890' secureTextEntry={true} style={{ fontFamily: 'Poppins-Medium', color: '#323646', padding: 10 }} />
                            <Feather name="eye" size={24} color="#323646" />
                        </View>


                        <TouchableOpacity style={{ backgroundColor: '#50e3c2', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 50, marginTop: 20 }} onPress={() => setIsLoading(true)}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#50e3c2', padding: 10, textAlign: 'center' }}>Forgot password?</Text>

                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#323646', }}>Don't have an account? </Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#50e3c2', }}>Register!</Text>
                        </TouchableOpacity>

                    </Animated.View>


                </>}
        </View>
    );
}

export { HomeScreen };
