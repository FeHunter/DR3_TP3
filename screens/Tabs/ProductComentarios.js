import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ComentarioCard } from '../../components/Product/ComentarioCard';

export function ProductComentarios ({ route }) {
    const { product } = route.params;

    const comentarios = objectToArray(product.comentario);
    console.log(comentarios);

    function objectToArray(objeto) {
        const arrayComentarios = [];
        for (const key in objeto) {
            if (Object.hasOwnProperty.call(objeto, key)) {
                arrayComentarios.push(objeto[key]);
            }
        }
        return arrayComentarios;
    }

    return (
        <View style={style.container}>
            <Text>Comentários</Text>
            <FlatList
                style={{width: '100%', height: 800}}
                data={comentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ComentarioCard comentario={item} />
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});
