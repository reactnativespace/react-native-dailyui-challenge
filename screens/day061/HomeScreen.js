import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, backgroundColor: '#FFF' }} >
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: '#131313' }}>{`Coupons`}</Text>
                <Ionicons name="menu" size={30} color="black" />
            </View>

            <ScrollView style={{ padding: 8 }}>

                <Animated.View entering={FadeInDown.delay(400).duration(400)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TouchableOpacity style={{
                        width: 180, borderRadius: 10, backgroundColor: '#FFF',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,

                        elevation: 11,
                    }}
                    onPress={()=> navigation.navigate('Coupon')}>
                        <View style={{ backgroundColor: '#0f68d7', width: 180, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image source={require('./adidas.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <View style={{
                            borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, borderColor: 'black'
                        }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`10% Off`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#131313' }}>{`Adidas Store`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#0f68d7' }}>{`JAN 1 - JAN 12`}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 180, borderRadius: 10, backgroundColor: '#FFF',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,
                        elevation: 11,
                    }}>
                        <View style={{ backgroundColor: '#206e3f', width: 180, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image source={require('./starbucks.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <View style={{
                            borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, borderColor: 'black'
                        }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`$2 Off`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#131313' }}>{`Starbucks`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#206e3f' }}>{`JAN 10 - JAN 12`}</Text>
                        </View>
                    </TouchableOpacity>


                </Animated.View>

                <Animated.View entering={FadeInDown.delay(800).duration(400)} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                    <TouchableOpacity style={{
                        width: 180, borderRadius: 10, backgroundColor: '#FFF',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,

                        elevation: 11,
                    }}>
                        <View style={{ backgroundColor: '#ea0a8c', width: 180, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image source={require('./lyft.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <View style={{
                            borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, borderColor: 'black'
                        }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`3 Rides 12% Off`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#131313' }}>{`lyft`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#ea0a8c' }}>{`FEB 1 - FEB 10`}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 180, borderRadius: 10, backgroundColor: '#FFF',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,
                        elevation: 11,
                    }}>
                        <View style={{ backgroundColor: '#363636', width: 180, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image source={require('./apple.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <View style={{
                            borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, borderColor: 'black'
                        }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`10% Off`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#131313' }}>{`Apple Store`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#363636' }}>{`FEB 1 - FEB 10`}</Text>
                        </View>
                    </TouchableOpacity>


                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1200).duration(400)} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                    <TouchableOpacity style={{
                        width: 180, borderRadius: 10, backgroundColor: '#FFF',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,

                        elevation: 11,
                    }}>
                        <View style={{ backgroundColor: '#252525', width: 180, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image source={require('./spotify.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <View style={{
                            borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, borderColor: 'black'
                        }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`2 Months Free`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#131313' }}>{`Spotify`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#252525' }}>{`FEB 10 - FEB 15`}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 180, borderRadius: 10, backgroundColor: '#FFF',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,
                        elevation: 11,
                    }}>
                        <View style={{ backgroundColor: '#E50914', width: 180, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Image source={require('./netflix.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <View style={{
                            borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, borderColor: 'black'
                        }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#131313' }}>{`2 Months Free`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#131313' }}>{`Netflix`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#E50914' }}>{`FEB 10 - FEB 15`}</Text>
                        </View>
                    </TouchableOpacity>


                </Animated.View>




            </ScrollView>

        </View >

    );
}

export { HomeScreen };
