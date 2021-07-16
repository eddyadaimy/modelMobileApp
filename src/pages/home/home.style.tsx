import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
 mainView:{
   flex:1,
   flexDirection:'column',
   alignSelf:'center'
 },
 buttonView:{
   width:responsiveWidth(74),
   height:responsiveHeight(7),
   backgroundColor:"#EAEAEA",
   borderRadius:20,
   flexDirection:'row',
   alignItems:"center",
   margin:20
 },
 innerBtn:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:"center",
 },
 icon:{
   color:'green',
   position:'absolute',
   right:0,
   margin:20
 },
 mainIcon:{
   marginLeft:20
 },
 text:{
   fontWeight:'bold',
   marginLeft:20
  }
});
