import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator ,  createSwitchNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import LoadingScreen from './components/LoadingScreen';
import ProfileScreen from './components/ProfileScreen';


class Profile extends React.Component {
  
  static navigationOptions = {
    header: null
  }
  
  render() {
      return (
        <AppStackNavigator />
      );
  }
}
export default Profile;




const AppStackNavigator = createStackNavigator({
    Loading: LoadingScreen,
  Login: LoginScreen,
  ProfileScreen : ProfileScreen
})


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
