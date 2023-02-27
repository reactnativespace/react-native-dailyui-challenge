import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const SecurityScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#0b0f20' }}>

            <View style={{ padding: 12 }}>

                <FadeIn delay={300}>
                    <View style={{ flexDirection: 'row', marginTop: 40, paddingBottom: 30, borderBottomColor: '#6e7e87', borderBottomWidth: 0.5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome5 name="arrow-left" size={20} color={'#FFF'} /></TouchableOpacity>

                        <Text style={{ fontSize: 25, fontFamily: 'Poppins-Medium', color: '#FFF', marginLeft: 20 }}>Security</Text>
                    </View>
                </FadeIn>

                <FadeIn delay={600}>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#3b2924', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="vpn-key" size={20} color={'#ff9844'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#28194c', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="verified-user" size={20} color={'#8300ff'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Login Activity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#1c3f4c', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="phonelink-lock" size={20} color={'#32b1b7'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>2F Authentication</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#3b3821', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="email" size={20} color={'#ffe03b'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Email Activity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#3b194b', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="history" size={20} color={'#fe00f9'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Access Data</Text>
                        </TouchableOpacity>
                    </View>
                </FadeIn>


            </View>

        </View>

    );
}

export { SecurityScreen };