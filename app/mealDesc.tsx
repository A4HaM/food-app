import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { useLocalSearchParams } from "expo-router";
// import { ScrollView } from "react-native-gesture-handler";
import Images from "@/assets/images/images";
import { useNavigation } from "@react-navigation/native";
import AppContext from "@/store/AppContext";

// const nav = useNavigation()
// nav.navigate("settings")

const mealDesc = () => {
  const [x, setX] = useState(1);
  const [sizePrice, setSizePrice] = useState(0);

  const { cart, setCart } = useContext(AppContext);

  const [small, setSmall] = useState(false);
  const [medum, setMedum] = useState(true);
  const [larg, setLarg] = useState(false);

  const [small1, setSmall1] = useState("black");
  const [medum1, setMedum1] = useState("yellow");
  const [larg1, setLarg1] = useState("black");

  const nav = useNavigation()

  const plus = () => {
    if (x < 20) setX(x + 1);
  };
  const minus = () => {
    if (x > 1) setX(x - 1);
  };
  const data = useLocalSearchParams();

  const addtoCart = () => {

    const obj = {
      id : data.id,
      image: data.img,
      price: data.price * x + sizePrice ,
    };

    
    const myCart = cart
    myCart.push(obj)
    setCart(myCart);
    nav.navigate('cart')
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={data.img} />

      <View style={styles.info}>
        <Text style={styles.foodname}>{data.name}</Text>
        <Text style={styles.price}>{data.price * x + sizePrice}</Text>

        <View style={styles.count}>
          <TouchableOpacity onPress={plus}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>

          <Text style={styles.num}>{x}</Text>

          <TouchableOpacity onPress={minus}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.size}>
        <TouchableOpacity
          onPress={() => {
            setSmall(true);
            setMedum(false);
            setLarg(false);
            setSizePrice(0)
          }}
        >
          <Text
            style={[
              styles.smallcolor,
              small ? styles.sizePress : styles.sizeView,
            ]}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSmall(false);
            setMedum(true);
            setLarg(false);
            setSizePrice(5)
          }}
        >
          <Text
            style={[
              styles.midcolor, 
              medum ? styles.sizePress : styles.sizeView,
              
            ]}
          >
            M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSmall(false);
            setMedum(false);
            setLarg(true);
            setSizePrice(10)
          }}
        >
          <Text
            style={[
              styles.largecolor,
              larg ? styles.sizePress : styles.sizeView,
            ]}
          >
            L
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.customcon} onPress={addtoCart}>
        <Text style={styles.custom}>Add to Cart</Text>
        <Image style={styles.imge} source={Images.customizeorder} />
      </TouchableOpacity>
    </View>
  );
};

export default mealDesc;

const styles = StyleSheet.create({
  container: {
    // flex:1
  },
  plus: {
    fontSize: 30,
  },
  img: {
    width: "100%",
    height: "50%",
  },
  count: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    right: 5,
  },

  num: {
    fontSize: 30,
  },
  minus: {
    fontSize: 40,
  },
  info: {
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    elevation: 5,
    borderRadius: 10,
    width: "95%",
    height: "20%",
    alignSelf: "center",
  },
  foodname: {
    marginLeft: 50,
    fontSize: 20,
    bottom: -5,
    color: "black",
  },
  price: {
    marginLeft: 250,
    fontSize: 25,
    bottom: 25,
    color: "black",
  },
  size: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sizeView: {
    marginHorizontal: 30,
    fontSize: 40,
    marginTop: 30,
    borderWidth: 0.5,
    padding: 20,
    borderRadius: 10,
    // color:'red',
    borderColor: "black",
  },
  sizePress: {
    marginHorizontal: 30,
    fontSize: 40,
    marginTop: 30,
    borderWidth: 3,
    padding: 20,
    borderRadius: 10,
  },
  custom: {
    // marginTop: 20,
    fontSize: 30,
    color: "grey",
  },
  customcon: {
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
    marginBottom: -20,
    paddingBottom: 10,
  },
  imge: {
    width: 30,
    height: 30,
    borderWidth: 1,
  },
  midcolor: {
    borderColor: "yellow",
    borderWidth: 1,
  },
  smallcolor: {
    borderColor: "lightblue",
    borderWidth: 1,
  },
  largecolor: {
    borderColor: "red",
    borderWidth: 1,
  },
});

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// █ ▄▄▄▄▄█   █▄ ▀▄██ ▄▄▄▄▄ █
// █ █   ██ ▀▄ █▀▄█▀█ █   █ █
// █ █▄▄▄██▀██▀▀ █▄██ █▄▄▄█ █
// █▄▄▄▄▄▄▄█▄▀▄█ █▄▀ █▄▄▄▄▄▄▄█
// █ ▄█▀ ▄▄▀▀▀▀▄▀▀▄ ▄██ ▀▄▄ ▄█
// ██  █▀█▄ ██▀ ▄█▀▄▄▀ █▄  ▀██
// █▀   ▄▄▄▄▄█▄█▄█▄▀▄▀▄▀▀▄ ▀██
// ███ ▀█▄▄▄ ▄▄█▀▄█▄▄▄█▄▀ ▀███
// █▄▄█▄▄█▄█▀  ▄ █▄▄ ▄▄▄ ▀ ▄▄█
// █ ▄▄▄▄▄ █▀▀█ ▄██▀ █▄█ ▀▀███
// █ █   █ █▄█▄▀▀▀▄█▄▄ ▄▄▀ ▀▀█
// █ █▄▄▄█ █▀ █ ███▄██▄▀█▀▀ ██
// █▄▄▄▄▄▄▄█▄▄▄▄██▄████▄▄▄▄▄▄█
