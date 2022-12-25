import { View, Text, StyleSheet } from "react-native";

function RecipeCard(props) {
  return (
    <View
      style={{
        flex: 1,
        borderBottomLeftRadius: props.allRounded ? 35 : 0,
        borderBottomRightRadius: props.allRounded ? 35: 0,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: props.backgroundColor
      }}
    >
      <Text style={styles.text}>smth here</Text>
    </View>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  text: {
    margin: 15,
  },
});
