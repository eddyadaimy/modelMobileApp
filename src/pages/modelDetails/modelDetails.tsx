import React, {Component} from 'react';
import {Accordion, Icon, Text, View} from 'native-base';
import {IState, Props} from './modelDetails.props';
import HeaderComponent from '../../layout/header/header';
import modelDetailsStyle from './modelDetails.style';
import {Image, TextInput, TouchableOpacity} from 'react-native';
export default class ModelDetails extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      productInfo: [
        {
          brand: 'Brand name',
          modelName: '01',
          modelType: 'xRp',
          cost: '25$',
        },
        {
          brand: 'Comments',
        },
      ],
    };
  }

  _renderHeader = (item: any, expanded: boolean) => {
    return (
      <View style={modelDetailsStyle.handlerView}>
        <View style={modelDetailsStyle.rowHeaderView}>
          <Text style={{marginLeft: 10}}>{item.brand}</Text>
          <Icon
            type="FontAwesome5"
            name={expanded ? 'angle-up' : 'angle-down'}
            style={modelDetailsStyle.iconExp}
          />
        </View>
      </View>
    );
  };

  _renderContent = (item: any, index: number) => {
    if (item.brand === 'Comments') {
      return (
        <View key={index}>
          <Text style={{textAlign: 'center'}}>Enter comment below</Text>
          <TextInput
            style={modelDetailsStyle.textArea}
            multiline={true}
            textAlignVertical="top"
            placeholder="Type text here..."
          />
        </View>
      );
    } else {
      return (
        <View style={modelDetailsStyle.mainRender}>
          <Text style={modelDetailsStyle.renderText}>{item.brand}</Text>
          <Text style={modelDetailsStyle.renderText}>{item.modelName}</Text>
          <Text style={modelDetailsStyle.renderText}>{item.modelType}</Text>
          <Text style={modelDetailsStyle.renderText}>{item.cost}</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={modelDetailsStyle.mainView}>
        <HeaderComponent text="Model Details" icon="" rightText="" />
        <View style={modelDetailsStyle.renderView}>
          <View style={modelDetailsStyle.view25}>
            <Image
              style={modelDetailsStyle.img}
              source={this.props.route.params.params.img}
            />
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              {this.props.route.params.params.title}
            </Text>
          </View>
          <Accordion
            dataArray={this.state.productInfo}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            expanded={[0, 1]}
          />
        </View>
      </View>
    );
  }
}
