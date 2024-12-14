import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Images from "@/assets/images/images";
import Category from "./../components/Category";
import { ScreenContainer } from "react-native-screens";
import cart from "./cart";
import { useNavigation } from "expo-router";



const Home = () => {
  const nav = useNavigation()
  const goToCartScreen = ()=> {
    nav.navigate('cart')
  }
  return (
    <View style={styles.container}>
      <View style={styles.maintext}>
  <Text style={styles.text}>Food place</Text>

  <TouchableOpacity onPress={goToCartScreen}>
  <Text style={styles.cartTEXT}>Cart</Text>
        <Image style={styles.cart} source={Images.cart}/>
        </TouchableOpacity>
      </View>
      <Image style={styles.mainIMG} source={Images.mainImg} />
      <Category />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainIMG: {
    width: "100%",
    height: 400,
  },
  basketT: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 30,
  },
  maintext: {
    fontWeight: "bold",
    width: "100%",
    height: 80,
    borderWidth:1,
    paddingTop:10,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:'row',
    // marginTop:s
  },
cart:{
  flexDirection:"row",
  marginBottom:35,
  width:60,
  height:60,
  borderWidth:1,
  marginLeft:40,
},
text:{
marginRight:90,
fontSize:30,
marginBottom:20,
fontWeight:"900"
},
cartTEXT:{
  marginTop:30,
  fontSize:20,
  fontWeight:"bold",
  marginLeft:50,
}
});

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// █ ▄▄▄▄▄ █   █▄ ▀▄██ ▄▄▄▄▄ █
// █ █   █ █ ▀▄ █▀▄█▀█ █   █ █
// █ █▄▄▄█ █▀██▀▀ █▄██ █▄▄▄█ █
// █▄▄▄▄▄▄▄█▄▀▄█ █▄▀ █▄▄▄▄▄▄▄█
// █ ▄█▀ ▄▄▀▀▀▀▄▀▀▄ ▄██ ▀▄▄ ▄█
// ██  █▀█▄ ██▀ ▄█▀▄▄▀ █▄  ▀██
// █▀   ▄▄▄▄▄█▄█▄█▄▀▄▀▄▀▀▄ ▀██
// ███ ▀█▄▄▄ ▄▄█▀▄█▄▄▄█▄▀ ▀███
// █▄▄█▄▄█▄█▀  ▄ █▄▄ ▄▄▄ ▀ ▄▄█
// █ ▄▄▄▄▄ █▀▀█ ▄██▀ █▄█ ▀▀███
// █ █   █ █▄█▄▀▀▀▄█▄▄ ▄▄▀ ▀▀█
// █ █▄▄▄█ █▀ █ ███▄██▄▀█▀▀ ██
// █▄▄▄▄▄▄▄█▄▄▄▄██▄████▄▄▄▄▄▄█s
