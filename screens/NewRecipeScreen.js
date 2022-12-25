import { StyleSheet, Text, View } from "react-native";

import PageContainer from "../components/PageContainer";
import RecipeCard from "../components/RecipeCard";
import Colors from "../constants/colors";

function NewRecipeScreen() {
  return (
    <PageContainer
      headerText="create"
      style={styles.container}
    >
      <RecipeCard backgroundColor={Colors.primary200} allRoundedCorners={false}/>
    </PageContainer>
  );
}

export default NewRecipeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary150,
    flex: 1,
  },
});
