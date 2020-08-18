import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Category from './components/Category';
import MyHome from './components/MyHome';
import Tag from './components/Tag';


const { height, width } = Dimensions.get('window')

class Home extends React.Component {
    UNSAFE_componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 50 + StatusBar.currentHeight
        }
        
        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0,50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity  = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight,this.startHeaderHeight],
            outputRange: [0,1],
            extrapolate: 'clamp'
        })

        this.animatedTagtop  = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight,this.startHeaderHeight],
            outputRange: [-30,10],
            extrapolate: 'clamp'
        })

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <MaterialIcons name="search" size={24} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search Book, Authors"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                        <Animated.View style={{
                            flexDirection: 'row',
                            marginHorizontal: 20,
                            position: 'relative',
                            top: this.animatedTagtop,
                            opacity: this.animatedOpacity
                        }}>
                       <Tag 
                       name="Guests"
                       />
                       <Tag
                       name="Dates"
                       />
                        </Animated.View>
                    </Animated.View>

                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={
                            Animated.event([
                                { nativeEvent: { contentOffset:{y : this.scrollY} }}
                            ])
                        }
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you find, Amit?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/favicon.png')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../assets/favicon.png')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../assets/favicon.png')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/favicon.png')}
                                    />

                                </View>
                            </View>
                        </View>

 <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Books you will defently love
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <MyHome width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                    imageUri={require('../assets/favicon.png')}
                                />
                                <MyHome width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                    imageUri={require('../assets/favicon.png')}
                                />
                                <MyHome width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                    imageUri={require('../assets/favicon.png')}
                                />


                            </View>
                        </View>
             
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
