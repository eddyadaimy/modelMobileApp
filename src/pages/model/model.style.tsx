import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  mainView: {
    flex: 1,
  },
  input: {
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  inputView: {
    height: responsiveHeight(7),
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    margin: 10,
    borderRadius: 30,
  },
  heading: {
    height: responsiveHeight(14),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rows: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: responsiveWidth(90),
    alignSelf: 'center',
    paddingBottom: '5%',
  },
  imgView: {
    width: '50%',
  },
});
