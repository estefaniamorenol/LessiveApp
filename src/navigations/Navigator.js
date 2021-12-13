import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Pickup from '../screens/Pickup';
import Bus from '../screens/Bus';

const stackNavigatorOptions = {
    headerShown : false
}



const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
    Pickup:{screen:Pickup},
    Bus:{screen:Bus},
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)