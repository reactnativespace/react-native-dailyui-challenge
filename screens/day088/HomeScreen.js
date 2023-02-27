import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#0d0c22' }}>Add Transaction</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#f24c4b' }}>Cancel</Text>
            </View>


            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(300).duration(300)}>
                <TouchableOpacity style={{ width: 160, height: 160, borderRadius: 20, backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="money-bill-alt" size={24} color="#f24c4b" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#0d0c22', marginTop: 10 }}>Request</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 160, height: 160, borderRadius: 20, backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => setIsVisible(true)}>
                    <FontAwesome5 name="paper-plane" size={24} color="#f24c4b" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#0d0c22', marginTop: 10 }}>Send</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(600).duration(300)}>
                <TouchableOpacity style={{ width: 160, height: 160, borderRadius: 20, backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="long-arrow-alt-down" size={15} color="#27ae60" />
                    <FontAwesome5 name="wallet" size={24} color="#f24c4b" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#0d0c22', marginTop: 10 }}>Add Income</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 160, height: 160, borderRadius: 20, backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="long-arrow-alt-up" size={15} color="#c0392b" />
                    <FontAwesome5 name="wallet" size={24} color="#f24c4b" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#0d0c22', marginTop: 10 }}>Add Expenses</Text>
                </TouchableOpacity>
            </Animated.View>




            <Modal
                style={{ flex: 1 }}
                visible={isVisible}
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
                animationType={'slide'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(242, 76, 75, 0.7)'
                }}>
                    <View style={{
                        height: 450,
                        backgroundColor: '#FFF',
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#0d0c22' }}>Select Contact</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#f24c4b' }}>Cancel</Text>
                        </View>

                        <View style={{ backgroundColor: '#f7f7f7', padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <FontAwesome5 name="search" size={20} color="#c7c7c7" />
                            <TextInput placeholder='Enter name here' placeholderTextColor={'#c7c7c7'} style={{ width: '100%', fontFamily: 'Poppins-Medium', marginLeft: 10 }} />
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#f24c4b', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome5 name="plus" size={24} color="#FFF" />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0d0c22', marginTop: 10 }}>Add Contact</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#f24c4b', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./1.jpg')} style={{ width: 90, height: 90, borderRadius: 45, }} />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0d0c22', marginTop: 10 }}>Molly Mallin</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#f24c4b', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./2.jpg')} style={{ width: 90, height: 90, borderRadius: 45, }} />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0d0c22', marginTop: 10 }}>Derick Weber</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#f24c4b', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./3.jpg')} style={{ width: 90, height: 90, borderRadius: 45, }} />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0d0c22', marginTop: 10 }}>Chad Fennix</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#f24c4b', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./4.jpg')} style={{ width: 90, height: 90, borderRadius: 45, }} />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0d0c22', marginTop: 10 }}>Joanna Cress</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#f24c4b', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('./5.jpg')} style={{ width: 90, height: 90, borderRadius: 45, }} />
                                </View>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#0d0c22', marginTop: 10 }}>Sybil Burton</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </Modal>

        </View>
    );
}

export { HomeScreen };
