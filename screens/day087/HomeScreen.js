import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20, alignItems: 'center' }}>

            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                {[...new Array(7)].map((x, i) =>
                    <Animated.View key={i} style={{ marginBottom: 20 }} entering={FadeInRight.delay(500 * i).duration(500)} layout={Layout.delay(10)}>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: 120, height: 7, backgroundColor: '#e9e9f0' }} />
                            {i == 4 &&
                                <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#8b8cff', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => setIsVisible(true)}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#FFF' }}>?</Text>
                                </TouchableOpacity>}
                        </View>
                        <View style={{ width: 340, height: 70, borderWidth: 2, borderColor: '#e9e9f0' }} />
                    </Animated.View>)}
            </ScrollView>

            <Modal
                style={{ flex: 1 }}
                visible={isVisible}
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
                animationType={'slide'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0,0,0,0)'
                }}>
                    <View style={{
                        height: 160,
                        backgroundColor: '#e8e8ff',
                        paddingHorizontal: 20,
                        paddingVertical: 30
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#8b8cff' }}>Help</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#8b8cff' }}>{`This is a tooltip content for mobile.\nWhen tap the help icon that appears.`}</Text>


                    </View>
                </View>
            </Modal>

        </View>
    );
}

export { HomeScreen };
