import Images from "@/assets/images/images";
import ProductProvider from "@/store/ProductProvider";

import { Stack } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <ProductProvider>
      <Stack
        screenOptions={ (props) => ({
          headerRight: () => (
            <TouchableOpacity onPress={()=> {
              props.navigation.navigate('cart')
              console.log("props: " , props)
            }}>
              <Image source={Images.cart} style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="meals" />
        <Stack.Screen name="mealDesc" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="cart" />
      </Stack>
    </ProductProvider>
  );
}
