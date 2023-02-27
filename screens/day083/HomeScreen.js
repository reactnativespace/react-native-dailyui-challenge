import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeInDown, FadeOutUp, useAnimatedStyle, interpolate, interpolateColor, useSharedValue, useDerivedValue, withTiming } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { isLoading } from 'expo-font';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [isDark, setIsDark] = React.useState(true);

    const progress = useDerivedValue(() => {
        return isDark ? withTiming(1) : withTiming(0);
    }, [isDark])

    const rStyle = useAnimatedStyle(() => {

        const backgroundColor = interpolateColor(progress.value, [0, 1], [
            '#212736',
            '#678be5',
        ]);

        return { backgroundColor }
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsDark(current => !current);
        }, 2300);

        return () => clearInterval(interval);
    }, []);

    return (
        <Animated.View style={[{ flex: 1 }, rStyle]}>


            <LottieView

                autoPlay={true}
                style={{
                    width: 600,
                    height: 600,
                    backgroundColor: 'transparent',
                    alignSelf: 'center'
                }}
                speed={1}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('./52869-day-and-night-switch-button.json')}
            />

        </Animated.View>
    );
}

export { HomeScreen };
