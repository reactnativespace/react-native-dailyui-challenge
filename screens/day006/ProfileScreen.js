import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <View style={{ paddingVertical: 20, paddingHorizontal: 30, flexDirection: 'row' }}>
                <FontAwesome5 name="arrow-left" size={20} color={'#2a3341'} />
            </View>

            <ScrollView  contentContainerStyle={{paddingBottom: 20}}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./imgs/profile.jpg')} style={{ width: 120, height: 120, borderRadius: 60 }} />
                    <Text style={{ fontSize: 25, fontFamily: 'Poppins-Medium', color: '#1f2c3c' }}>Jane Doe</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c' }}>Software Developer | Daily UI</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, width: 250 }}>
                        <View style={{ padding: 12, backgroundColor: '#ffeef3', borderRadius: 10 }}>
                            <FontAwesome5 name="github" size={20} color='#d85782' />
                        </View>
                        <View style={{ padding: 12, backgroundColor: '#ebf2ff', borderRadius: 10 }}>
                            <FontAwesome5 name="twitter" size={20} color='#2069e6' />
                        </View>
                        <View style={{ padding: 12, backgroundColor: '#f7f7f7', borderRadius: 10 }}>
                            <FontAwesome5 name="instagram" size={20} color='#af7bb6' />
                        </View>
                        <View style={{ padding: 12, backgroundColor: '#e8f7ff', borderRadius: 10 }}>
                            <FontAwesome5 name="linkedin" size={20} color='#0278b7' />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c', textAlign: 'center' }}>12</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c', textAlign: 'center', marginTop: -10 }}>Posts</Text>
                        </View>

                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c', textAlign: 'center' }}>12.3K</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c', textAlign: 'center', marginTop: -10 }}>Followers</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c', textAlign: 'center' }}>101</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c', textAlign: 'center', marginTop: -10 }}>Following</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 380, marginTop: 20 }}>

                        <View style={{ borderWidth: 1, borderColor: '#1d40ff', borderRadius: 5, paddingVertical: 5, width: 180 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#1d40ff', textAlign: 'center' }}>Message</Text>
                        </View>

                        <View style={{ borderWidth: 1, backgroundColor: '#1d40ff', borderColor: '#1d40ff', borderRadius: 5, paddingVertical: 5, width: 180 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Follow</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 20 }}>

                        <Image source={require('./imgs/818-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/61-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/392-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />

                    </View>
                    <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 10 }}>

                        <Image source={require('./imgs/506-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/628-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/678-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />

                    </View>
                    <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 10 }}>

                        <Image source={require('./imgs/716-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/960-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/1013-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />

                    </View>
                    <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 10 }}>

                        <Image source={require('./imgs/376-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/1061-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                        <Image source={require('./imgs/645-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} />

                    </View>

                </View>
            </ScrollView>


        </View>
    )
};
export { ProfileScreen };