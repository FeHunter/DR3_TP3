import { View, ScrollView, Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { SearchBar } from "../components/Search/SearchBar";

export function ProductList ({navigation}){

    const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/products.json";

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pickerFilter, setpickerFilter] = useState('');

    useEffect(()=>{
        loadProducts();
        loadProductsLog();
    },[])

    async function loadProducts (){
        await fetch(url)
        .then(res => res.json())
        .then(res => setProducts(convertData(res)))
        .catch(error => { console.log(error.message) });
    }
    async function loadProductsLog (){
        await fetch(url)
        .then(res => res.json())
        .then(res => console.log(convertData(res)))
    }

    function convertData (data){
        const ids = Object.keys(data);
        const objs = Object.values(data);
        return objs.map((item, i) => {
            return { id: ids[i], ...item };
        });
    }

    function getSearchTerm(term) {
        setSearchTerm(term);
    }
    function clearSearchTerm() {
        setSearchTerm('');
    }
    function getPickerFilter(term) {
        setpickerFilter(term);
    }

    function filter() {
        let updateList = [...products];
        // Pesquisa por nome ou descrição
        updateList = updateList.filter((product) => {
            return (
              product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.preco.toString().toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        // Ordem por crescente
        if (pickerFilter === "Ordem Crescente"){
            let ordem = [...updateList].sort((a, b) => a.nome.localeCompare(b.nome));
            updateList = ordem;
        }
        // Ordem por decrescente
        else if (pickerFilter === "Ordem Decrescente"){
            let ordem = [...updateList].sort((a, b) => b.nome.localeCompare(a.nome));
            updateList = ordem;
        }
        return (
            <FlatList
                data={updateList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ProductCard product={item} navigation={navigation} />;
                }}
            />
        );
    }

    let showBooks =
        products.length > 0 && searchTerm.length === 0 && pickerFilter === "Sem Filtro" ? (
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ProductCard product={item} navigation={navigation} />;
                }}
            />
        ) : (
            filter()
    );

    return (
        <View style={styles.container}>
            <SearchBar getSearchTerm={getSearchTerm} getPickerFilter={getPickerFilter} clearTerm={clearSearchTerm} />
            <View style={{height: 900}}>
                {showBooks}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingVertical: 25,
    },
});