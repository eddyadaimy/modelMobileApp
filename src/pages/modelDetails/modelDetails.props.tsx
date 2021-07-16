import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  route: any;
  navigation: NavigationScreenProp<NavigationState>;
}

export interface IState {
  productInfo: any []
}
