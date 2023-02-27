import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, set } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';



const FlightScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    const [isSelected, setIsSelected] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    return (

        <View style={{ flex: 1, backgroundColor: '#130c60', }}>

            {!isVisible &&
                <>

                    <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 18, marginLeft: 100 }}>Pick your seat</Text>
                    </View>

                    <View style={{ padding: 20 }}>

                        <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', borderTopLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderTopRightRadius: 20 }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderTopLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5, borderTopRightRadius: 20 }} />
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderBottomLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderBottomRightRadius: 20 }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderBottomLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderBottomRightRadius: 20 }} />
                                </View>

                            </View>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(600).duration(300)}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderTopLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderTopRightRadius: 20 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', borderTopLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderTopRightRadius: 20 }} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5, }} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5, }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, }} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderBottomLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5, borderBottomRightRadius: 20 }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderBottomLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: isSelected ? '#ffbd5b' : '#4632ff', marginLeft: 5, borderBottomRightRadius: 20 }} onPress={() => setIsSelected(current => !current)} />
                                </View>

                            </View>

                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(900).duration(300)}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderTopLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderTopRightRadius: 20 }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderTopLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderTopRightRadius: 20 }} />
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', borderBottomLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', marginLeft: 5, borderBottomRightRadius: 20 }} />
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#4632ff', borderBottomLeftRadius: 20 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5 }} />
                                    <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: '#322899', marginLeft: 5, borderBottomRightRadius: 20 }} />
                                </View>

                            </View>

                        </Animated.View>

                    </View>

                    <Modal
                        style={{ flex: 1 }}
                        visible={isSelected}
                        transparent={true}
                        onRequestClose={() => setIsSelected(false)}
                        animationType={'slide'}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                        }}>
                            <View style={{
                                height: 240,
                                backgroundColor: '#fafcfe',
                                borderTopLeftRadius: 50,
                                borderTopRightRadius: 50,
                                padding: 40
                            }}>

                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ flex: 1, borderColor: '#a1a1a1', borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16, textAlign: 'center' }}>Seat 7F</Text>
                                    </View>

                                    <View style={{ flex: 1, borderColor: '#a1a1a1', borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16, textAlign: 'center' }}>1 bag</Text>
                                    </View>

                                    <View style={{ flex: 1, borderColor: '#a1a1a1', borderWidth: 1, justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16, textAlign: 'center' }}>1 Person</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }} >

                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>CDG Paris</Text>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16 }}>07:35</Text>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16, alignSelf: 'flex-end' }}>ARN Stockholm</Text>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#130c60', fontSize: 16, alignSelf: 'flex-end' }}>10:10</Text>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 25 }}>$75</Text>

                                    <TouchableOpacity style={{ paddingHorizontal: 50, paddingVertical: 5, backgroundColor: '#ffbd5b', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 20 }} onPress={() => setIsVisible(true)}>
                                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#141414', fontSize: 16 }}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </>
            }

            {isVisible &&
                <LottieView
                    autoPlay
                    style={{
                        alignSelf: 'center',
                        marginTop: 50,
                        width: 400,
                        height: 400,
                        backgroundColor: '#130c60',
                    }}
                    source={require('./91068-message-sent-successfully-plane.json')}
                />}


        </View >

    );
}

export { FlightScreen };
