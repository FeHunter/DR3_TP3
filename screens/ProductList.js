import { View, ScrollView, Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { SearchBar } from "../components/Search/SearchBar";

export function ProductList (){

    const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/products.json";

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        loadProducts();
    },[])

    async function loadProducts (){
        await fetch(url)
        .then(res => res.json())
        .then(res => setProducts(convertData(res)))
        .catch(error => { console.log(error.message) });
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

    function filter() {
        let updateList = [...products];
        updateList = updateList.filter((product) => {
          return (
            product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.preco.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        return (
            <FlatList
                data={updateList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ProductCard product={item} />;
                }}
            />
        );
    }

    let showBooks =
        products.length > 0 && searchTerm.length === 0 ? (
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ProductCard product={item} />;
                }}
            />
        ) : (
            filter()
    );

    return (
        <View style={styles.container}>
            <SearchBar getSearchTerm={getSearchTerm} clearTerm={clearSearchTerm} />
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