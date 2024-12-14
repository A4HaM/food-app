import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Images from "./../assets/images/images";
import { useNavigation } from "expo-router";

const Category = () => {
  const nav = useNavigation();

  const catagory = [
    {
      id: 1,
      img: Images.burger,
      name: "burgers",
    },
    {
      id: 2,
      img: Images.pizza,
      name: "pizzas",
    },
    { id: 3, img: Images.sandwich, name: "sandwiches" },
    {
      id: 4,
      img: Images.fries,
      name: "fries",
    },
    {
      id: 5,
      img: Images.drink,
      name: "drinks",
    },
  ];

  const renderdata = () => {
    const render = catagory.map((item) => {
      const category = item.id;
      return (
        <Pressable
          key={item.id}
          style={styles.itemContainer}
          onPress={() => {
            nav.navigate("meals", item);
          }}
        >
          <View style={styles.categoryContainer}>
            <Image style={styles.category} source={item.img} />
          </View>
          <Text style={styles.itemName}>{item.name}</Text>
        </Pressable>
      );
    });
    return render;
  };
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderdata()}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    width: 70,
    height: 70,
  },
  categoryContainer: {
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#FF9100",
  },
  itemContainer: {
    alignItems: "center",
  },
  //   categoryContainer: {

  //     // borderWidth: 1,
  //     borderRadius: 50,
  //     backgroundColor: "orange",
  //     // marginLeft: 15,
  //   },
  //   itemName: {
  //     alignItems: "center",
  //     fontSize: 20,
  //   },
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
// █▄▄▄▄▄▄▄█▄▄▄▄██▄████▄▄▄▄▄▄█
