import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { ProductCard } from "../components/Product/ProductCard";
import { SearchBar } from "../components/Search/SearchBar";

export function ProductList({ navigation }) {
    const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/products.json";

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pickerFilter, setpickerFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(convertData(data));
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    function convertData(data) {
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
                product.descricao.toString().toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        // Ordem conforme o picker selection
        if (pickerFilter === "Ordem Crescente") {
            updateList.sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (pickerFilter === "Ordem Decrescente") {
            updateList.sort((a, b) => b.nome.localeCompare(a.nome));
        } else if (pickerFilter === "Maior Preço") {
            updateList.sort((a, b) => b.preco - a.preco);
        } else if (pickerFilter === "Menor Preço") {
            updateList.sort((a, b) => a.preco - b.preco);
        }
        return (
            <FlatList
                contentContainerStyle={styles.list}
                data={updateList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <ProductCard product={item} navigation={navigation} />;
                }}
            />
        );
    }

    let showList =
        products.length > 0 && searchTerm.length === 0 && pickerFilter === "Sem Filtro" ? (
            <FlatList
                contentContainerStyle={styles.list}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <ProductCard product={item} navigation={navigation} />;
                }}
            />
        ) : (
            filter()
        );

    return (
        <View style={styles.container}>
            <SearchBar getSearchTerm={getSearchTerm} getPickerFilter={getPickerFilter} clearTerm={clearSearchTerm} />
            <View style={styles.listContainer}>
                {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : showList}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 25,
    },
    listContainer: {
        flex: 1,
        width: '100%',
    },
    list: {
        width: '100%',
        alignItems: 'center',
        height: 500,
    },
});
