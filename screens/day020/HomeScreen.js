import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, Dimensions, LogBox } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <FadeIn delay={300}>
                <LottieView
                    autoPlay
                    style={{
                        marginTop: -100,
                        marginLeft: -25,
                        backgroundColor: '#FFF',
                    }}
                    source={require('./9644-delivery-riding.json')}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 420 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#000', alignSelf: 'center' }}>Delivery In Progress!</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center', marginVertical: 20 }}>{`Your order is on its way!\nYou can track your order in real time.`}</Text>
                    <TouchableOpacity style={{ padding: 12, backgroundColor: '#ec121d', borderRadius: 20, width: 260 }} onPress={() => navigation.navigate('Map')}>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#FFF', textAlign: 'center' }}>Track My Order</Text>
                    </TouchableOpacity>
                </View>

            </FadeIn>

        </View>

    );
}

export { HomeScreen };
