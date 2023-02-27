import React from 'react';
import { View, TouchableOpacity, Text, Image, useWindowDimensions, Animated, ScrollView } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const { width } = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

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
                <ScrollView
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                >
                    <View style={{ flex: 1, width: width, padding: 20 }}></View>
                    <View style={{ flex: 1, width: width, padding: 20 }}>

                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#010101', fontSize: 50, }}>{'Select\nuser type'}</Text>

                        <TouchableOpacity style={{ backgroundColor: '#fdf4f5', borderRadius: 20, flexDirection: 'row', alignItems: 'center', borderColor: index === 0 ? '#1897ff' : '#FFF', borderWidth: 3 }} onPress={() => setIndex(0)}>
                            <Image source={require('./1.png')} style={{ width: 150, height: 150, marginRight: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 20, }}>{'Business'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18, marginTop: -5 }}>{'50 GB'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18, marginTop: -5 }}>{'$30/month'}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#fff8ef', borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginTop: 10, borderColor: index === 1 ? '#1897ff' : '#FFF', borderWidth: 3 }} onPress={() => setIndex(1)}>
                            <Image source={require('./2.png')} style={{ width: 150, height: 150, marginRight: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 20, }}>{'Regular'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18, marginTop: -5 }}>{'30 GB'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18, marginTop: -5 }}>{'$15/month'}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#4fcaae', borderRadius: 20, flexDirection: 'row', alignItems: 'center', marginTop: 10, borderColor: index === 2 ? '#1897ff' : '#FFF', borderWidth: 3 }} onPress={() => setIndex(2)}>
                            <Image source={require('./3.png')} style={{ width: 150, height: 150, marginRight: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 20, }}>{'Student'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#FFF', fontSize: 18, marginTop: -5 }}>{'20 GB'}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#FFF', fontSize: 18, marginTop: -5 }}>{'$9/month'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, width: width, padding: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#010101', fontSize: 50, }}>{'Start\nuploading!'}</Text>
                        <LottieView
                            autoPlay
                            style={{
                                zIndex:-1,
                                alignSelf: 'center',
                                width: 400,
                                height: 400,
                                backgroundColor: '#FFF',
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('./7877-uploading-to-cloud.json')}
                        />
                    </View>


                </ScrollView>


            </View>


            <View style={{ flexDirection: 'row', height: 25, alignSelf: 'center', marginBottom: 20 }}>
                {[...new Array(3)].map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                    const dotWidth = scrollX.interpolate({ inputRange, outputRange: [10, 20, 10], extrapolate: 'clamp' });

                    const opacity = scrollX.interpolate({ inputRange, outputRange: [0.3, 1, 0.3], extrapolate: 'clamp' });
                    return <Animated.View style={{ width: dotWidth, opacity: opacity, height: 10, borderRadius: 5, backgroundColor: '#1897ff', marginHorizontal: 8 }} key={i.toString()} />
                })}
            </View>
        </View>

    );
}

export { HomeScreen };
