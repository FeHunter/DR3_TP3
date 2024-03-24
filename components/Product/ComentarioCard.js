import { View, Text, StyleSheet } from 'react-native';

export function ComentarioCard ({route}){
    const { comentario } = route.params;
    console.log(comentario);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>User: {comentario.usuario}</Text>
                <Text>{new Date(comentario.data)}</Text>
            </View>
            <View style={styles.body}>
                <Text>{comentario.comentario}</Text>
                <Text>{comentario.nota}/5</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
});