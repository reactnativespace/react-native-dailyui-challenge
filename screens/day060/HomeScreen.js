import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ColorPicker from 'react-native-wheel-color-picker'


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const [color, setColor] = React.useState('#000')

    const onColorChange = (color) => {
        setColor(color)
    }

    return (

        <View style={{ flex: 1, backgroundColor: color }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, backgroundColor: '#FFF' }} >
                <Ionicons name="chevron-back" size={30} color="black" />
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#131313' }}>{`Color Picker`}</Text>
                <Ionicons name="color-fill" size={30} color="black" />
            </View>

            <View style={{ flex: 1, padding: 20 }}>
                <ColorPicker
                    onColorChange={onColorChange}
                    color={'#FFF'}
                    thumbSize={40}
                    sliderSize={40}
                    noSnap={true}
                    row={false}
                />

            </View>


        </View >

    );
}

export { HomeScreen };
