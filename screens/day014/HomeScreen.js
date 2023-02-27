import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, TextInput, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
const HomeScreen = ({ navigation }) => {


    const [isPlaying, setIsPlaying] = React.useState(false);
    const [key, setKey] = React.useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#34495e', justifyContent: 'center', alignItems: 'center' }}>

            <CountdownCircleTimer
                key={key}
                isPlaying={isPlaying}
                duration={10}
                colors={['#27ae60', '#16a085', '#f39c12', '#d35400', '#c0392b']}
                colorsTime={[8, 6, 4, 2, 0]}
                size={380}
                strokeWidth={25}
                onComplete={() => setIsPlaying(false)}

            >
                {({ remainingTime }) => <Text style={{ fontSize: 100, fontFamily: 'Poppins-Regular', color: '#FFF' }}>{remainingTime == 10 ? '00:10' : '00:0' + remainingTime}</Text>
                }
            </CountdownCircleTimer>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 8, backgroundColor: '#ecf0f1', borderRadius: 10, width: 150, marginTop: 30 }}
                onPress={() => { setKey(prev => prev + 1); setIsPlaying(true) }}>
                <FontAwesome5 name={isPlaying ? 'pause' : 'play'} size={24} color="#34495e" style={{ marginBottom: 4, marginRight: 8 }} />
                <Text style={{ fontSize: 24, fontFamily: 'Poppins-Bold', color: '#34495e' }}>{isPlaying ? 'Pause' : 'Play'}</Text>

            </TouchableOpacity>


        </View>

    );
}

export { HomeScreen };