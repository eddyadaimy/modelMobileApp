import React, {useEffect, useState} from 'react';
import {Header, Button, Icon, View, Text} from 'native-base';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import headerStyles from './header.styles';
import {Image, Linking} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import headerServices from './header.services';
import {TouchableOpacity} from 'react-native';
import {Props} from './header.props';

const HeaderComponent = (props: Props) => {
  const navigation = useNavigation();

  return (
    <Header style={{backgroundColor: '#DEDEDE', height: responsiveHeight(6)}}>
      <View style={headerStyles.mainView}>
        <View style={headerStyles.partStyle}>
          <View style={headerStyles.bckBtn}>
          <TouchableOpacity
            style={headerStyles.columnView}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              type="FontAwesome5"
              name="step-backward"
              style={headerStyles.iconStyle}
            />
            <View>
              <Text style={headerStyles.textStyle}>back</Text>
            </View>
          </TouchableOpacity>
          </View>
          <Text style={headerStyles.title}>{props.text}</Text>
        </View>
        <View style={headerStyles.iconViewStyle}>
          {props.icon ? (
            <Icon
              type="FontAwesome5"
              name={props.icon}
              style={[headerStyles.iconStyle, {color: 'green'}]}
            />
          ) : null}
          <View>
            <Text style={headerStyles.textStyle}>{props.rightText}</Text>
          </View>
        </View>
      </View>
    </Header>
  );
};

export default HeaderComponent;
