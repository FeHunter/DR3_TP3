import { View, Text, Image, StyleSheet } from 'react-native';

export function ProductImage({ route }) {
    const { product } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.nome}</Text>
            <Image
                source={{ uri: product.imagens[0] }} // Assuming the first image in 'imagens' array is the main image
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
});
