import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import FadeIn from '../../components/FadeIn';
import { FontAwesome5 } from '@expo/vector-icons';

const SignUpScreen = () => {
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#e1e4ee', alignItems: 'center' }}>

            <FadeIn delay={300}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#353045', textAlign: 'center', marginTop: 40 }}>{`Hello!`}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, color: '#353045', textAlign: 'center', }}>{`Create an account!`}</Text>
            </FadeIn>

            <FadeIn delay={500}>
                <View style={{ width: 350, marginTop: 50 }}>
                    <TextInput placeholder='Enter username' placeholderTextColor={'#bdb8c0'} fontSize={16} style={{ fontFamily: 'Poppins-Regular', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#f8f6f9', borderRadius: 10 }} />
                    <View>
                        <TextInput placeholder='Password' placeholderTextColor={'#bdb8c0'} fontSize={16} style={{ fontFamily: 'Poppins-Regular', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#f8f6f9', borderRadius: 10, marginTop: 10 }} />
                        <FontAwesome5 name="eye-slash" size={24} color={'#bdb8c0'} style={{ position: 'absolute', right: 10, top: 25 }} />
                    </View>
                </View>


                <TouchableOpacity style={{ backgroundColor: '#fd6b68', width: 350, borderRadius: 10, marginTop: 50, paddingVertical: 15 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, color: '#FFF', textAlign: 'center', }}>{`Sign Up`}</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#353045', textAlign: 'center', marginTop: 25 }}>{`Already have an account?`}</Text>
                </TouchableOpacity>
            </FadeIn>


            <FadeIn delay={800}>
                <View style={{ flexDirection: 'row', width: 350, justifyContent: 'space-evenly', marginTop: 100 }}>

                    <TouchableOpacity style={{ width: 80, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e1e4ee', borderRadius: 10, borderWidth: 1, borderColor: '#FFF' }}>
                        <FontAwesome5 name={'facebook'} size={24} color={'#353045'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 80, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e1e4ee', borderRadius: 10, borderWidth: 1, borderColor: '#FFF' }}>
                        <FontAwesome5 name={'apple'} size={24} color={'#353045'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 80, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e1e4ee', borderRadius: 10, borderWidth: 1, borderColor: '#FFF' }}>
                        <FontAwesome5 name={'google'} size={24} color={'#353045'} />
                    </TouchableOpacity>
                </View>
            </FadeIn>

        </View>
    );
}

export { SignUpScreen };