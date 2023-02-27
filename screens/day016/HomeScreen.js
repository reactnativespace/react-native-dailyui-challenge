import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <FadeIn delay={100}>

                <View style={{ padding: 12 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#000' }}>#8013</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('./imgs/ape.png')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10 }}>Bored Ape Yacht Club</Text>
                    </View>
                </View>
            </FadeIn>
            <View style={{ paddingHorizontal: 12, flex: 1 }}>
                <FadeIn delay={300}>
                    <Image source={require('./imgs/ape2.png')} style={{ width: 370, height: 370, borderRadius: 20, marginBottom: 20 }} />
                </FadeIn>

                <FadeIn delay={600}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="timer" size={35} color="black" />
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10 }}>Ending in</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10, marginTop: -8 }}>2 Days</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="ethereum" size={35} color="black" />
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10 }}>Current price</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10, marginTop: -8 }}>59.99 ETH</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8f8d8d', marginLeft: 5, marginTop: -4 }}>$77,123.74</Text>

                                </View>

                            </View>
                        </View>
                    </View>
                </FadeIn>

                <FadeIn delay={900}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, backgroundColor: '#2069e6', borderColor: '#2069e6', borderRadius: 10, width: 180, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Add to cart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#e5e8eb', borderRadius: 10, width: 180, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => setIsModalVisible(true)}>
                            <AntDesign name="tag" size={24} color="#2069e6" />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#2069e6', textAlign: 'center', marginLeft: 10 }}>Make Offer</Text>
                        </TouchableOpacity>

                    </View>
                </FadeIn>

                <FadeIn delay={1200}>
                    <View style={{ marginTop: 20 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name="list" size={24} color="black" />
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 8 }}>Offers</Text>
                        </View>


                        <View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 8 }}>54.2 ETH</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#2069e6', marginLeft: 8 }}>DGNX</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 8 }}>51.0 ETH</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#2069e6', marginLeft: 8 }}>SvenBomwollen</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 8 }}>49.8 ETH</Text>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#2069e6', marginLeft: 8 }}>Makin4</Text>
                            </View>




                        </View>

                    </View>

                </FadeIn>
            </View>

            <Modal
                style={{ flex: 1 }}
                visible={isModalVisible}
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}
                animationType={'fade'}
            >
                <View style={{
                    flex: 1,
                    padding: 12,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(26,26,26,0.5)',
                }}>
                    <View style={{
                        height: 320,
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        padding: 12
                    }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center' }}>Connect A Wallet</Text>

                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#8f8d8d', textAlign: 'center' }}>If you don't have a wallet yet, you can select a provider and create one now.</Text>


                        <TouchableOpacity style={{ marginTop: 8, alignItems: 'center', width: '100%', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#2069e6', borderRadius: 10 }}>
                            <Image source={require('./imgs/meta.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', marginLeft: 10 }}>MetaMask</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 8, alignItems: 'center', width: '100%', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#e5e8eb', borderRadius: 10 }}>
                            <Image source={require('./imgs/coinbase.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', marginLeft: 10 }}>Coinbase</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: 8, alignItems: 'center', width: '100%', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#e5e8eb', borderRadius: 10 }}>
                            <Image source={require('./imgs/core.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', marginLeft: 10 }}>Core</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ marginTop: 10, alignSelf: 'center', paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, backgroundColor: '#2069e6', borderColor: '#2069e6', borderRadius: 10, width: 165, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => setIsModalVisible(false)}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Connect</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>


        </View>

    );
}

export { HomeScreen };