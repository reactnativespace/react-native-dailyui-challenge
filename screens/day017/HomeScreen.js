import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', paddingVertical: 20, paddingHorizontal: 12 }}>

            <FadeIn delay={300}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="flight-takeoff" size={40} color="#4fb69a" />
                    <Text style={{ fontSize: 24, fontFamily: 'Poppins-Bold', color: '#4fb69a', marginLeft: 12, marginTop: 5 }}>FlightDream</Text>
                </View>
            </FadeIn>

            <View style={{ marginTop: 40 }}>

                <FadeIn delay={600}>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000' }}>Your reservation</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>Booking Number: </Text>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Bold', color: '#4fb69a' }}>THY0071861235</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#d6d6d6', paddingBottom: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#4fb69a', marginTop: 20 }}>From Paris To Istanbul</Text>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000' }}>12/05/2023 to 12/15/2020</Text>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Bold', color: '#000' }}>MK85684</Text>

                    </View>
                </FadeIn>

                <FadeIn delay={900}>
                    <View style={{ borderBottomWidth: 1, borderColor: '#d6d6d6', paddingBottom: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000', marginTop: 20 }}>Payment Detail</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>Base fare</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>320,50</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000' }}>$</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>Taxes</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>20</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000' }}>$</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>Baggage options</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>35</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000' }}>$</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#4fb69a' }}>Total</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#4fb69a' }}>375,50</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#4fb69a' }}>$</Text>
                            </View>
                        </View>
                    </View>
                </FadeIn>

                <FadeIn delay={1200}>
                    <View style={{ paddingBottom: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000', marginTop: 20 }}>Payment</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>VISA **** 8712</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000' }}>375,50</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000' }}>$</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#000' }}>11/15/22 12:00 PM CET</Text>
                        </View>

                    </View>
                </FadeIn>
                <FadeIn delay={1500}>
                    <TouchableOpacity style={{ backgroundColor: '#4fb69a', paddingVertical: 6, borderRadius: 12, justifyContent: 'center', alignItems: 'center', width: 250, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Print Receipt</Text>
                    </TouchableOpacity>
                </FadeIn>
            </View>

        </View>

    );
}

export { HomeScreen };