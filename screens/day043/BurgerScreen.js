import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const BurgerScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [index, setIndex] = React.useState(0);
    const [index2, setIndex2] = React.useState(0);

    return (

        <View style={{ flex: 1, padding: 12, backgroundColor: '#fff8f8' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="left" size={24} color="black" style={{ flex: 0.5 }} />
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, marginTop: 4, }}>{`Customize`}</Text>
            </View>
            <Image source={require('./menu.png')} style={{ width: 400, height: 250, resizeMode: 'center', alignSelf: 'center', marginTop: 20 }} />

            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18, marginTop: 20, marginBottom: 8 }}>{`Pick your bun`}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, height: 60, backgroundColor: index === 0 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} onPress={() => setIndex(0)}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16 }}>{`Original`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 60, backgroundColor: index === 1 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center' }} onPress={() => setIndex(1)}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16 }}>{`Brioche`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 60, backgroundColor: index === 2 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => setIndex(2)}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16 }}>{`Sesam`}</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18, marginTop: 30, marginBottom: 8 }}>{`Pick your juice`}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, height: 110, backgroundColor: index2 === 0 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} onPress={() => setIndex2(0)}>
                    <Image source={require('./strawberry.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16, marginTop: 5 }}>{`Strawberry`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 110, backgroundColor: index2 === 1 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center' }} onPress={() => setIndex2(1)}>
                    <Image source={require('./orange.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16, marginTop: 5 }}>{`Orange`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 110, backgroundColor: index2 === 2 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center' }} onPress={() => setIndex2(2)}>
                    <Image source={require('./kiwi.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16, marginTop: 5 }}>{`Kiwi`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 110, backgroundColor: index2 === 3 ? '#fedede' : '#ffe8e9', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10 }} onPress={() => setIndex2(3)}>
                    <Image source={require('./apple.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16, marginTop: 5 }}>{`Apple`}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 12, backgroundColor: '#fedede', borderRadius: 20, marginTop: 30 }}>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18 }}>{`ORDER`}</Text>
            </TouchableOpacity>

        </View>

    );
}

export { BurgerScreen };
