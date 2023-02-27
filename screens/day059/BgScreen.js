import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const BgScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1 }}>

            <Image source={require('./pattern1.jpg')} style={{ width: width, height: height, resizeMode: 'cover' }} />

            <TouchableOpacity style={{ backgroundColor: 'rgba(255,255,255,0.8)', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 50, left: width / 2 - 30 }}>
                <Feather name="download" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'rgba(255,255,255,0.8)', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 20, left: 20 }}>
                <Feather name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
        </View >

    );
}

export { BgScreen };
