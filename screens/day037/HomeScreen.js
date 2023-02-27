import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeInLeft, FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    return (

        <View style={{ flex: 1, backgroundColor: '#323339', padding: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <MaterialCommunityIcons name="dots-grid" size={25} color="#92939a" />
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>MAY 18, 2023</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 20, marginTop: -10 }}>Bordeaux, FR</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>Today</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>Tomorrow</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>After</Text>
            </View>

            <Animated.View style={{ justifyContent: 'center', alignItems: 'center' }} entering={FadeInDown.delay(300).duration(500)}>
                <LottieView
                    autoPlay
                    style={{
                        width: 300,
                        height: 300,
                        backgroundColor: '#323339',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('./4801-weather-partly-shower.json')}
                />
                <View style={{ marginTop: -5, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 20 }}>PARTLY RAINY</Text>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 50, marginTop: -15 }}>24°</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>Wind : 11km/h</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>Feeling : 26°</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>Humidity : 46%</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16 }}>UV : 3</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 5 }}>
                    <Animated.View style={{ backgroundColor: '#46474c', padding: 12, borderRadius: 20 }} entering={FadeInDown.delay(600).duration(300)}>
                        <LottieView
                            autoPlay
                            style={{
                                width: 70,
                                height: 70
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('./4801-weather-partly-shower.json')}
                        />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16, marginTop: 15 }}>16:00</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 20, marginTop: -5 }}>26°</Text>
                    </Animated.View>

                    <Animated.View style={{ backgroundColor: '#46474c', padding: 12, borderRadius: 20, marginLeft: 15 }} entering={FadeInDown.delay(900).duration(300)}>
                        <LottieView
                            autoPlay
                            style={{
                                width: 70,
                                height: 70
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('./4800-weather-partly-cloudy.json')}
                        />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16, marginTop: 15 }}>18:00</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 20, marginTop: -5 }}>26°</Text>
                    </Animated.View>

                    <Animated.View style={{ backgroundColor: '#46474c', padding: 12, borderRadius: 20, marginLeft: 15 }} entering={FadeInDown.delay(1200).duration(300)}>
                        <LottieView
                            autoPlay
                            style={{
                                width: 70,
                                height: 70
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('./4796-weather-cloudynight.json')}
                        />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16, marginTop: 15 }}>20:00</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 20, marginTop: -5 }}>23°</Text>
                    </Animated.View>

                    <Animated.View style={{ backgroundColor: '#46474c', padding: 12, borderRadius: 20, marginLeft: 15 }} entering={FadeInDown.delay(1500).duration(300)}>
                        <LottieView
                            autoPlay
                            style={{
                                width: 70,
                                height: 70
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('./4796-weather-cloudynight.json')}
                        />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16, marginTop: 15 }}>22:00</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 20, marginTop: -5 }}>22°</Text>
                    </Animated.View>

                    <Animated.View style={{ backgroundColor: '#46474c', padding: 12, borderRadius: 20, marginLeft: 15 }} entering={FadeInDown.delay(1800).duration(300)}>
                        <LottieView
                            autoPlay
                            style={{
                                width: 70,
                                height: 70
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('./4799-weather-night.json')}
                        />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#92939a', fontSize: 16, marginTop: 15 }}>00:00</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 20, marginTop: -5 }}>20°</Text>
                    </Animated.View>
                </ScrollView>





            </Animated.View>

        </View>

    );
}

export { HomeScreen };
