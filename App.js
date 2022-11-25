import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,
  useColorScheme, View
} from 'react-native';
import { Navigate } from './Navigate';
import { Provider } from 'react-redux';
import { store } from './bll/store';



export const App = () => {


  return (
    <Provider store={store}>
      <Navigate></Navigate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

});

