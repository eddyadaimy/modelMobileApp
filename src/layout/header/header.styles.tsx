import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Title, View} from 'native-base';
import React from 'react';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconViewStyle: {
    width: '10%',
    justifyContent: 'center',
  },
  iconStyle: {
    color: 'black',
    fontSize: responsiveScreenFontSize(2.7),
    alignSelf:'center',
  },
  columnView:{
    flexDirection: 'column',
    justifyContent:'space-between'
  },
  textStyle:{
    fontSize:responsiveScreenFontSize(1),
    fontWeight:'bold',
    textAlign:'center'
  },
  title:{
    fontSize:responsiveScreenFontSize(3),
    fontWeight:'bold',
    alignSelf:'center',
    paddingLeft:"5%"
  },
  partStyle:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  bckBtn:{
    flexDirection:'column',
    justifyContent:'center',
  }
});
