import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');


    return (
        <View style={{ flex: 1, backgroundColor: '#eff9fb', padding: 20 }}>
            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <Image source={require('./bg.jpg')} style={{ alignSelf: 'center', marginVertical: 20 }} />
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 26 }}>Manage your projects in</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#0197f6', fontSize: 26, marginTop: -10 }}>agile way</Text>

            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)} style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 65, height: 65, backgroundColor: '#0197f6', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}
                onPress={()=> navigation.navigate('Project')}>
                    <FontAwesome name="plus" size={30} color="#FFF" />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#03182b', fontSize: 16, marginLeft: 10 }}>{`Create your\nfirst project!`}</Text>

            </Animated.View>


        </View>
    );
}

export { HomeScreen };
