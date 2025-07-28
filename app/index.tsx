import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>Cookies & Beyond</Text>
      <Text>Where Cookies maniacs gather</Text>
      <Image
        style={styles.headerimg}
        source={{
          uri: "https://kagi.com/proxy/storefront1*1200xx2184-2130-512-262.jpg?c=_oUJLZZEdWvlw_WKDLiWzKXtM8j0WuCDqyJJeUaXCTC863mVQWn0UZyfwn_PA4SPvKPMOh8cRZaSIF26XVdaN9e_o-fQ4a5IS0g30VagPF1uuv7KT3dIxle8z65uaxzv",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerimg: {
    width: 500,
    height: 500,
  },
  H1: {
    fontSize: 50,
  },
  container: {
    padding: 15,
    alignItems: "center",
  },
});
