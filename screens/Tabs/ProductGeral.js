import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import Routes from '../../assets/Routes';
import { useEffect, useState } from 'react';

export function ProductGeral ({route}){
    const { product } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    },[]);

    return (
        <View style={{width: '100%'}}>
            {isLoading ?
                <ActivityIndicator size="large" color="#0000ff" />
            :
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>{product.nome}</Text>
                    <Text style={styles.preco}>R${product.preco}</Text>
                </View>
                <View style={styles.body}>
                    <Image source={{uri: product.imagens[0]}} style={styles.imagem} />
                    <Text style={styles.descricao}>{product.descricao}</Text>
                </View>
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    body: {
        height: '90%',
        justifyContent: 'space-around',
    },
    imagem: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
    },
    preco: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    descricao: {
        fontSize: 18,
        textAlign: 'center',
    },
});