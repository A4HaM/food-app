import { Image, Text, View } from "react-native";
import Images from './../assets/images/images';
import { useNavigation } from "expo-router";

export default function Index() {
  const nav = useNavigation()

  setTimeout(() => {
    nav.replace("home")
  }, 1000 * 2)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={Images.hamburger} />
      <Text>Loading...</Text>
    </View>
  );
}
