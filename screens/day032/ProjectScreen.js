import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import FadeIn from '../../components/FadeIn';

const ProjectScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window')

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <FadeIn delay={300}>
                <Image source={require('./headphone.png')} style={{ width: width, height: 350, resizeMode: 'cover' }} />
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20, backgroundColor: 'rgba(0,0,0,0.25)', padding: 12, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="left" size={24} color="#FFF" />
                </TouchableOpacity>
            </FadeIn>

            <View style={{ padding: 20 }}>

                <FadeIn delay={600}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <View style={{ padding: 6, backgroundColor: '#fed518', width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 15, }}>Tech</Text>
                        </View>
                        <AntDesign name="hearto" size={24} color="#e55a5b" />
                    </View>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20 }}>Powerful Battery Headphones</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 18, width: '100%', }}>How often do you usually charge your headphones? Most of the have a weak battery and its completely annoying especially when you forgot to charge</Text>
                </FadeIn>

                <FadeIn delay={900}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('./p1.jpg')} style={{ width: 40, height: 40, resizeMode: 'center', borderRadius: 20 }} />
                            <Image source={require('./p2.jpg')} style={{ width: 40, height: 40, resizeMode: 'center', borderRadius: 20, marginLeft: 4 }} />
                            <Image source={require('./p3.jpg')} style={{ width: 40, height: 40, resizeMode: 'center', borderRadius: 20, marginLeft: 4 }} />
                            <Image source={require('./p4.jpg')} style={{ width: 40, height: 40, resizeMode: 'center', borderRadius: 20, marginLeft: 4 }} />
                            <Image source={require('./p5.jpg')} style={{ width: 40, height: 40, resizeMode: 'center', borderRadius: 20, marginLeft: 4 }} />
                            <Image source={require('./p6.jpg')} style={{ width: 40, height: 40, resizeMode: 'center', borderRadius: 20, marginLeft: 4 }} />
                        </View>


                        <View style={{ alignSelf: 'flex-end' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 14 }}>120 Backers</Text>

                        </View>

                    </View>
                </FadeIn>

                <FadeIn delay={1200}>
                    <View style={{ marginTop: 20 }}>

                        <View>
                            <View style={{ width: '100%', height: 12, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10 }} />
                            <View style={{ width: '45%', height: 12, backgroundColor: '#fed519', borderRadius: 10, position: 'absolute' }} />
                        </View>

                        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20 }}>$ 36,000</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 14, alignSelf: 'flex-end', marginBottom: 4 }}> / $80,000</Text>
                            </View>

                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#c2c0c1', fontSize: 14 }}>21 days left</Text>

                        </View>
                    </View>
                </FadeIn>

            </View>
        </View>

    );
}

export { ProjectScreen };
