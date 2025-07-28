import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Cookies & Beyond</Text>
      <Text>Where Cookies maniacs gather</Text>
      <Image
        source={{
          uri: "https://kagi.com/proxy/Milk-Mustache-Interior-2-1024x683.jpg?c=uLaS44I7v_cvBBNIaEb9rSqhO2ATSmUoO0S2itwUYE9IdHGmWTbt1amYtu4_obLxayqxJC1xeO3-nY8NZPWrv4Qq8EFRk9FLzFQj2GZuG-TCVw6OJhsB87KZPuJmt5mSVzlT-GnlZGq028lTJnaH4g%3D%3D",
        }}
      />
    </View>
  );
}
