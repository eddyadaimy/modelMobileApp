import React, {Component} from 'react';
import {Icon, Input, Text, View} from 'native-base';
import {IState, Props} from './model.props';
import HeaderComponent from '../../layout/header/header';
import modelStyle from './model.style';
import {Image, TouchableOpacity} from 'react-native';
export default class Model extends Component<Props, IState> {
  initDataModel = [
    {
      title: 'printer',
      img: require('../../assets/printer.png'),
    },
    {
      title: 'tv',
      img: require('../../assets/tv.png'),
    },
    {
      title: 'laptop',
      img: require('../../assets/laptop.png')
    },
    {
      title: 'Ink',
      img: require('../../assets/ink.png')
    },
  ];
  constructor(props: Props) {
    super(props);
    this.state = {
      modelData: this.initDataModel,
    };
  }

  filterArray = (value: string) => {
    let filteredArray: any[] = [];
    this.state.modelData.filter((item: any) => {
      const filterTextToLowerCase = value
        .toLowerCase()
        .replace(/[.,*+?^${}()|[\]\\<>\/]/g, '@');
      const matchTo = filterTextToLowerCase.replace(/@/g, '').trim();
      if (item.title.toLowerCase().match(matchTo)) {
        filteredArray.push(item);
      }
    });
    if (filteredArray.length > 0) {
      this.setState({modelData: filteredArray});
    }
    if (!value) {
      this.setState({modelData: this.initDataModel});
    }
  };

  imgView = () => {
    return (
      <View style={modelStyle.rows}>
        {this.state.modelData.map((element, index) => {
          return (
            <TouchableOpacity style={modelStyle.imgView} key={index}
            onPress={() => {
              this.props.navigation.navigate('modelDetails', {
                params: element ,
              });
            }}>
              <Image
                style={modelStyle.img}
                source={element.img}
              />
              <Text style={{textAlign: 'center'}}>{element.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <View style={modelStyle.mainView}>
        <HeaderComponent text="Model" icon="" rightText="" />
        <View style={modelStyle.heading}>
          <View style={modelStyle.inputView}>
            <Input
              style={modelStyle.input}
              placeholder="type to search..."
              onChangeText={(userText) => this.filterArray(userText)}
            />
          </View>
        </View>
        {this.imgView()}
      </View>
    );
  }
}
