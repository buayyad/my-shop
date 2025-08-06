import { StyleSheet, View } from "react-native";
import { products } from "../data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <View>
      {products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
