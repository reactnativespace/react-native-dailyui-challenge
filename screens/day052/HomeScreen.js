import React, { useRef } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const opacity = useSharedValue(0);

    const rStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    });

    const animation = useRef(null);

    return (

        <Pressable style={styles.animationContainer} onPress={() => { opacity.value = 0; animation.current.play() }}>
            <LottieView
                autoPlay={true}
                onAnimationFinish={() => {
                    opacity.value = withTiming(1, { duration: 1000 })
                }}
                loop={false}
                ref={animation}
                style={{
                    width: 400,
                    height: 400,
                    backgroundColor: 'rgba(0,0,0,0)',
                }}
                source={require('./45722-rocket-loader.json')}
            />
            <Animated.Text style={[{ position: 'absolute', fontSize: 35, fontWeight: '800', color: '#2c3e50' }, rStyle]}>React Native Space</Animated.Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });
  

export { HomeScreen };
