//https://github.com/ys-sherzad/Niche/blob/main/src/components/FadeIn.js
import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay
} from 'react-native-reanimated';

const timingConfigOpacity = {
    duration: 1300,
    easing: Easing.inOut(Easing.cubic)
};

const timingConfigTranslate = {
    duration: 900,
    easing: Easing.inOut(Easing.cubic)
};

const FadeIn = ({ children, delay = 0 }) => {
    const DELAY_TRANSLATE = delay;
    const DELAY_OPACITY = DELAY_TRANSLATE + 100;

    const opacity = useSharedValue(0);
    const animateY = useSharedValue(20);

    useEffect(() => {
        opacity.value = 1;
        animateY.value = 0;
    }, []);

    const animationStyle = useAnimatedStyle(() => {
        return {
            opacity: withDelay(DELAY_OPACITY,
                withTiming(opacity.value, timingConfigOpacity)),
            transform: [{
                translateY: withDelay(DELAY_TRANSLATE,
                    withTiming(animateY.value, timingConfigTranslate))
            }]
        };
    });

    return (
        <Animated.View style={animationStyle}>
            {children}
        </Animated.View>
    );
};

export default FadeIn;