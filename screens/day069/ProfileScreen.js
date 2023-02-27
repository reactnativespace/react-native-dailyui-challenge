import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const ProfileScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <MaterialIcons name="menu" size={24} color="#151516" />
                </View>
                <View style={{ position: 'absolute', right: 3, top: 12, width: 22, height: 22, borderRadius: 11, backgroundColor: '#fe7686', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#FFF' }}>3</Text>
                </View>
                <MaterialIcons name="shopping-cart" size={24} color="#313132" />
            </View>

            <View style={{ padding: 20 }}>

                <Image source={require('./avatar.jpg')} style={{ height: 80, width: 80, backgroundColor: 'red', borderRadius: 40, marginBottom: 20 }} />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#151516' }}>Valeria Erdene</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#9c9ca0' }}>@valeria06</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, width: width, alignSelf: 'center', paddingBottom: 20, borderColor: '#9c9ca0', marginBottom: 30 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#151516' }}>Wishlist 28</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#9c9ca0' }}>Likes 300</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, marginLeft: 10, color: '#9c9ca0' }}>Collection 8</Text>
                <View style={{ position: 'absolute', width: 30, height: 3, backgroundColor: '#fe7686', left: 20, bottom: -1.7, borderRadius: 20 }} />
            </View>

            <ScrollView style={{ padding: 10 }} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image source={require('./1.jpg')} style={{ width: 240, height: 250, borderRadius: 10, resizeMode: 'cover' }} />
                    <Image source={require('./2.jpg')} style={{ width: 120, height: 120, borderRadius: 10, resizeMode: 'cover' }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Image source={require('./3.jpg')} style={{ width: 240, height: 120, borderRadius: 10, resizeMode: 'cover' }} />
                    <Image source={require('./4.jpg')} style={{ width: 120, height: 120, borderRadius: 10, resizeMode: 'cover', marginTop: -130 }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 30 }}>
                    <Image source={require('./7.jpg')} style={{ width: 370, height: 250, borderRadius: 10, resizeMode: 'cover' }} />
                    <Image source={require('./6.jpg')} style={{ width: 120, height: 120, borderRadius: 10, resizeMode: 'cover', marginTop: -130, marginLeft: -120 }} />
                </View>



            </ScrollView>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                <MaterialIcons name="home" size={30} color="#c2c2c2" />
                <MaterialIcons name="local-fire-department" size={30} color="#c2c2c2" />
                <MaterialIcons name="account-circle" size={30} color="#fe7686" />
            </View>

        </View >


    );
}

export { ProfileScreen };
