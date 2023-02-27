import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Modal, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    const [isSelected1, setIsSelected1] = React.useState(false);
    const [isSelected2, setIsSelected2] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>

            <View style={{
                padding: 20, backgroundColor: '#FFF', paddingBottom: 20, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                zIndex: 2
            }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#3d3d3d' }}>Choose your dates:</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#adadad' }}>Find a date when to go and when to come back.</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>S</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>M</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>T</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>W</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>T</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>F</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, textAlign: 'center', color: '#adadad' }}>S</Text>
                    </View>

                </View>
            </View>

            <ScrollView style={{ flex: 1, padding: 20, marginTop: 0 }} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#3d3d3d' }}>July 2023</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>25</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>26</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>27</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>28</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>29</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>30</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>1</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>2</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>3</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>4</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>5</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>6</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>7</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>8</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>9</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>10</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>11</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: (isSelected1 && isSelected2) ? '#e9e3fe' : '#f6f6f6' }}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isSelected1 ? '#7f61fe' : '#f6f6f6', borderRadius: 60 }} onPress={() => setIsSelected1(prev => !prev)}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: isSelected1 ? '#FFF' : '#3d3d3d' }}>12</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: (isSelected1 && isSelected2) ? '#e9e3fe' : '#f6f6f6' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>13</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: (isSelected1 && isSelected2) ? '#e9e3fe' : '#f6f6f6' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>14</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: (isSelected1 && isSelected2) ? '#e9e3fe' : '#f6f6f6' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>15</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: (isSelected1 && isSelected2) ? '#fde5f0' : '#f6f6f6' }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>16</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>17</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>18</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>19</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>20</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>21</Text>
                        </View>

                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isSelected2 ? '#ff60b1' : '#f6f6f6', borderRadius: 60 }} onPress={() => setIsSelected2(prev => !prev)}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: isSelected2 ? '#FFF' : '#3d3d3d' }}>22</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>23</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>24</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>25</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>26</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>27</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>28</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>29</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>30</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>31</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>1</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>2</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>3</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>4</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>5</Text>
                        </View>

                    </View>

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#3d3d3d' }}>August 2023</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>30</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>31</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>1</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>2</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>3</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>4</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>5</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>6</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>7</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>8</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>9</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>10</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>11</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>12</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>13</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>14</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>15</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>16</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>17</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>18</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>19</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>20</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>21</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>22</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>23</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>24</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>25</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>26</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>27</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>28</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>29</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>30</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>31</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>1</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>2</Text>
                        </View>

                    </View>


                </View>

                <View style={{ marginTop: 10, marginBottom: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#3d3d3d' }}>September 2023</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>27</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>28</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>29</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>30</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#adadad' }}>31</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>1</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>2</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>3</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>4</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>5</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>6</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>7</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>8</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>9</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>10</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>11</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>12</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>13</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>14</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>15</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>16</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>17</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>18</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>19</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>20</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>21</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>22</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>23</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>24</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>25</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>26</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>27</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>28</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>29</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#3d3d3d' }}>30</Text>
                        </View>

                    </View>

                </View>
            </ScrollView>
            <Modal
                style={{ flex: 1 }}
                visible={isSelected1 && isSelected2}
                transparent={true}
                onRequestClose={() => {setIsSelected1(false); setIsSelected2(false);}}
                animationType={'fade'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <View style={{
                        height: 180,
                        backgroundColor: '#fff',
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        paddingHorizontal: 25,
                        paddingVertical: 25,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 24,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#7f61fe', width: 120, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#FFF' }}>July 12</Text>
                            </View>
                            <AntDesign name="arrowright" size={24} color="#adadad" />
                            <View style={{ backgroundColor: '#ff60b1', width: 120, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'center', color: '#FFF' }}>July 22</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ width: 320, alignSelf: 'center', height: 60, borderRadius: 10, marginTop: 20 }}>
                            <LinearGradient
                                style={{ height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 1 }}
                                colors={['#7f61fe', '#ff60b1']}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, textAlign: 'center', color: '#FFF' }}>Proceed</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export { HomeScreen };
