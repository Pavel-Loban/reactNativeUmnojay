import React from 'react';
import {SafeAreaView,ScrollView,Image,StatusBar,TouchableOpacity,StyleSheet,Text,
useColorScheme,View} from 'react-native';
import {Navigate} from './Navigate';
import backSpace from '../../assets/images/backspace.png';
import {COLORS} from '../../assets/styles'


export const ArrowButton = (props) => {

    const {onPress, direction} = props;

  return (
        <TouchableOpacity onPress={onPress} style={styles.wrapper} >
            <Image
        style={styles.logo}
        source={direction}
      />
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height:50,
  },
  wrapper: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLORS.yellow,
    width: 70,
    height: 120,
    borderRadius: 20,
  },


});
