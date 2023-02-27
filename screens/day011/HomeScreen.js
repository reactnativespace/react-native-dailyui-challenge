import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeInDown, FadeOutUp } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {


    const [key, setKey] = React.useState(null);

    const modal = {
        SUCCESS: {
            text: 'Succes!',
            desciption: 'This is a success toast!',
            backgroundColor: '#2ecc71',
            icon: 'check-circle'
        },
        DANGER: {
            text: 'Danger!',
            desciption: 'This is a danger toast!',
            backgroundColor: '#e74c3c',
            icon: 'exclamation-circle'
        },
        INFO: {
            text: 'Info!',
            desciption: 'This is a info toast!',
            backgroundColor: '#3498db',
            icon: 'info-circle'
        },
        WARNING: {
            text: 'Warning!',
            desciption: 'This is a warning toast!',
            backgroundColor: '#f39c12',
            icon: 'exclamation-triangle'
        }
    }

    React.useEffect(() => {
        if (key) {

            const timer = setTimeout(() => {
                setKey(null);
            }, 1200);

            return () => clearTimeout(timer);

        }
    }, [key])

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12, justifyContent: 'center', alignItems: 'center' }}>

            {key !== null && (
                <Animated.View style={{
                    position: 'absolute', top: 12, right: 12,
                    width: '100%', height: 100, backgroundColor: modal[key].backgroundColor, borderRadius: 10,
                    padding: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
                    entering={FadeInUp.delay(200)}
                    exiting={FadeOutUp}
                >

                    <FontAwesome5 name={modal[key].icon} size={40} color="#FFF" />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>{modal[key].text}</Text>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFF', marginTop: -5 }}>{modal[key].desciption}</Text>
                    </View>

                </Animated.View >

            )}



            <TouchableOpacity style={{ width: 200, paddingVertical: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2ecc71', borderRadius: 10, marginBottom: 12 }} onPress={() => setKey('SUCCESS')}>
                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Succes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 200, paddingVertical: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e74c3c', borderRadius: 10, marginBottom: 12 }} onPress={() => setKey('DANGER')}>
                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Danger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 200, paddingVertical: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3498db', borderRadius: 10, marginBottom: 12 }} onPress={() => setKey('INFO')}>
                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 200, paddingVertical: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f39c12', borderRadius: 10, marginBottom: 12 }} onPress={() =>  setKey('WARNING')}>
                <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: '#FFF' }}>Warning</Text>
            </TouchableOpacity>

        </View>

    );
}

export { HomeScreen };