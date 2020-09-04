import React from 'react';
import { Provider } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import store from './store/store';
import Navigator from './navigation/Navigator';

export default function App() {
  return (
    <LinearGradient colors={['#FF2222', '#1D167D', '#001589']} style={styles.gradient}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 15,
  },
});
