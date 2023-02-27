import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { isLoading } from 'expo-font';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const animation = React.useRef(null);
    const animation2 = React.useRef(null);

    const [loading, setIsLoading] = React.useState(false);

    //#a48be6
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(164, 139, 230, 0.3)', padding: 20 }}>

            {loading == true &&

                <LottieView
                    key={loading}
                    autoPlay={true}
                    ref={animation2}
                    style={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'transparent',
                        alignSelf: 'center'
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('./86145-email-paper-plane.json')}
                />

            }

            {loading == false &&

                <>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'transparent',
                            alignSelf: 'center'
                        }}
                        // Find more Lottie files at https://lottiefiles.com/featured
                        source={require('./93577-contact.json')}
                    />

                    <Animated.View style={{ flex: 1 }} entering={FadeInDown.delay(300).duration(300)}>

                        <View style={{ borderBottomColor: '#4500ac', borderBottomWidth: 1, paddingVertical: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: '#4500ac' }}>Name</Text>
                            <TextInput placeholder='' value='Josée Montagne' style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#4500ac' }} />
                        </View>

                        <View style={{ borderBottomColor: '#4500ac', borderBottomWidth: 1, paddingVertical: 5, marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: '#4500ac' }}>Email Address</Text>
                            <TextInput placeholder='' value='jo.montagne@example.com' style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#4500ac' }} />
                        </View>

                        <View style={{ borderBottomColor: '#4500ac', borderBottomWidth: 1, paddingVertical: 5, marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: '#4500ac' }}>Subject</Text>
                            <TextInput placeholder='' value='Password Issues' style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#4500ac' }} />
                        </View>

                        <View style={{ borderBottomColor: '#4500ac', borderBottomWidth: 1, paddingVertical: 5, marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 10, color: '#4500ac' }}>Message</Text>
                            <TextInput placeholder='' value='Hello, I am not able to change my password. When I try, I got an error about that password is expired. My user name is frmonta02. Thanks, Montagne.' multiline={true} style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#4500ac', height: 100, }} />
                        </View>

                        <View style={{ flex: 1 }} />

                        <TouchableOpacity style={{ padding: 5, height: 50, backgroundColor: '#a48be6', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={() => {
                            setIsLoading(true);
                        }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#4500ac' }}>Submit</Text>
                        </TouchableOpacity>
                    </Animated.View>


                </>}




        </View>
    );
}

export { HomeScreen };
