import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import Colors from "../constants/colors";

function Header(props) {
  const [fontsLoaded] = useFonts({
    "JosefinSans-Medium": require("../assets/fonts/JosefinSans-Medium.ttf"),
    "Beround": require("../assets/fonts/beround-semibold.otf")
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        padding: 40,
        width: "100%",
        ...props.style,
      }}
    >
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  text: {
    color: Colors.accentDark,
    fontSize: 35,
    fontFamily: "Beround",
  },
});
