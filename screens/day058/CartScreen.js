import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const CartScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#f5f4f9' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#FFF' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={20} color="#b8b8b8" />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginTop: 3, marginLeft: 5 }}>My Cart</Text>
                </View>
            </View>

            <View style={{ padding: 12, flex: 1 }}>

                <Animated.View entering={FadeInDown.delay(400).duration(400)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ padding: 10, backgroundColor: '#FFF', width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('./pepsi.png')} style={{ width: 30, height: 80, resizeMode: 'cover', }} />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Pepsi Coke`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#66eea6' }}>{`$0.55`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', justifyContent: 'space-between', borderRadius: 10, }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#2d2d2d', paddingLeft: 10 }}>{`+`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 22, color: '#2d2d2d', paddingHorizontal: 20, paddingVertical: 5 }}>{`5`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#2d2d2d', paddingRight: 10 }}>{`-`}</Text>
                        </View>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(800).duration(400)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ padding: 10, backgroundColor: '#FFF', width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('./perrier.png')} style={{ width: 30, height: 80, resizeMode: 'cover', }} />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#2d2d2d' }}>{`Perrier Lime`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#66eea6' }}>{`$2.5`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', justifyContent: 'space-between', borderRadius: 10, }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#2d2d2d', paddingLeft: 10 }}>{`+`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 22, color: '#2d2d2d', paddingHorizontal: 20, paddingVertical: 5 }}>{`2`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#2d2d2d', paddingRight: 10 }}>{`-`}</Text>
                        </View>
                    </View>

                </Animated.View>

                <View style={{ flex: 1 }} />

                <Animated.View entering={FadeInDown.delay(1200).duration(400)}>
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12, borderTopWidth: 2, borderColor: '#b8b8b8' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#b8b8b8', }}>{`Total`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#2d2d2d', }}>{`$5.25`}</Text>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: '#ff5c5d', justifyContent: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 10, marginTop: 12 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', }}>{`Next`}</Text>

                        </TouchableOpacity>

                    </>
                </Animated.View>


            </View>

        </View >

    );
}

export { CartScreen };
