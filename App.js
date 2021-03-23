import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'
import { NavigationContainer } from '@react-navigation/native'
import Toast from "react-native-toast-message";
import { Provider } from 'react-redux';
import store from './Redux/store';
import Main from './Navigator/Main';

import Auth from "./Context/store/Auth";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>

          <Header />
          {/* <ProductContainer /> */}
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>

    </Auth>
  );
}

