import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AppContext from "@/store/AppContext";
import Images from "@/assets/images/images";

const cart = () => {
  const { cart, setCart } = useContext(AppContext);

  const Deleteitem = (id) => {
    const filterdata = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(filterdata);
  };

  const calculateamount = () => {
    var sum = 0;
    
    cart.forEach((element) => {
      sum = sum + element.price;
    });
    return (
      <View style={styles.Result}>
        {/* <Text style={styles.total}>Total :</Text> */}
        <Text style={styles.Resulttext}>Total:{sum}</Text>
      </View>
    );
  };

  const rendercartData = () => {
    return cart.map((item) => {
      const id = item.id;
      return (
        <View style={styles.card}>
          <View style={styles.image}>
            <Image style={styles.img} source={item.image} />
          </View>

          <View style={styles.price}>
            <Text style={styles.cart}>{item.price}</Text>
          </View>

          <TouchableOpacity style={styles.trash} onPress={() => Deleteitem(id)}>
            <Image style={styles.trash} source={Images.trashbin} />
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    // <ScrollView>
    <View>
      <Text style={styles.cart}>Cart</Text>
      {rendercartData()}
      {calculateamount()}
    </View>
    // </ScrollView>
  );
};

export default cart;

const styles = StyleSheet.create({
  cart: {
    fontSize: 40,
    // fontWeight: "600",
    // marginLeft: 140,
  },
  card: {
    flexDirection: "row",
    width: "90%",
    height: 100,
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    //borderWidth: 1,
    width: "40%",
    height: 90,
  },
  price: {
    ////borderWidth: 1,
    width: "40%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "90%",
    height: "90%",
    borderRadius: 5,
    marginLeft: 15,
  },

  trash: {
    marginBottom: 30,
    marginRight: 5,
    //borderWidth: 1
  },
  Result: {
marginTop:290,
marginLeft:155,
flexDirection:"row",
marginRight:50,

  },
  Resulttext:{
fontWeight:"700",
fontSize:40,
  },
  total:{
    fontSize:20,
    fontWeight:"600",
    marginTop:70,
  }

});
