import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import {Card} from '../../components/Product/ComentarioCard';

export function ProdcutFaq ({ route }) {
    const { product } = route.params;
    const duvidas = product.duvidas;
    console.log(duvidas);

    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 10}}>Dúvidas</Text>
            <FlatList
                data={duvidas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Text style={{fontSize: 18, fontWeight: 500}}>Usuário: {item.usuario}</Text>
                                <Text style={{fontSize: 16, fontStyle: 'italic'}}>{ new Date(item.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) }</Text>
                            </View>
                            <View style={styles.body}>
                                <View>
                                    <Text style={{fontStyle: 'italic', fontSize: 16, color: 'gray'}}>Pergunta:</Text>
                                    <Text style={styles.text}>{item.pergunta}</Text>
                                </View>
                                <View>
                                    <Text style={{fontStyle: 'italic', fontSize: 16, color: 'gray'}}>Resposta:</Text>
                                    <Text style={styles.text}>{item.resposta}</Text>
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
