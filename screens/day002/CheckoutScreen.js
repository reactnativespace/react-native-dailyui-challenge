import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FadeIn from '../../components/FadeIn';
import { FontAwesome5 } from '@expo/vector-icons';

const CheckoutScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <FontAwesome5 name="arrow-left" size={20} color={'#3e3e3e'} />
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#3e3e3e' }}>Payment Details</Text>
                <FontAwesome5 name="info-circle" size={20} color={'#3e3e3e'} />
            </View>

            <View style={{ flex: 1, padding: 15 }}>

                <FadeIn delay={300}>
                    <View style={{ backgroundColor: '#FFF', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#3e3e3e' }}>Credit Card</Text>
                            <FontAwesome5 name="angle-up" size={24} color={'#90a6e0'} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                            <TouchableOpacity style={{ width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#95abe2' }}>
                                <FontAwesome5 name={'cc-visa'} size={24} color={'#353045'} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#ededed' }}>
                                <FontAwesome5 name={'apple-pay'} size={24} color={'#353045'} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 80, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#ededed' }}>
                                <FontAwesome5 name={'paypal'} size={24} color={'#353045'} />
                            </TouchableOpacity>
                        </View>


                        <Image source={require('./imgs/credit-card.jpg')} style={{ width: 320, height: 200, borderRadius: 10, alignSelf: 'center', marginTop: 20 }} resizeMode='stretch' />


                        <Text style={{ marginTop: 30, fontSize: 14, fontFamily: 'Poppins-Medium', color: '#90a6e0', textAlign: 'center' }}>add new card</Text>

                    </View>
                </FadeIn>

                <FadeIn delay={600}>
                    <View style={{ backgroundColor: '#FFF', borderRadius: 10, marginTop: 10, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#3e3e3e' }}>Google Pay</Text>
                        <FontAwesome5 name="angle-right" size={24} color={'#90a6e0'} />
                    </View>
                    <View style={{ backgroundColor: '#FFF', borderRadius: 10, marginTop: 10, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#3e3e3e' }}>Debit Card</Text>
                        <FontAwesome5 name="angle-right" size={24} color={'#90a6e0'} />
                    </View>
                    <View style={{ backgroundColor: '#FFF', borderRadius: 10, marginTop: 10, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#3e3e3e' }}>Mobile Banking</Text>
                        <FontAwesome5 name="angle-right" size={24} color={'#90a6e0'} />
                    </View>
                </FadeIn>

            </View>
            <FadeIn delay={900} >
                <TouchableOpacity
                    style={{ marginBottom: 30, width: 250, backgroundColor: '#313131', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 10, alignSelf: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Pay Now</Text>
                </TouchableOpacity>
            </FadeIn>

        </View>
    );
}

export { CheckoutScreen };