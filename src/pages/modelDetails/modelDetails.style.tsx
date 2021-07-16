import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  renderView: {
    backgroundColor: '#EAEAEA',
    borderRadius: 30,
    height: responsiveHeight(86),
    width: responsiveWidth(90),
    alignSelf: 'center',
    margin: 10,
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: responsiveWidth(50),
    height: responsiveHeight(15),
    margin: 10,
    borderRadius: 30,
  },
  view25: {
    height: '25%',
    flexDirection:'column',
    justifyContent:'center'
  },
  handlerView:{
    height:responsiveHeight(6),
    backgroundColor:'#DEDEDE',
    flexDirection:'column',
    justifyContent:'center'
  },
  mainRender:{
    backgroundColor:'#EAEAEA',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: responsiveWidth(90),
    alignSelf: 'center',
    paddingBottom: '5%',
  },
  firstColumn:{
    width:'50%',padding:10
  },
  secColumn:{
    width:'50%',padding:10,position:'absolute',left:0
  },
  textArea:{
    height:responsiveHeight(20),
    backgroundColor:'white',
    width:responsiveWidth(80),
    borderRadius:30,
    alignSelf:'center',
    margin:10
  },
  renderText:{
    width: '50%', padding: 10
  },
  rowHeaderView:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconExp:{
    fontSize:responsiveFontSize(1.5),
    marginRight:10
  }
});
