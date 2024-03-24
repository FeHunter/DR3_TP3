import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Routes from '../../assets/Routes';

export function ProductCard ({product, navigation}){

    return (
        <Pressable style={styles.card} onPress={() => navigation.navigate(Routes.details, { product: product })}>
            <View style={styles.header}>
                <Text style={styles.title}>{product.nome}</Text>
                <Text>R${product.preco}</Text>
            </View>
            <View style={styles.body}>
                <Image source={{uri: product.imagens[0]}} style={styles.imagem} />
                <Text>{product.descricao}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 350,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        marginVertical: 15,
    },
    header: {
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        height: '80%',
        justifyContent: 'space-around',
    },
    imagem: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
    },
});

/*

comentarios     array
descricao
duvidas         array
id
imagens         array
nome
preco

*/