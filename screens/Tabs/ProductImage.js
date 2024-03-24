import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export function ProductImage({ route }) {
    const { product } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.nome}</Text>
            <FlatList
                style={{width: '100%', height: 800}}
                data={product.imagens}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <Image source={{ uri: item }} style={styles.image} />
                }}
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
        width: '100%',
        height: 500,
        resizeMode: 'contain',
    },
});
