import React from 'react';
import { View, FlatList, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    const text = 'mail@reactnativespace.com';

    const { width } = useWindowDimensions();
    const animation = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const [input, setInput] = React.useState('');

    React.useEffect(() => {

        const delay = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                if (index <= text.length - 1) {
                    index = index + 1;
                    setInput(text.substring(0, index));
                }
                else {
                    clearInterval(interval);
                }
            }, 120)
        }, 1000)


        return () => {
            clearInterval(interval);
            clearTimeout(delay);
        }

    }, []);


    const subs = () => {
        setVisible(prevState => !prevState);

        setTimeout(() => {
            animation.current?.reset();
            animation.current?.play();
        }, 50)

    }


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 12, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontFamily: 'Poppins-Medium', color: '#8b969d', fontSize: 25, letterSpacing: 8 }}>{'SUBSCRIBE'}</Text>

            <Text style={{ fontFamily: 'Poppins-Medium', color: '#8b969d', fontSize: 18, letterSpacing: 8 }}>{'GET THE GOOD STUFF'}</Text>


            {!visible && <Image source={require('./undraw_Newsletter_re_wrob.png')} style={{ height: 300, width: 320, resizeMode: 'center', }} />}

            {visible && <LottieView
                speed={0.5}
                ref={animation}
                autoPlay={false}
                style={{
                    width: 300,
                    height: 300,
                    backgroundColor: '#FFF',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('./36195-send-confirmation.json')}
            />}

            <View style={{ width: '80%', borderBottomWidth: 1, borderColor: '#8b969d', marginBottom: 20 }}>
                <TextInput
                    value={input}
                    placeholder='ENTER YOUR EMAIL'
                    placeholderTextColor={'#8b969d'}
                    fontSize={15}
                    style={{ fontFamily: 'Poppins-Regular', color: '#8b969d', height: 80, textAlign: 'center', letterSpacing: 2 }} />
            </View>


            <TouchableOpacity style={{
                padding: 20, backgroundColor: '#5aa4ff', borderRadius: 50, shadowColor: "#5aa4ff",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.30,

                elevation: 10,
            }}
                onPress={() => subs()}>
                <AntDesign name="arrowright" size={24} color="#FFF" />
            </TouchableOpacity>


            <Text style={{ fontFamily: 'Poppins-Medium', color: '#fad58e', fontSize: 14, letterSpacing: 5, marginTop: 25 }}>{'PRIVACY POLICY'}</Text>

        </View>

    );
}

export { HomeScreen };
