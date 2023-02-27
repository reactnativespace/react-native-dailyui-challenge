import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Video, AVPlaybackStatus } from 'expo-av';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const video = React.useRef(null);
    const [index, setIndex] = React.useState(0);
    const [status, setStatus] = React.useState({});

    const DATA = [{
        video: require('./video.mp4'),
        description: 'A man walking along the road',
        credit: 'PENGFEI WU',
        avatar: require('./avatar.jpg')
    },
    {
        video: require('./video2.mp4'),
        description: 'A girl with halloween costume and flowers',
        credit: 'Mikhail Nilov',
        avatar: require('./avatar2.jpg')
    },
    {
        video: require('./video3.mp4'),
        description: 'Chocolate Lava Cake',
        credit: 'Peggy Anke',
        avatar: require('./avatar3.jpg')
    }]

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Video
                ref={video}
                style={{ width: width, height: 700, backgroundColor: '#000', alignSelf: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, marginTop: -200 }}
                source={DATA[index].video}
                resizeMode='stretch'
                isLooping={true}
                useNativeControls={false}
                shouldPlay={true}
                isMuted={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}

            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 20 }}>

                <TouchableOpacity>
                    <FontAwesome name="step-backward" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderRadius: 35 }}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                    <FontAwesome name={status.isPlaying ? "pause" : "play"} size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex(current => current + 1)}>
                    <FontAwesome name="step-forward" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18 }}>Description</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>{DATA[index].description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={DATA[index].avatar} style={{ width: 40, height: 40, borderRadius: 25 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, marginLeft: 10 }}>{DATA[index].credit}</Text>
                </View>
            </View>

        </View >

    );
}

export { HomeScreen };
