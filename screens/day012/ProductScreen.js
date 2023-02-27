import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, TextInput } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import FadeIn from '../../components/FadeIn';

const ProductScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                <FontAwesome5 name="angle-left" size={24} color="black" />
                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', marginLeft: 8 }}>Product Details</Text>
                <FontAwesome5 name="ellipsis-v" size={24} color="#000" />
            </View>

            <View style={{ padding: 12 }}>

                <FadeIn delay={300}>
                    <Image source={require('./imgs/cloth4.jpg')} style={{ width: '100%', height: 300, borderRadius: 10, }} />
                </FadeIn>

                <FadeIn delay={600}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#FFF', backgroundColor: '#3cc7a6', paddingHorizontal: 8, borderRadius: 5, }}>Free shipping</Text>
                        <FontAwesome5 name="heart" size={24} color="#62686d" />

                    </View>

                    <View style={{ marginTop: 12 }}>

                        <Text style={{ fontSize: 24, fontFamily: 'Poppins-Bold', color: '#000', }}>Polarized Sunglasses</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#62686d', }}>Madison Avenue Retro Polarized Sunglasses with Magic Foldable Case for Women UV Protection,Classic Designer Style Glasses</Text>
                        <Text style={{ fontSize: 24, fontFamily: 'Poppins-Bold', color: '#000', marginTop: 12 }}>$ 99</Text>
                    </View>


                    <View>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#62686d', }}> Have a coupon code? Enter here</Text>

                        <View style={{ padding: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: '#f8faf9', borderWidth: 2, borderRadius: 10 }}>
                            <TextInput value='RNS-0012' style={{ fontSize: 12, fontFamily: 'Poppins-Bold', flex: 1 }} />
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Bold', color: '#3cc7a6', }}>Available</Text>

                        </View>

                    </View>
                </FadeIn>
            </View>


            <FadeIn delay={900}>
                <TouchableOpacity style={{ marginTop: 20, alignSelf: 'center', backgroundColor: '#3cc7a6', paddingHorizontal: 8, borderRadius: 5, paddingVertical: 8, width: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: '#FFF', }}>Add To Card</Text>
                </TouchableOpacity>
            </FadeIn>
        </View>

    );
}

export { ProductScreen };