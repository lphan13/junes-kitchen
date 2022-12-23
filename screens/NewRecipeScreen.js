import { StyleSheet, Text, View } from "react-native";

import PageContainer from "../components/PageContainer";
import Colors from "../constants/colors";

function NewRecipeScreen() {
  return (
    <PageContainer style={styles.container}/>
  );
}

export default NewRecipeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
