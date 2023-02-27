import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, Dimensions, LogBox, Switch } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = React.useState(true);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const [temp, setTemp] = React.useState(68);
    const [temp2, setTemp2] = React.useState(68);

    return (
        <View style={{ flex: 1, backgroundColor: '#f6f8fa' }}>


            <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#14223b', }}>Bedroom</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#334261' }} />
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#bec2c9', marginLeft: 5 }} />
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#bec2c9', marginLeft: 5 }} />
                    </View>
                </View>
                <FontAwesome5 name="cog" size={24} color="#14223b" />
            </View>

            <View style={{ padding: 30 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{
                        width: 150, height: 150, backgroundColor: '#FFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }} onPress={() => setIsModalVisible(true)}>
                        <FontAwesome5 name="temperature-high" size={30} color="#ff0100" />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#14223b', marginVertical: 4 }}>Temperature</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: '#14223b', }}>{temp}</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#14223b', marginBottom: 10 }}>ºF</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 150, height: 150, backgroundColor: '#FFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <Entypo name="water" size={30} color="#1c65f1" />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#14223b', marginVertical: 4 }}>Humidity</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: '#14223b', }}>34</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#14223b', marginBottom: 10 }}>%</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <TouchableOpacity style={{
                        width: 150, height: 150, backgroundColor: '#FFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }} onPress={toggleSwitch}>
                        <FontAwesome5 name="lightbulb" size={30} color={isEnabled ? '#f79f1a' : "#d1d3d6"} />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#14223b', marginVertical: 4 }}>Room Light</Text>
                        <Switch
                            trackColor={{ false: "#d0d3d9", true: "#f79f1a" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            value={isEnabled}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 150, height: 150, backgroundColor: '#FFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}
                        onPress={toggleSwitch2}>
                        <FontAwesome5 name="lightbulb" size={30} color={isEnabled2 ? '#f79f1a' : "#d1d3d6"} />
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#14223b', marginVertical: 4 }}>Bed Lamp</Text>
                        <Switch
                            trackColor={{ false: "#d0d3d9", true: "#f79f1a" }}
                            thumbColor={isEnabled2 ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            value={isEnabled2}
                        />

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <TouchableOpacity style={{
                        width: 150, height: 150, backgroundColor: '#FFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <Text style={{ fontSize: 40, fontFamily: 'Poppins-Regular', color: '#15213d' }}>+</Text>

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
                        height: 450,
                        backgroundColor: '#fff',
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        paddingHorizontal: 25,
                        paddingVertical: 25
                    }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Bold', color: '#000', textAlign: 'center', marginBottom: 30 }}>Temperature</Text>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 250, height: 50, borderWidth: 2, borderRadius: 30, borderColor: '#f6f6f6', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTemp2(prevState => prevState + 1)}>
                                <FontAwesome5 name="sort-up" size={30} color="#15213d" style={{ marginTop: 8 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginVertical: 12 }}>
                                <Text style={{ fontSize: 60, fontFamily: 'Poppins-Medium', color: '#14223b', }}>{temp2}</Text>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular', color: '#14223b', marginBottom: 20 }}>ºF</Text>
                            </View>
                            <TouchableOpacity style={{ width: 250, height: 50, borderWidth: 2, borderRadius: 30, borderColor: '#f6f6f6', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTemp2(prevState => prevState - 1)}>
                                <FontAwesome5 name="sort-down" size={30} color="#15213d" style={{ marginBottom: 8 }} />
                            </TouchableOpacity>

                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60 }}>

                            <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#1f1cff', borderRadius: 20, width: 165, justifyContent: 'center', alignItems: 'center' }} onPress={() => setIsModalVisible(false)}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, backgroundColor: '#1f1cff', borderColor: '#1f1cff', borderRadius: 20, width: 165, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => { setIsModalVisible(false); setTemp(temp2) }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Confirm</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>

        </View>

    );
}

export { HomeScreen };
