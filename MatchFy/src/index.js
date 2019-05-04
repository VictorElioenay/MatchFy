import Login from './Login/index';
import Coords from './Coords/index';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Login: Login,
  Coords:Coords,
});

export default { StackNavigator };