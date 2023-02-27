import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FlipInYRight } from 'react-native-reanimated';

const RecipeScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View>
                <FontAwesome name="chevron-left" size={30} color="#FFF" style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }} />
                <Image source={require('./cake.jpg')} style={{ width: width, height: 300, resizeMode: 'cover' }} />
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', fontSize: 30, position: 'absolute', bottom: 20, left: 80 }}>{`Chocolate Cake`}</Text>
            </View>
            <View style={{ padding: 12 }}>
                <ScrollView>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#353b48', fontSize: 30 }}>{`🍫 Ingredients`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 150ml sunflower oil`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 150ml sunflower oil, plus extra for the tin`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 175g self-raising flour`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 2 tbsp cocoa powder`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 1 tsp bicarbonate of soda`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 150g caster sugar`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 2 tbsp golden syrup`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 2 large eggs, lightly beaten`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`• 150ml semi-skimmed milk`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#353b48', fontSize: 15 }}>{`Heat the oven to 180C/160C fan/gas 4. Oil and line the base of two 18cm sandwich tins. Sieve the flour, cocoa powder and bicarbonate of soda into a bowl. Add the caster sugar and mix well. Make a well in the centre and add the golden syrup, eggs, sunflower oil and milk. Beat well with an electric whisk until smooth.`}</Text>

                </ScrollView>
            </View>

        </View>

    );
}

export { RecipeScreen };
