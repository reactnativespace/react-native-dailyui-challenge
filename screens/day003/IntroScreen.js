import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FadeIn from '../../components/FadeIn';
import { FontAwesome5 } from '@expo/vector-icons';

const IntroScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#e7eaf3' }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>RNS Furniture</Text>
                <FontAwesome5 name="bars" size={20} color={'#0d1b40'} />
            </View>

            <View style={{ flex: 1, padding: 12 }}>
                <FadeIn delay={300}>
                    <Text style={{ fontSize: 24, fontFamily: 'Poppins-Bold', color: '#0d1b40', textAlign: 'center' }}>{`Make your\n home feel comfortable`}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#778ab5', textAlign: 'center', lineHeight: 30, marginTop: 20 }}>{`Adding to the comfort of your home through\nfurniture is the most appropriate way. Our\nproduct is the right choice.`}</Text>
                </FadeIn>

                <FadeIn delay={600}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                        <TouchableOpacity style={{ width: 150, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#456cd3', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => navigation.navigate('Landing')}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>{`Get Started`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 150, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#e7eaf3', borderRadius: 10, borderWidth: 2, borderColor: '#456cd3', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Learn More`}</Text>
                        </TouchableOpacity>
                    </View>
                </FadeIn>

                <FadeIn delay={900}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./imgs/undraw_Woman_re_afr8-removebg-preview.png')} style={{ width: 400 }} resizeMode='contain' />
                    </View>
                </FadeIn>

            </View>


        </View>
    )
}

export { IntroScreen };

