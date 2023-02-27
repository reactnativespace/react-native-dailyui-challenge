import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FadeIn from '../../components/FadeIn';

const HomeScreen = ({ navigation }) => {

    const images = [require('./supra_1.png'), require('./supra_2.png'), require('./supra_3.png'), require('./supra_4.png')];
    const [index, setIndex] = React.useState(0);

    return (

        <View style={{ flex: 1, backgroundColor: '#191919', padding: 20 }}>


            <View style={{ width: 500, position: 'absolute', opacity: 0.2, transform: [{ rotate: "270deg" }], bottom: 145, right: -220 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', fontSize: 120 }}>TOYOTA</Text>
            </View>


            <MaterialCommunityIcons name="reorder-horizontal" size={30} color="#fefefe" />
            <FadeIn delay={300}>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#ffd701', fontSize: 25, marginBottom: -25 }}>2021</Text>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', fontSize: 40 }}>TOYOTA SUPRA</Text>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#ffd701', fontSize: 25, alignSelf: 'flex-end' }}>$650</Text>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', fontSize: 20, alignSelf: 'flex-end', marginTop: -10 }}>/24H</Text>
                </View>
            </FadeIn>
            <FadeIn delay={600}>
                <View>
                    <Image source={images[index]} style={{ width: 370, height: 180, resizeMode: 'contain', marginTop: 20, alignSelf: 'center' }} />
                    <TouchableOpacity style={{ position: 'absolute', width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', top: 80, left: -10 }}
                        onPress={() => {
                            if (index === 0) setIndex(3);
                            else
                                setIndex(index => index - 1);
                        }}>
                        <MaterialCommunityIcons name="arrow-left" size={20} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', top: 80, right: -10 }}
                        onPress={() => {
                            if (index === 3) setIndex(0);
                            else
                                setIndex(index => index + 1);
                        }}>
                        <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ width: 16, height: 16, backgroundColor: index === 0 ? '#ffd701' : 'rgba(255, 255, 255, 0.2)', borderRadius: 10 }} />
                    <View style={{ width: 16, height: 16, backgroundColor: index === 1 ? '#ffd701' : 'rgba(255, 255, 255, 0.2)', borderRadius: 10, marginLeft: 5 }} />
                    <View style={{ width: 16, height: 16, backgroundColor: index === 2 ? '#ffd701' : 'rgba(255, 255, 255, 0.2)', borderRadius: 10, marginLeft: 5 }} />
                    <View style={{ width: 16, height: 16, backgroundColor: index === 3 ? '#ffd701' : 'rgba(255, 255, 255, 0.2)', borderRadius: 10, marginLeft: 5 }} />
                </View>
            </FadeIn>
            <FadeIn delay={900}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', fontSize: 20, }}>Power</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefefe', fontSize: 15, marginTop: -5 }}>382 hp</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', fontSize: 20, }}>Torque</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefefe', fontSize: 15, marginTop: -5 }}>368 lb-ft</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#fefefe', fontSize: 20, }}>60 mph</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefefe', fontSize: 15, marginTop: -5 }}>3.8 sec</Text>
                    </View>
                </View>
            </FadeIn>

            <FadeIn delay={1200}>
                <TouchableOpacity style={{ backgroundColor: '#ffd701', justifyContent: 'center', alignItems: 'center', borderRadius: 20, padding: 6, marginTop: 100, width: 200, alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#000', fontSize: 20, }}>RENT NOW</Text>
                </TouchableOpacity></FadeIn>

        </View>


    );
}

export { HomeScreen };
