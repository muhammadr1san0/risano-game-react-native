import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import Login from '../../screens/login/Login'
import Register from '../../screens/register/Register'
import Game from '../../screens/game/Game'
import Leaderboards from '../../screens/leaderboards/Leaderboards'
import CustomsDrawer from '../../components/CustomsDrawer'
import Home from '../../screens/home/Home'

const AppNavigation = createStackNavigator({
    Login,
    Register,
    Game,
    Leaderboards,
    Home
}, {
        initialRouteName: 'Home',
        headerMode: 'none'
    })

const DrawerNavigation = createDrawerNavigator({
    Menu: {
        screen: AppNavigation
    },
    Login,
    Register,
    Leaderboards
}, {
        // drawerPosition: 'left',
        // contentComponent: CustomDrawerContentComponent,
        // drawerOpenRoute: 'DrawerOpen',
        // drawerCloseRoute: 'DrawerClose',
        // drawerToggleRoute: 'DrawerToggle',
        contentComponent: CustomsDrawer,

    })
export default createAppContainer(DrawerNavigation)