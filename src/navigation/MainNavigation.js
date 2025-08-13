import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../src/screens/HomeScreen';
import BrandDetailScreen from '../../src/screens/BrandDetailScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrandDetail"
        component={BrandDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
