import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#f5f4f9' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#FFF' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="chevron-left" size={20} color="#b8b8b8" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginTop: 3, marginLeft: 5 }}>Water & Beverages</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="sliders" size={20} color="black" />
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name="shopping-cart" size={20} color="black" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                    <View style={{ width: 10, height: 10, backgroundColor: '#ff5c5d', borderRadius: 5, position: 'absolute', right: -4, top: 1 }} />
                </View>
            </View>

            <ScrollView style={{ paddingVertical: 12 }} showsVerticalScrollIndicator={false}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Animated.View entering={FadeInDown.delay(200).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10 }}>
                            <Image source={require('./water.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$0.75`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Evian Water 0.75ml`}</Text>
                        </View>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: 30 }}>
                            <Image source={require('./water2.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$1.25`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Dasani Lemon`}</Text>
                        </View>
                    </Animated.View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Animated.View entering={FadeInDown.delay(600).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: -20 }}>
                            <Image source={require('./coke.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$0.80`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Coca-Cola Regular`}</Text>
                        </View>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(800).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: 10 }}>
                            <Image source={require('./coke2.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$0.80`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Coca-Cola Zero`}</Text>
                        </View>
                    </Animated.View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Animated.View entering={FadeInDown.delay(1000).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: -20 }}>
                            <Image source={require('./pepsi.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$0.55`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Pepsi Coke`}</Text>
                        </View>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(1200).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: 10 }}>
                            <Image source={require('./pepsi2.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$0.55`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Pepsi Coke`}</Text>
                        </View>
                    </Animated.View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                    <Animated.View entering={FadeInDown.delay(1400).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: -20 }}>
                            <Image source={require('./perrier.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$2.5`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Perrier Lime`}</Text>
                        </View>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(1600).duration(200)}>
                        <View style={{ padding: 10, backgroundColor: '#fdfdfd', width: 170, height: 200, borderRadius: 10, marginTop: 10 }}>
                            <Image source={require('./beypazari.png')} style={{ width: 50, height: 120, resizeMode: 'cover', alignSelf: 'center' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2d2d2d', marginTop: 10 }}>{`$0.50`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Beypazari Mineral`}</Text>
                        </View>
                    </Animated.View>

                </View>



            </ScrollView>

        </View >

    );
}

export { HomeScreen };
