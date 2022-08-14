
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import IconButton from './components/IconButton';
import CatagoriesScreen from './screens/CatagoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'grey' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: 'lightgrey' }
        }} >
          <Stack.Screen name="Meals Categories" component={CatagoriesScreen} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={
            {
              headerRight: () => {
                function headerButtonPresshandler() {
                  console.log('Pressed')
                }
                return <IconButton icon='star' color='black' pressing={headerButtonPresshandler} />
              }
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
