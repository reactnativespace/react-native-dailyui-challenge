import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');


    return (
        <View style={{ flex: 1, backgroundColor: '#34424d', padding: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 24 }}>Terms of service</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#758a9b', fontSize: 12 }}>Last updated on August 2022</Text>
                </View>
                <SimpleLineIcons name="microphone" size={24} color="#758a9b" />
            </View>

            <View style={{ backgroundColor: '#FFF', width: width, height: 1, alignSelf: 'center', marginVertical: 20 }} />

            <ScrollView>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#758a9b', fontSize: 14, textAlign: 'justify', lineHeight: 25 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#758a9b', fontSize: 14, textAlign: 'justify', lineHeight: 25 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity style={{
                        width: 150, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#9cb5c9', borderRadius: 10,
                        shadowColor: "#2da2ff",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>Decline</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 150, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#2da2ff', borderRadius: 10,
                        shadowColor: "#2da2ff",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export { HomeScreen };
