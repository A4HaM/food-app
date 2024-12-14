import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Mealsdata } from "./../assets/images/res/data";
import { useRoute } from "@react-navigation/native";

const meals = () => {
  const data = useLocalSearchParams();
  const nav = useNavigation();


const route=useRoute()


  const filterData = () => {
    return Mealsdata.filter((item) => {
      return item.CatId == data.id;
    });
  };

  const goTomealsDesc=(item)=>{
    nav.navigate('mealDesc', item)
  }

  const renderData = () => {
    const meals = filterData();

    return meals.map((item) => {
      return (
        <Pressable onPress={() => goTomealsDesc(item)}>
          <Image style={styles.image} source={item.img} />

          <View style={styles.information}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.price}</Text>
          </View>
        </Pressable>
      );
    });
  };

  return (
    <View>
      <ScrollView>{renderData()}</ScrollView>
    </View>
  );
};

export default meals;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  information : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:80,
    alignItems: 'center',
    backgroundColor:'gray'
  },
  name : {
    fontSize:30,
    color:"white"
  },
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