import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import SmoothPicker from "react-native-smooth-picker";

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [isVisible, setIsVisible] = React.useState(false);
    const [selected, setSelected] = React.useState(0);


    const handleChange = (index) => {
        setSelected(index);
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <ScrollView style={{ padding: 20 }}>

                {[...new Array(15)].map((item, index) =>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }} key={index}>
                        <View style={{ height: 80, width: 80, borderRadius: 10, backgroundColor: '#f2f2fa' }} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <View style={{ height: 10, width: 260, backgroundColor: '#f2f2fa' }} />
                            <View style={{ height: 10, width: 260, backgroundColor: '#f2f2fa', marginTop: 10 }} />
                            <View style={{ height: 10, width: 100, backgroundColor: '#f2f2fa', marginTop: 10 }} />
                        </View>
                    </View>)}



            </ScrollView>

            <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ width: 80, justifyContent: 'center', alignItems: 'center', padding: 7, borderRadius: 5, backgroundColor: '#8b8cff' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', }}>Previous</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', width: 80, alignItems: 'center', borderRadius: 5, borderColor: '#8b8cff', borderWidth: 2 }} onPress={() => setIsVisible(true)}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#8b8cff', fontSize: 17 }}>{selected + 1}</Text>
                    <Ionicons name="chevron-down" size={24} color="#8b8cff" />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 80, justifyContent: 'center', alignItems: 'center', padding: 7, borderRadius: 5, backgroundColor: '#8b8cff' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', }}>Next</Text>
                </TouchableOpacity>
            </View>


            <Modal
                style={{ flex: 1 }}
                visible={isVisible}
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
                animationType={'fade'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}>
                    <View style={{
                        height: 400,
                        backgroundColor: '#FFF',
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 24,
                    }}>

                        <View style={{
                            backgroundColor: '#f6f6fd',
                            borderTopRightRadius: 25,
                            borderTopLeftRadius: 25,
                            padding: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#8b8cff', fontSize: 17 }}>Select Page</Text>
                            <TouchableOpacity style={{ width: 80, justifyContent: 'center', alignItems: 'center', padding: 7, borderRadius: 5, backgroundColor: '#8b8cff' }} onPress={() => setIsVisible(false)}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', }}>Done</Text>
                            </TouchableOpacity>
                        </View>

                        <SmoothPicker
                            offsetSelection={60}
                            startMargin={0}
                            magnet
                            scrollAnimation
                            data={Array.from({ length: 50 }, (_, i) => i)}
                            onSelected={({ item, index }) => handleChange(index)}
                            renderItem={({ item, index }) => (
                                <Text style={{ fontFamily: index === selected ? 'Poppins-Bold' : 'Poppins-Regular', color: '#8b8cff', fontSize: 30, alignSelf: 'center', borderWidth: index === selected ? 1: 0, borderColor:'#8b8cff',borderRadius: 5,width: 150, textAlign:'center' }}>{index + 1}</Text>
                            )}
                        />
                    </View>
                </View>
            </Modal>



        </View>
    );
}

export { HomeScreen };
/**

                        <ScrollView style={{ flexDirection: 'row', marginTop: 30, flexGrow: 0 }} horizontal showsHorizontalScrollIndicator={false}>
                            {[...new Array(50)].map((item, index) =>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#8b8cff', marginLeft: 30, fontSize: 30 }}>{index + 2}</Text>
                            )}
                        </ScrollView>

 */