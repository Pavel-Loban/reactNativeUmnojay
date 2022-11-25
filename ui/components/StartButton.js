import React from 'react';
import {SafeAreaView,ScrollView,Image,StatusBar,TouchableOpacity,StyleSheet,Text,
useColorScheme,View} from 'react-native';
import {Navigate} from './Navigate';
import test from '../../assets/images/test.png';
import book from '../../assets/images/book.png';
import settings from '../../assets/images/settings.png';
import rocket from '../../assets/images/rocket.png';
import {COLORS} from '../../assets/styles'


export const StartButton = (props) => {

    const {title,icon, onPress} = props;

    const findIcon = () => {
        if(icon === 'test') {
            return test;
        }else if(icon === 'book'){
            return book;
        }else if(icon === 'settings'){
            return settings;
        }else if(icon === 'rocket'){
          return rocket;
      }
    }

  return (
        <TouchableOpacity onPress={onPress} style={styles.wrapper} >
            <Image
        style={styles.logo}
        source={findIcon()}
      />
      {/* <View style={styles.titleBlock}> */}
      <Text style={styles.title}>{title}</Text>
      {/* </View> */}


        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    width: 50,
    height:50,
  },
  wrapper: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: COLORS.yellow,
    width: 250,
    height:70,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center',
    width:190,
  },
  titleBlock: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }

});
