import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

class LoadingScreen extends React.Component {
  
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
            <ActivityIndicator size="large" />
          </View>
      );
  }
}
export default LoadingScreen;
