import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function SearchBar ({getSearchTerm, clearTerm}){

    const [searchTerm, setSearchTerm] = useState('');

    function setTerm (term){
        getSearchTerm(term);
    }
    function clearTermFunc (){
        clearTerm();
        setSearchTerm('');
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='filtro' value={searchTerm} onChangeText={setSearchTerm} />
            {searchTerm.length > 0 ? 
            <Pressable onPress={()=>{clearTermFunc()}}>
                <Icon name='eraser' size={30} color={'black'} />
            </Pressable>
            :
            null
        }
            <Pressable onPress={()=>{setTerm(searchTerm)}}>
                <Icon name='search' size={30} color={'black'} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    },
    input: {
        padding: 5,
        width: '80%',
        borderWidth: 1,
        fontSize: 18,
    }
});
