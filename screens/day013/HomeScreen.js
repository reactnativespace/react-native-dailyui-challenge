import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeInDown, FadeOutUp } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ flexDirection: 'row', padding: 12, justifyContent: 'space-between' }}>
                <Ionicons name="ellipsis-vertical" size={25} color="#333950" />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="search-outline" size={25} color="#333950" />
                    <Ionicons name="md-chatbubbles-outline" size={25} color="#333950" style={{ marginLeft: 12 }} />
                </View>
            </View>

            <View style={{ padding: 12 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: '#333950' }}>Chats</Text>
                    <View style={{ width: 35, height: 35, padding: 5, backgroundColor: '#fe6262', borderRadius: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#FFF', alignSelf: 'center', lineHeight: 30 }}>2</Text>
                    </View>
                </View>

                <ScrollView>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=> navigation.navigate('Chat')}>
                        <Image source={require('./imgs/cloth1.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ width: 16, height: 16, borderRadius: 9, backgroundColor: '#13e2ac', position: 'absolute', top: -4, left: 40, borderWidth: 3, borderColor: '#FFF' }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Christine Petersen</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#fe6262', marginRight: 8, marginBottom: 2 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#333950' }}>What do you want for lunch?</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#333950' }}>12:45</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/cloth5.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ width: 16, height: 16, borderRadius: 9, backgroundColor: '#13e2ac', position: 'absolute', top: -4, left: 40, borderWidth: 3, borderColor: '#FFF' }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Emme Greig</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#fe6262', marginRight: 8, marginBottom: 2 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#333950' }}>Wanna join us?😍😍</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#333950' }}>12:02</Text>
                    </TouchableOpacity>




                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/image03.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Amelia-Grace Fernandez</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>Yes, please ❤️</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>14:53</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/cloth3.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Jayde Novak</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>Ok, see you..</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>10:71</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/cloth2.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Maha Haas</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>Tomorrow, pls.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>14:00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/image.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Marvin Sharp</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>Done.</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>14:00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/image02.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Alby Ratliff</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>Waiting your email dude</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>18:00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Image source={require('./imgs/image01.jpg')} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#333950' }}>Hendrix Reed</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -5 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>Okay, see you man</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#dfe0e3' }}>21:45</Text>
                    </TouchableOpacity>


                </ScrollView>



            </View>

        </View>

    );
}

export { HomeScreen };