import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomePage from './screens/WelcomePage';

import App from '../App';
import SecondPage from './SecondPage';

const MainNavigator = createStackNavigator({
    Home: { screen: WelcomePage },
    First: { screen: App },
    Second: { screen: SecondPage }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;