import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ComentarioCard } from 'Product/ComentarioCard';
import { useEffect } from 'react';

export function ProductComentarios ({ route }) {
    const { product } = route.params;
    const comentarios = product.comentarios;
    console.log(comentarios);
    return (
        <View style={styles.container}>
            <Text>Comentários</Text>
            <FlatList
                style={{width: '100%', height: 800}}
                data={comentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18, fontWeight: 500}}>Usuário: {item.usuario}</Text>
                                <Text style={{fontSize: 18, fontWeight: 500}}>Nota {item.nota}/5</Text>
                                <Text style={{fontSize: 16, fontStyle: 'italic'}}>{ new Date(item.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) }</Text>
                            </View>
                            <View style={styles.body}>
                                <View>
                                    <Text style={{fontStyle: 'italic', fontSize: 16, color: 'gray'}}>Comentário:</Text>
                                    <Text style={styles.text}>{item.comentario}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    card: {
        width: '100%',
        height: 'auto',
        padding: 5,
        marginVertical: 10,
        borderWidth: 2,
    },
    header: {
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        aligncomentarios: 'center'
    },
    body: {
        height: '70%',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 18,
    },
});
