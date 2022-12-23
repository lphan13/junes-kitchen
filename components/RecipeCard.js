import { View, Text, Image, StyleSheet } from "react-native";
import PageContainer from "./PageContainer";

function RecipeCard() {
  return (
    <View>
        <Text>This is a recipe card</Text>
    </View>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato'
  },
});
