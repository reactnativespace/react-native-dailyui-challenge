import React from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {

    const subjectText = 'Updating password';
    const emailText = 'info@reactnativespace.com';
    const messageText = 'Hello! Cant change my password, could you please help me? Thanks ❤';


    const [subject, setSubject] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');


    React.useEffect(() => {

        const delay = setTimeout(() => {
            let index = 0;

            const interval = setInterval(() => {
                if (index <= subjectText.length - 1) {
                    index = index + 1;
                    setSubject(subjectText.substring(0, index));

                }
                else {
                    clearInterval(interval);
                }
            }, 100);

        }, 1000);

        const delay2 = setTimeout(() => {
            let index = 0;

            const interval2 = setInterval(() => {
                if (index <= emailText.length - 1) {
                    index = index + 1;
                    setEmail(emailText.substring(0, index));
                }
                else {
                    clearInterval(interval2);
                }
            }, 100);

        }, 1000);

        const delay3 = setTimeout(() => {
            let index = 0;

            const interval3 = setInterval(() => {
                if (index <= messageText.length - 1) {
                    index = index + 1;
                    setMessage(messageText.substring(0, index));
                }
                else {
                    clearInterval(interval3);
                }
            }, 100);

        }, 1000);


        return () => {
            clearTimeout(delay);
            clearTimeout(delay2);
            clearTimeout(delay3);

        }

    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="arrowleft" size={24} color="#2c2c2c" style={{ marginBottom: 5 }} />
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#2c2c2c', fontSize: 20, marginLeft: 20 }}>{'Contact Us'}</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <LottieView
                    autoPlay={true}
                    style={{
                        width: 250,
                        height: 250,
                        backgroundColor: '#FFF',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('./94599-contact-us.json')}
                />

                <Text style={{ fontFamily: 'Poppins-Medium', color: '#2c2c2c', fontSize: 25, marginTop: 0 }}>{'How can we help you?'}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: '#2c2c2c', fontSize: 16, textAlign: 'center', marginTop: 20 }}>{'It looks like you have problems with our system. We are here to help you, so, please get in touch with us.'}</Text>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <TextInput value={subject} placeholder='Subject' placeholderTextColor='rgba(44, 44, 44, 0.5)' style={{ fontFamily: 'Poppins-Medium', color: '#2c2c2c', borderWidth: 1, borderColor: '#2c2c2c', padding: 10, borderRadius: 10 }} />
                    <TextInput value={email} placeholder='Email' placeholderTextColor='rgba(44, 44, 44, 0.5)' style={{ fontFamily: 'Poppins-Medium', color: '#2c2c2c', borderWidth: 1, borderColor: '#2c2c2c', padding: 10, borderRadius: 10, marginTop: 10 }} />
                    <TextInput value={message} placeholder='Type your message' placeholderTextColor='rgba(44, 44, 44, 0.5)' multiline={true} numberOfLines={5} style={{ fontFamily: 'Poppins-Medium', color: '#2c2c2c', borderWidth: 1, borderColor: '#2c2c2c', padding: 10, borderRadius: 10, marginTop: 10 }} />
                    <TouchableOpacity style={{ backgroundColor: '#0066ff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingVertical: 5, marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16 }}>{'Send'}</Text>
                    </TouchableOpacity>
                </View>


            </View>



        </View>

    );
}

export { HomeScreen };
