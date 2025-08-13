import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {navigationRef} from './src/navigation/RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigation />
    </NavigationContainer>
  );
}
