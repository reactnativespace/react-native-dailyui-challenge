import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, TextInput, ImageBackground } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeInDown, FadeOutUp } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12 }}>

            <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8faf9', borderRadius: 10 }}>

                <TextInput placeholder='Search for a product' placeholderTextColor={'#a7a9ab'} style={{ fontSize: 18, fontFamily: 'Poppins-Regular', flex: 1 }} />
                <Feather name="search" size={25} color={'#a7a9ab'} />
            </View>
            <ScrollView>
                <View>
                    <ScrollView horizontal style={{ paddingVertical: 24, borderBottomColor: '#ebebeb', borderBottomWidth: 1 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 8, borderWidth: 1, borderRadius: 10, borderColor: '#ebebeb' }}>
                            <Image source={require('./imgs/watch3.jpg')} style={{ width: 40, height: 40, backgroundColor: '#ebebeb', borderRadius: 10, resizeMode: 'center' }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', marginLeft: 8 }}>Smart Watch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 8, borderWidth: 1, borderRadius: 10, borderColor: '#ebebeb', marginLeft: 8 }}>
                            <Image source={require('./imgs/asus.png')} style={{ width: 40, height: 40, backgroundColor: '#f1c40f', borderRadius: 10, resizeMode: 'center' }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', marginLeft: 8 }}>Headset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 8, borderWidth: 1, borderRadius: 10, borderColor: '#ebebeb', marginLeft: 8 }}>
                            <Image source={require('./imgs/cloth1.jpg')} style={{ width: 40, height: 40, backgroundColor: '#ebebeb', borderRadius: 10, resizeMode: 'center' }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', marginLeft: 8 }}>Clothes</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#000' }}>Hot Sales</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#62686d' }}>See All</Text>
                </View>

                <View style={{ marginTop: 12 }}>
                    <ScrollView horizontal>

                        <TouchableOpacity style={{ width: 180 }}>
                            <View>
                                <Image source={require('./imgs/watch4.jpg')} style={{ width: 180, height: 180, borderRadius: 10, backgroundColor: 'red', resizeMode: 'center' }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#FFF', position: 'absolute', bottom: 5, left: 5, backgroundColor: '#000', paddingHorizontal: 8, borderRadius: 5 }}>Free shipping</Text>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Smart Watch, 1.8 Inches</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 54</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Full Touch Screen Fitness\nSmart Watches`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
                            <View>
                                <Image source={require('./imgs/watch2.jpg')} style={{ width: 180, height: 180, borderRadius: 10, backgroundColor: 'red', resizeMode: 'center' }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#FFF', position: 'absolute', bottom: 5, left: 5, backgroundColor: '#000', paddingHorizontal: 8, borderRadius: 5 }}>Free shipping</Text>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Fitness Tracker</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 32</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Compatible with\nAndroid iPhone iOS`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
                            <View>
                                <Image source={require('./imgs/watch5.jpg')} style={{ width: 180, height: 180, borderRadius: 10, backgroundColor: 'red', resizeMode: 'center' }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#FFF', position: 'absolute', bottom: 5, left: 5, backgroundColor: '#000', paddingHorizontal: 8, borderRadius: 5 }}>Free shipping</Text>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Smart Watch, Tracker</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 59</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Blood Oxygen\nStep Counter`}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: '#000' }}>Recently Viewed</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#62686d' }}>See All</Text>
                </View>

                <View style={{ marginTop: 12 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: 180 }}>
                            <View>
                                <Image source={require('./imgs/cloth2.jpg')} style={{ width: 180, height: 180, borderRadius: 10, resizeMode: 'center' }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Women's Oversized</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 34</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Sweatshirts Long\nSleeve`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
                            <View>
                                <Image source={require('./imgs/cloth3.jpg')} style={{ width: 180, height: 180, borderRadius: 10, backgroundColor: 'red', resizeMode: 'center' }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Trendy Queen Women's</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 19</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Shirts Basic\nLayering Slim`}</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                        <TouchableOpacity style={{ width: 180 }} onPress={() => navigation.navigate('Product')}>
                            <View>
                                <Image source={require('./imgs/cloth4.jpg')} style={{ width: 180, height: 180, borderRadius: 10, resizeMode: 'center' }} />

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Polarized Sunglasses</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 99</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Madison Avenue\nRetro`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
                            <View>
                                <Image source={require('./imgs/cloth5.jpg')} style={{ width: 180, height: 180, borderRadius: 10, backgroundColor: 'red', resizeMode: 'center' }} />

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>Konikit Women's Sun Hat</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#000' }}>$ 12</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#62686d' }}>{`Colorblock Fishing\nHat`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>




            </ScrollView>
        </View>

    );
}

export { HomeScreen };