import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import FadeIn from '../../components/FadeIn';
import { FontAwesome5 } from '@expo/vector-icons';

const LandingScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#e7eaf3' }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>Our Services</Text>
                <FontAwesome5 name="bars" size={20} color={'#0d1b40'} />
            </View>

            <View style={{ flex: 1, padding: 12 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -50 }}>
                    <Image source={require('./imgs/undraw_heavy_box_agqi-removebg-preview.png')} style={{ height: 250 }} resizeMode='contain' />
                </View>

                <ScrollView style={{ zIndex: 9999 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="chair" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Custom Made`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We make furniture using the design you\nwant, because everyone has their own taste.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="star" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Free Maintenance`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We will provide free maintanance 5 times\nfrom the first time you buy our product.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="shipping-fast" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Free Shipping`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We provide the first delivery with free shipping anywhere in your home.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="eye" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`3D Product View`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`You can see your 3D view of your product\nbefore buying with augmented reality.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="tools" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`+2 Years Insurance`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We provide extra two years guarantee\nfor free.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="chair" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Custom Made`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We make furniture using the design you\nwant, because everyone has their own taste.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="star" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Free Maintenance`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We will provide free maintanance 5 times\nfrom the first time you buy our product.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="shipping-fast" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`Free Shipping`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We provide the first delivery with free shipping anywhere in your home.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="eye" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`3D Product View`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`You can see your 3D view of your product\nbefore buying with augmented reality.`}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#d5def5', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <FontAwesome5 name="tools" size={20} color={'#6f8ddd'} />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#0d1b40' }}>{`+2 Years Insurance`}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#778ab5', marginTop: 10, lineHeight: 25 }}>{`We provide extra two years guarantee\nfor free.`}</Text>
                        </View>
                    </View>
                    
                </ScrollView>

            </View>


        </View>
    )
}

export { LandingScreen };
