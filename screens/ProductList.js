import { View, ScrollView, Text, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";

export function ProductList (){

    const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/products.json";

    const [products, setProducts] = useState([]);

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

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return <ProductCard product={item} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 800,
        alignItems: 'center',
        paddingVertical: 25,
    },
});