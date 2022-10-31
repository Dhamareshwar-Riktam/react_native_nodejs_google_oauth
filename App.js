import React, { useState, useEffect } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  const handleOpenURL = ({ url }) => {
    if (url.indexOf("?id") !== -1) {
      if (url)
        setData(url);
    }
  };

  useEffect(() => {
    // Your code here
    Linking.addEventListener('url', handleOpenURL);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text>
            {data && data}
          </Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://a4fd-49-205-104-217.in.ngrok.io/api/auth/google')}
            >
              <Text style={styles.buttonText}>
                {data ? "You are connected" : 'Connect with Google'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    margin: 30,
    backgroundColor: '#1f5c9e',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});