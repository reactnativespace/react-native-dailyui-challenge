import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const animation = React.useRef(null);
    const [index, setIndex] = React.useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(current => current - 1);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (

        <Pressable style={{ flex: 1, backgroundColor: '#000', }} onPress={()=> setIndex(2)}>
            <LottieView
                autoPlay={true}
                onAnimationFinish={() => {
                    //opacity.value = withTiming(1, { duration: 1000 })
                }}
                loop={true}
                ref={animation}
                style={{
                    width: 600,
                    height: 600,
                    backgroundColor: 'rgba(0,0,0,0)',
                    marginLeft: 70 * index,
                    marginTop: 30
                }}
                source={require('./7177-shapeso-animated-icons-vol-1.json')}
            />

        </Pressable >
    );
}

export { HomeScreen };
