import React, {Component} from 'react';
import {Icon, Text, View} from 'native-base';
import {IState, Props} from './home.props';
import HeaderComponent from '../../layout/header/header';
import homeStyle from './home.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class Home extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      buttons: [
        {
          icon: 'box',
          text: 'Asset Inventory',
          url: 'model',
        },
        {
          icon: 'user-alt',
          text: 'Model',
          url: 'model',
        },
        {
          icon: 'user-lock',
          text: 'Model',
          url: 'model',
        },
      ],
    };
  }

  homeButtons() {
    return this.state.buttons.map((element, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={homeStyle.buttonView}
          onPress={() => {
            this.props.navigation.navigate(element.url);
          }}>
          <View style={homeStyle.innerBtn}>
            <Icon
              type="FontAwesome5"
              name={element.icon}
              style={homeStyle.mainIcon}
            />
            <Text style={homeStyle.text}>{element.text}</Text>
          </View>
          <Icon type="FontAwesome5" name="caret-right" style={homeStyle.icon} />
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <>
        <HeaderComponent text="Picture" icon="check-circle" rightText="process" />
        <View style={homeStyle.mainView}>{this.homeButtons()}</View>
      </>
    );
  }
}
