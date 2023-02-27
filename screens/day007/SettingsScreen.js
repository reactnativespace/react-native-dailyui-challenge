import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#0b0f20' }}>

            <View style={{ padding: 12 }}>

                <FadeIn delay={300}>
                    <View style={{ flexDirection: 'row', marginTop: 40, paddingBottom: 30, borderBottomColor: '#6e7e87', borderBottomWidth: 0.5 }}>
                        <Image source={require('./imgs/image.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        <View style={{ width: 20, height: 20, backgroundColor: '#00a5ff', borderRadius: 10, position: 'absolute', left: 75, borderColor: '#0b0f20', borderWidth: 2 }} />
                        <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>John Doe</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#6e7e87' }}>johndoe@nolur.com</Text>
                        </View>
                    </View>
                </FadeIn>
                <FadeIn delay={600}>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#3b2924', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="notifications-none" size={20} color={'#ff9844'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Notifications</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#28194c', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="lock-open" size={20} color={'#8300ff'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Privacy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => navigation.navigate('Security')}>
                            <View style={{ backgroundColor: '#1c3f4c', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="security" size={20} color={'#32b1b7'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Security</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#3b242f', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="chat" size={20} color={'#ff4339'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#1b344c', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="notifications-none" size={20} color={'#097fc3'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Help</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#253b1f', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="report" size={20} color={'#91ec1d'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Report</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: '#3b194b', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                                <MaterialIcons name="notifications-none" size={20} color={'#fe00f9'} />
                            </View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', alignSelf: 'center', marginLeft: 10 }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </FadeIn>

            </View>

        </View>

    );
}

export { SettingsScreen };