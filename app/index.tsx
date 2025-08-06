import ProductList from "@/components/ProductList";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.shopContainer}>
        <Text style={styles.shopName}>Cookies & Beyond</Text>
        <Text style={styles.shopTagline}>Where Cookies maniacs gather</Text>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://kagi.com/proxy/storefront1*1200xx2184-2130-512-262.jpg?c=_oUJLZZEdWvlw_WKDLiWzKXtM8j0WuCDqyJJeUaXCTC863mVQWn0UZyfwn_PA4SPvKPMOh8cRZaSIF26XVdaN9e_o-fQ4a5IS0g30VagPF1uuv7KT3dIxle8z65uaxzv",
          }}
        />
      </View>
      <View style={styles.galleryGrid}>
        <ProductList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // Container for the entire shop screen
  shopContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  // Shop title text
  shopName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
  },

  // Shop description or tagline
  shopTagline: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666666",
    marginTop: 4,
  },

  // Header banner image
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
    marginVertical: 16,
  },

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

  galleryGrid: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    gap: 8,
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
