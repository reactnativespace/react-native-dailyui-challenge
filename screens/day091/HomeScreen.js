import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="arrowleft" size={24} color="#ababab" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1d1d1d', fontSize: 18, marginLeft: 20, marginTop: -2 }}>Shoes</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="search1" size={24} color="#ababab" />
                        <AntDesign name="shoppingcart" size={24} color="#ababab" style={{ marginLeft: 20 }} />
                    </View>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <View style={{ width: width, height: 200 }}>
                    <Image source={require('./shoe.jpg')} style={{ width: width, height: 200 }} />
                    <View style={{ width: width, height: 200, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#FFF', fontSize: 30, }}>Curated for You</Text>
                    </View>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).duration(300)}>
                <ScrollView horizontal style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#ababab', fontSize: 14, }}>New In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#ababab', fontSize: 14, }}>Sneakers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#ababab', fontSize: 14, }}>Official Shoes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#ababab', fontSize: 14, }}>Running</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#ababab', fontSize: 14, }}>Sandals</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1200).duration(300)}>
                <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./1.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M20324</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>49.99 USD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./2.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M10224</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>39.90 USD</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./3.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M20427</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>59.90 USD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./4.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M10225</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>39.99 USD</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./5.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M50379</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>37.99 USD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./6.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M10031</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>59.99 USD</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 90 }}>
                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./7.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M86323</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>49.99 USD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 170 }}>
                            <View>
                                <Image source={require('./8.jpg')} style={{ width: 170, height: 170, resizeMode: 'cover' }} />
                                <AntDesign name="hearto" size={20} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 16 }}>M71334</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#595959', fontSize: 14, marginTop: -5 }}>39.99 USD</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </Animated.View>

        </View>
    );
}

export { HomeScreen };
