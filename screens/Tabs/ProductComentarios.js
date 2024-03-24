import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ComentarioCard } from '../../components/Product/ComentarioCard';
import { useEffect } from 'react';

export function ProductComentarios ({ route }) {
    const { product } = route.params;

    return (
        <View style={style.container}>
            <Text>Comentários</Text>
            {/* <FlatList
                style={{width: '100%', height: 800}}
                data={comentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ComentarioCard comentario={item} />
                }}
            /> */}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});
