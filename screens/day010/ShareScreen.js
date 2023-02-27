import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ShareScreen = ({ navigation }) => {

    const [isModalVisible, setIsModalVisible] = React.useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <View style={{ padding: 12 }}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#000' }}>Elon #5217</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./imgs/elon.jpg')} style={{ width: 30, height: 30, borderRadius: 25 }} />
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10 }}>Elon's Space Party</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 12 }}>
                <Image source={require('./imgs/elon2.jpg')} style={{ width: 370, height: 370, borderRadius: 20, marginBottom: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="timer" size={35} color="black" />
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10 }}>Ending in</Text>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10, marginTop: -8 }}>8h 41m</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="ethereum" size={35} color="black" />
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10 }}>Highest bid</Text>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', marginLeft: 10, marginTop: -8 }}>0.5 ETH</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#2069e6', borderRadius: 10, width: 180, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center' }}>Place Bid</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#2069e6', borderRadius: 10, width: 180, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => setIsModalVisible(true)}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center' }}>Share</Text>
                    </TouchableOpacity>

                </View>
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
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(26,26,26,0.5)',
                }}>
                    <View style={{
                        height: 300,
                        backgroundColor: '#fff',
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        paddingHorizontal: 25,
                        paddingVertical: 25
                    }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center' }}>Share with a friend</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>

                            <View style={{ padding: 12, backgroundColor: '#ebf2ff', borderRadius: 10 }}>
                                <FontAwesome5 name="twitter" size={20} color='#2069e6' />
                            </View>


                            <View style={{ padding: 12, backgroundColor: '#ebf2ff', borderRadius: 10, marginLeft: 10 }}>
                                <FontAwesome5 name="whatsapp" size={20} color='#2069e6' />
                            </View>


                            <View style={{ padding: 12, backgroundColor: '#ebf2ff', borderRadius: 10, marginLeft: 10 }}>
                                <FontAwesome5 name="facebook" size={20} color='#2069e6' />
                            </View>

                            <View style={{ padding: 12, backgroundColor: '#ebf2ff', borderRadius: 10, marginLeft: 10 }}>
                                <FontAwesome5 name="instagram" size={20} color='#2069e6' />
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000', marginTop: 12 }}>Copy the link:</Text>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#2069e6', }}>https://shorturl.at/evA09</Text>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>

                            <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#2069e6', borderRadius: 10, width: 165, justifyContent: 'center', alignItems: 'center' }} onPress={()=> setIsModalVisible(false)}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, backgroundColor: '#2069e6', borderColor: '#2069e6', borderRadius: 10, width: 165, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => setIsModalVisible(true)}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Share</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>


        </View>

    );
}

export { ShareScreen };