import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../assets/Routes';

import { ProductImage } from '../components/Product/ProductImage';
import { ProductGeral } from '../components/Product/ProductGeral';

export function ProductDetails({ route }) {
    const { product } = route.params;

    const Tab = createBottomTabNavigator();

    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name={Routes.productGeral}  component={ProductGeral} initialParams={{ product: product }} />
                <Tab.Screen name={Routes.images}  component={ProductImage} initialParams={{ product: product }} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
