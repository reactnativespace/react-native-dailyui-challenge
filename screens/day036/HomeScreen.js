import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const HomeScreen = () => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);


    React.useEffect(() => {

        const timeout = setTimeout(() => {
            setIsModalVisible(true);
        }, 2200);

        return () => {
            clearTimeout(timeout);

        }

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>


            <View style={{ padding: 12, justifyContent: 'center', alignItems: 'center' }}>

                <Animated.View style={{ justifyContent: 'center', alignItems: 'center' }} entering={FadeInDown.delay(300)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('./imgs/profile.png')} style={{ width: 80, height: 80, borderRadius: 40, resizeMode: 'cover' }} />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingHorizontal: 12 }}>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c', textAlign: 'center' }}>12</Text>
                                <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c', textAlign: 'center', marginTop: -10 }}>Posts</Text>
                            </View>

                            <View style={{ marginLeft: 40 }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c', textAlign: 'center' }}>54.8K</Text>
                                <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c', textAlign: 'center', marginTop: -10 }}>Followers</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c', textAlign: 'center' }}>56</Text>
                                <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c', textAlign: 'center', marginTop: -10 }}>Following</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#1f2c3c' }}>Vito Scaletta</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#1f2c3c' }}>📸 Professional Photographer</Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 380, marginTop: 10 }}>

                        <View style={{ borderWidth: 1, borderColor: '#4795b5', borderRadius: 5, paddingVertical: 5, width: 180 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#4795b5', textAlign: 'center' }}>Message</Text>
                        </View>

                        <View style={{ borderWidth: 1, backgroundColor: '#4795b5', borderColor: '#4795b5', borderRadius: 5, paddingVertical: 5, width: 180 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Follow</Text>
                        </View>
                    </View>
                </Animated.View>

                <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 20 }}>

                    <Animated.View entering={FadeInDown.delay(500).duration(100)}><Image source={require('./imgs/818-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(100)}><Image source={require('./imgs/61-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(700).duration(100)}><Image source={require('./imgs/392-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>

                </View>
                <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 10 }}>

                    <Animated.View entering={FadeInDown.delay(800).duration(100)}><Image source={require('./imgs/506-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(900).duration(100)}><Image source={require('./imgs/628-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(1000).duration(100)}><Image source={require('./imgs/678-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>

                </View>
                <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 10 }}>

                    <Animated.View entering={FadeInDown.delay(1100).duration(100)}><Image source={require('./imgs/716-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(1200).duration(100)}><Image source={require('./imgs/960-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(1300).duration(100)}><Image source={require('./imgs/1013-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>

                </View>
                <View style={{ flexDirection: 'row', width: 380, justifyContent: 'space-between', marginTop: 10 }}>

                    <Animated.View entering={FadeInDown.delay(1400).duration(100)}><Image source={require('./imgs/376-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(1500).duration(100)}><Image source={require('./imgs/1061-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                    <Animated.View entering={FadeInDown.delay(1600).duration(100)}><Image source={require('./imgs/645-200x200.jpg')} style={{ width: 120, height: 120, borderRadius: 10 }} /></Animated.View>
                </View>
            </View>

            <Modal
                style={{ flex: 1 }}
                visible={isModalVisible}
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}
                animationType={'slide'}
            >
                <View style={{
                    flex: 1,
                    padding: 20,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(26,26,26,0.7)',
                }}>
                    <View style={{
                        height: 425,
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        alignItems: 'center'
                    }}>
                        <Image source={require('./imgs/camera.png')} style={{ width: 200, height: 200, borderRadius: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: '#1f2c3c' }}>Special Offer!</Text>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#1f2c3c', textAlign: 'center' }}>{`Book one photoshoot\nget one free!`}</Text>
                            <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#4795b5', borderColor: '#4795b5', borderRadius: 20, paddingVertical: 5, width: 220, marginTop: 10 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', textAlign: 'center' }}>Book photoshoot</Text>
                            </TouchableOpacity>
                            <View style={{ borderWidth: 1, borderColor: '#4795b5', borderRadius: 20, paddingVertical: 5, width: 220, marginTop: 10 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#4795b5', textAlign: 'center' }}>Skip</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
};
export { HomeScreen };