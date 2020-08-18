import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoginScreen extends React.Component {
  
    static navigationOptions = {
        header: null
    }

    render() {
      return (
          <View style={{
              flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
          }}>
              <Text>LoginScreen</Text>
          </View>
      );
  }
}
export default LoginScreen;



