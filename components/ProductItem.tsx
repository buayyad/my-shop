import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem = (props) => {
  return (
    <View style={styles.productWrapper}>
      <Image
        style={styles.productImageSmall}
        source={{
          uri: props.product.image,
        }}
      />
      <View>
        <Text style={styles.productTitle}>{props.product.name}</Text>
        <Text style={styles.productPrice}>{props.product.price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  // Small product image thumbnail
  productImageSmall: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 8,
  },

  // Product title text
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginTop: 8,
  },

  // Product price text
  productPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
    marginTop: 4,
  },

  // Wrapper for each product card (image, title, price)
  productWrapper: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
    alignItems: "center",
  },
});
