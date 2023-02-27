import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: '#f6f6f6', padding: 12 }}>

            <Text style={{ fontFamily: 'Poppins-Bold', color: '#000', fontSize: 20 }}>Projects</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 12, borderRadius: 10, marginTop: 20 }}>
                <AntDesign name="search1" size={25} color="#c2c0c1" />
                <TextInput placeholder='Search' placeholderTextColor='#c2c0c1' style={{ fontFamily: 'Poppins-Medium', flex: 1, marginLeft: 8 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#FFF', padding: 8, width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <AntDesign name="rocket1" size={30} color="#fed519" />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16, marginTop: 2 }}>New</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#FFF', padding: 8, width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <AntDesign name="hearto" size={30} color="#fed519" />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16, marginTop: 2 }}>Popular</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#FFF', padding: 8, width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <AntDesign name="laptop" size={30} color="#fed519" />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16, marginTop: 2 }}>Tech</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#FFF', padding: 8, width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <AntDesign name="appstore-o" size={30} color="#fed519" />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 16, marginTop: 2 }}>Art</Text>
                </TouchableOpacity>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 10 }}>
                    <Image source={require('./plane.png')} style={{ width: 368, height: 210, resizeMode: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ffc800' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, marginTop: 2, marginLeft: 12, marginTop: 12 }}>Long range FPV RC plane</Text>

                    <View style={{ paddingHorizontal: 12, marginTop: 12 }}>

                        <View>
                            <View style={{ width: '100%', height: 12, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10 }} />
                            <View style={{ width: '80%', height: 12, backgroundColor: '#fed519', borderRadius: 10, position: 'absolute' }} />
                        </View>

                        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20 }}>$ 40,000</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 14, alignSelf: 'flex-end', marginBottom: 4 }}> / $50,000</Text>
                            </View>

                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#c2c0c1', fontSize: 14 }}>8 days left</Text>

                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 10, marginTop: 20 }}>
                    <Image source={require('./keyboard.png')} style={{ width: 368, height: 210, resizeMode: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#ffc800' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, marginTop: 2, marginLeft: 12, marginTop: 12 }}>Silent mechanical keyboard</Text>

                    <View style={{ paddingHorizontal: 12, marginTop: 12 }}>

                        <View>
                            <View style={{ width: '100%', height: 12, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10 }} />
                            <View style={{ width: '50%', height: 12, backgroundColor: '#fed519', borderRadius: 10, position: 'absolute' }} />
                        </View>

                        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20 }}>$ 60,000</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 14, alignSelf: 'flex-end', marginBottom: 4 }}> / $120,000</Text>
                            </View>

                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#c2c0c1', fontSize: 14 }}>35 days left</Text>

                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 10, marginTop: 20 }} onPress={() => navigation.navigate('Project')}>
                    <Image source={require('./headphone.png')} style={{ width: 368, height: 210, resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 20, marginTop: 2, marginLeft: 12, marginTop: 12 }}>Powerful battery headphones</Text>

                    <View style={{ paddingHorizontal: 12, marginTop: 12 }}>

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
                </TouchableOpacity>


            </ScrollView>



        </View>

    );
}

export { HomeScreen };
