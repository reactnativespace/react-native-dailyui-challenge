import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome5 name="grip-lines" size={24} color="#1f2127" style={{ marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#1f2127' }}>Notes</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome5 name="search" size={24} color="#1f2127" style={{ marginRight: 20 }} />
                    <FontAwesome5 name="bookmark" size={24} color="#1f2127" />
                </View>

            </View>

            <ScrollView style={{ flex: 1, padding: 8 }} showsVerticalScrollIndicator={false}>

                <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa',
                        borderRadius: 5
                    }}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#1f2127' }}>{`Vacation Home\nRental Success`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="clock" size={15} color="#1f2127" />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`20/01`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', opacity: 0.2, marginLeft: 10 }}>{`Travel`}</Text>
                            </View>
                        </View>
                        <Image source={require('./2.jpg')} style={{ width: 125, height: 125, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                    </TouchableOpacity>

                </Animated.View>
                <Animated.View entering={FadeInRight.delay(600).duration(300)}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa',
                        borderRadius: 5,
                        marginTop: 10
                    }}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#1f2127' }}>{`A Right Media Mix Can\nMake The Difference`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="clock" size={15} color="#1f2127" />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`14/02`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', opacity: 0.2, marginLeft: 10 }}>{`Advertising`}</Text>
                            </View>
                        </View>
                        <Image source={require('./1.jpg')} style={{ width: 125, height: 125, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(900).duration(300)}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa',
                        borderRadius: 5,
                        marginTop: 10
                    }}
                        onPress={() => navigation.navigate('Note')}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#1f2127' }}>{`Understanding Colors`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="clock" size={15} color="#1f2127" />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`25/03`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', opacity: 0.2, marginLeft: 10 }}>{`Science`}</Text>
                            </View>
                        </View>
                        <Image source={require('./3.jpg')} style={{ width: 125, height: 125, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(1200).duration(300)}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa',
                        borderRadius: 5,
                        marginTop: 10
                    }}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#1f2127' }}>{`Stock Market Analysis`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="clock" size={15} color="#1f2127" />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`14/04`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', opacity: 0.2, marginLeft: 10 }}>{`Money`}</Text>
                            </View>
                        </View>
                        <Image source={require('./5.jpg')} style={{ width: 125, height: 125, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(1500).duration(300)}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa',
                        borderRadius: 5,
                        marginTop: 10
                    }}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#1f2127' }}>{`Advertisers Embrace`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="clock" size={15} color="#1f2127" />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`01/05`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', opacity: 0.2, marginLeft: 10 }}>{`Stuff`}</Text>
                            </View>
                        </View>
                        <Image source={require('./4.jpg')} style={{ width: 125, height: 125, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                    </TouchableOpacity>
                </Animated.View>


                <Animated.View entering={FadeInRight.delay(1800).duration(300)}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa',
                        borderRadius: 5,
                        marginTop: 10
                    }}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#1f2127' }}>{`The Latest Financial News`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="clock" size={15} color="#1f2127" />
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', marginLeft: 10 }}>{`12/08`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#1f2127', opacity: 0.2, marginLeft: 10 }}>{`Investment`}</Text>
                            </View>
                        </View>
                        <Image source={require('./6.jpg')} style={{ width: 125, height: 125, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
                    </TouchableOpacity>
                </Animated.View>

            </ScrollView>
            <View style={{ position: 'absolute', width: 60, height: 60, borderRadius: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', bottom: 20, right: 20 }}>
                <FontAwesome5 name="plus" size={24} color="#000" />
            </View>
        </View >

    );
}

export { HomeScreen };
