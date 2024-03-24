import { StyleSheet, Text, View } from 'react-native';
import Routes from './assets/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack Screens
import { ProductList } from './screens/ProductList';

// Tab Screens
import { ProductDetails } from './screens/ProductDatails';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.products}>
          <Stack.Screen name={Routes.products} component={ProductList} />
          <Stack.Screen name={Routes.details} component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
