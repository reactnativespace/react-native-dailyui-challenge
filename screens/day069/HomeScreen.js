import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <MaterialIcons name="menu" size={24} color="#151516" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#151516', marginBottom: -3 }}>Products</Text>
                </View>
                <View style={{ position: 'absolute', right: 3, top: 12, width: 22, height: 22, borderRadius: 11, backgroundColor: '#fe7686', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#FFF' }}>3</Text>
                </View>
                <MaterialIcons name="shopping-cart" size={24} color="#313132" />
            </View>
            <ScrollView style={{ padding: 10 }} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, width: width, alignSelf: 'center', paddingBottom: 20, borderColor: '#9c9ca0', marginBottom: 30 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#151516' }}>Trending</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#9c9ca0' }}>Following</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#9c9ca0' }}>Recent</Text>
                    <View style={{ position: 'absolute', width: 30, height: 3, backgroundColor: '#fe7686', left: 30, bottom: -1.7, borderRadius: 20 }} />
                </View>

                <View>
                    <Image source={require('./p1.jpg')} style={{ width: 360, height: 200, alignSelf: 'center', borderRadius: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginLeft: 10, color: '#151516' }}>Apple Macbook M2 Pro</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginLeft: 10, color: '#151516', marginRight: 5 }}>$1800.00</Text>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Image source={require('./p2.jpg')} style={{ width: 360, height: 200, alignSelf: 'center', borderRadius: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginLeft: 10, color: '#151516' }}>Sennheiser HD 350BT</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginLeft: 10, color: '#151516', marginRight: 5 }}>$200.00</Text>
                    </View>
                </View>

                <View style={{ marginVertical: 20 }}>
                    <Image source={require('./p3.jpg')} style={{ width: 360, height: 200, alignSelf: 'center', borderRadius: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginLeft: 10, color: '#151516' }}>Canon Eos 2000D</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginLeft: 10, color: '#151516', marginRight: 5 }}>$250.00</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                <MaterialIcons name="home" size={30} color="#fe7686" />
                <MaterialIcons name="local-fire-department" size={30} color="#c2c2c2" />
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <MaterialIcons name="account-circle" size={30} color="#c2c2c2" />

                </TouchableOpacity>
            </View>

        </View >

    );
}

export { HomeScreen };
