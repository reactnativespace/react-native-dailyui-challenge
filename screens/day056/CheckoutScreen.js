import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const CheckoutScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#29444b' }}>
            <View style={{ backgroundColor: '#425b67', flexDirection: 'row', justifyContent: 'space-between', padding: 18 }}>
                <Ionicons name="menu" size={28} color="#FFF" />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="search" size={28} color="#FFF" />
                    <Ionicons name="cart-outline" size={28} color="#FFF" style={{ marginLeft: 10 }} />
                </View>
            </View>

            <View style={{ padding: 18 }}>

                <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                    <View style={{ backgroundColor: '#425b67', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('./lemon.png')} style={{ width: 30, height: 30 }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`Lemon`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF' }}>{`$2,5`}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#FFF' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginTop: -2 }}>{`-`}</Text>
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', marginHorizontal: 10 }}>{`3`}</Text>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#FFF' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginTop: -2 }}>{`+`}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                    <View style={{ backgroundColor: '#425b67', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('./strawberry.png')} style={{ width: 30, height: 30 }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`Strawberry`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF' }}>{`$4`}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#FFF' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginTop: -2 }}>{`-`}</Text>
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', marginHorizontal: 10 }}>{`10`}</Text>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#FFF' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginTop: -2 }}>{`+`}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(900).duration(300)}>
                    <View style={{ backgroundColor: '#425b67', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('./orange.png')} style={{ width: 30, height: 30 }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`Orange`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF' }}>{`$8`}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#FFF' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginTop: -2 }}>{`-`}</Text>
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', marginHorizontal: 10 }}>{`4`}</Text>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#FFF' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginTop: -2 }}>{`+`}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1200).duration(300)}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', marginTop: 15 }}>{`Deliver To`}</Text>

                    <View style={{ backgroundColor: '#425b67', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`Golden Street 26\n1234 California, Lexington`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#529dfc' }}>{`Change Address`}</Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1500).duration(300)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', marginTop: 15 }}>{`Payment`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#FFF', marginTop: 15 }}>{`$14.5`}</Text>

                    </View>

                    <TouchableOpacity style={{ backgroundColor: '#529dfc', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15, color: '#FFF' }}>{`Confirm Purchase`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF' }}>{`Visa Card\n1234 **** **** **98`}</Text>

                        </View>
                        <Ionicons name="card-outline" size={24} color="#FFF" />
                    </TouchableOpacity>
                </Animated.View>

            </View>

            <View style={{ backgroundColor: '#425b67', position: 'absolute', bottom: 0, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 18, borderTopWidth: 0.2, borderColor: '#FFF' }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#748893', }}>{`Home`}</Text>
                <Ionicons name="chevron-forward" size={24} color="#748893" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#748893', }}>{`Store`}</Text>
                <Ionicons name="chevron-forward" size={24} color="#748893" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#748893', }}>{`Cart`}</Text>
                <Ionicons name="chevron-forward" size={24} color="#748893" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>{`Checkout`}</Text>
            </View>

        </View >

    );
}

export { CheckoutScreen };
