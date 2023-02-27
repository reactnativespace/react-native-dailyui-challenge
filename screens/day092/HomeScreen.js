import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#fffdff' }}>

            <View style={{ flexDirection: 'row', padding: 20 }} entering={FadeInDown.delay(300).duration(300)}>
                <Feather name="menu" size={24} color="#30374a" style={{ flex: 0.5 }} />
                <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 20 }}>FAQs</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#30374a', fontSize: 16 }}>How can we help you?</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>

                <View style={{ flexDirection: 'row', backgroundColor: '#fbf8f0', padding: 10, borderRadius: 20 }}>
                    <Feather name="search" size={24} color="#d5d3d4" />
                    <TextInput placeholder='Describe your issue' placeholderTextColor={'#d5d3d4'} style={{ marginLeft: 10, fontFamily: 'Poppins-Regular', flex: 1 }} />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
                        <Feather name="mail" size={40} color="#30374a" />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#30374a', fontSize: 14, marginTop: 5 }}>EMAIL US</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', flex: 1, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#30374a' }}>
                        <Feather name="phone-call" size={40} color="#30374a" />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#30374a', fontSize: 14, marginTop: 5 }}>CALL US</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
                        <Feather name="message-square" size={40} color="#30374a" />
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#30374a', fontSize: 14, marginTop: 5 }}>CHAT US</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>How can I cancel my account?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>How do I access my account?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>How do I change my shipping address?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>How do I change my phone number?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>What shipping carrier do you use?</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => setIsVisible(current => !current)} style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: isVisible ? '#fffdff' : '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>When will I receive my products?</Text>
                    </View>
                    {isVisible &&
                        <Animated.View entering={FadeInUp.delay(300).duration(300)} layout={Layout}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#30374a', fontSize: 12, paddingLeft: 20, borderLeftWidth: 2, borderColor: '#58a98b' }}>We aim to ensure that you receive your order as quickly as possible.
                                Once your order is successfully submitted, the warehouse then processes your order the following business day. It is then picked, packed, and dispatched. Once it is on its way to you, you will receive an email notification containing your tracking information, along with an estimated delivery date from our partner courier, UPS.</Text>
                        </Animated.View>
                    }
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>Can you sen me an invoice?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#58a98b' }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#30374a', fontSize: 14, marginLeft: 10 }}>How can I cancel my current shopping?</Text>
                    </View>
                </TouchableOpacity>





            </View>

        </View>
    );
}

export { HomeScreen };
