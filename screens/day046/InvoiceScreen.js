import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const InvoiceScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 18 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#010101" />
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 20, marginTop: 4, marginLeft: 30 }}>{`Create new invoice`}</Text>
            </View>

            <Animated.View entering={FadeInDown.delay(500).duration(500)}>

                <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 18, marginTop: 20 }}>{`Send to`}</Text>

                <View style={{ backgroundColor: '#6f6cfd', padding: 20, borderRadius: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#fefeff', fontSize: 18 }}>{`UBX Financial Institution`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#fefeff', fontSize: 16 }}>{`90131 Central Avenue\nChino, CA 91710`}</Text>
                    </View>
                    <View style={{ backgroundColor: '#5e5be2', padding: 10, borderRadius: 30 }}>
                        <MaterialCommunityIcons name="close" size={24} color="#fefeff" />
                    </View>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 18 }}>{`Invoice Details`}</Text>
                    <View style={{ marginLeft: 15, borderWidth: 1, paddingVertical: 3, paddingHorizontal: 8, borderRadius: 50, borderColor: '#6f6cfd' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#6f6cfd', fontSize: 16 }}>{`+ Add item`}</Text>
                    </View>
                </View>

                <View style={{ marginTop: 20, backgroundColor: '#f9fbfc', padding: 10, borderRadius: 20 }}>


                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                        <View style={{ width: 60, height: 60, backgroundColor: '#f1f5fd', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Image source={require('./handbag.png')} style={{ width: 45, height: 45 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18 }}>{`Handbag`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 14, marginTop: -5 }}>{`Leather Shoulder Handbag`}</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18 }}>{`$16`}</Text>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                        <View style={{ width: 60, height: 60, backgroundColor: '#f1f5fd', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Image source={require('./boot.png')} style={{ width: 45, height: 45 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18 }}>{`Boots`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 14, marginTop: -5 }}>{`Waterproof Winter Boots`}</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18 }}>{`$54`}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                        <View style={{ width: 60, height: 60, backgroundColor: '#f1f5fd', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Image source={require('./jacket.png')} style={{ width: 45, height: 45 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18 }}>{`Jacket`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 14, marginTop: -5 }}>{`Hooded Military Jacket`}</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#010101', fontSize: 18 }}>{`$100`}</Text>
                    </View>

                </View>

                <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 18 }}>{`Invoice Details`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#010101', fontSize: 25 }}>{`$170`}</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#f9fbfc', paddingVertical: 8, borderRadius: 20, marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#6f6cfd', fontSize: 18 }}>{`Download PDF`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#6f6cfd', paddingVertical: 8, borderRadius: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#fefeff', fontSize: 18 }}>{`Send Invoice`}</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>

    );
}

export { InvoiceScreen };
