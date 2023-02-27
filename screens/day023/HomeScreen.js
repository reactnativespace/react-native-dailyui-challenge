import React from 'react';
import { View, FlatList, Text, Image, useWindowDimensions, Animated } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const { width } = useWindowDimensions();

    const DATA = [{
        id: 1,
        title: 'Create a Profile',
        desctiption: 'Put your information and preferences in your application profile',
        image: require('./undraw_develop_app_re_bi4i.png')
    },
    {
        id: 2,
        title: 'Find New Friends',
        desctiption: 'Find new friends with whom you want to have a good time',
        image: require('./undraw_Swipe_profiles_re_tvqm.png')
    },
    {
        id: 3,
        title: 'Enjoy to the Fullest',
        desctiption: 'Enjoy with your new friends. And remember the fun never ends',
        image: require('./undraw_Having_fun_re_vj4h.png')
    }, {
        id: 4,
        title: 'Explore New Places',
        desctiption: 'Travel popular locations with your new friends and make memories',
        image: require('./undraw_Travelers_re_y25a.png')
    }];

    const slidesRef = React.useRef(null);

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const viewableItemsChanged = React.useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', }}>

            <View style={{ flex: 3 }}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    data={DATA}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, width: width, }}>
                            <Image source={item.image} style={{ flex: 0.7, width: width, resizeMode: 'contain' }} />
                            <View style={{ flex: 0.3 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#e53d49', fontSize: 28, marginBottom: 10, textAlign: 'center' }}>{item.title}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#ee767f', textAlign: 'center', paddingHorizontal: 64 }}>{item.desctiption}</Text>

                            </View>
                        </View>} />

            </View>


            <View style={{ flexDirection: 'row', height: 25, alignSelf: 'center' }}>
                {DATA.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                    const dotWidth = scrollX.interpolate({ inputRange, outputRange: [10, 20, 10], extrapolate: 'clamp' });

                    const opacity = scrollX.interpolate({ inputRange, outputRange: [0.3, 1, 0.3], extrapolate: 'clamp' });
                    return <Animated.View style={{ width: dotWidth, opacity: opacity, height: 10, borderRadius: 5, backgroundColor: '#e53d49', marginHorizontal: 8 }} key={i.toString()} />
                })}
            </View>
            <Text style={{ fontFamily: 'Poppins-Regular', color: '#ee767f', textAlign: 'center', marginBottom: 12 }}>{'SKIP'}</Text>

        </View>

    );
}

export { HomeScreen };
