import { StyleSheet } from "react-native";

import Colors from "../constants/colors";
import RecipeCard from "../components/RecipeCard";
import PageContainer from "../components/PageContainer";

function Recipes() {
  return (
    <PageContainer headerText="recipes" style={styles.pageContainer}>
      <RecipeCard backgroundColor={Colors.primary300}/>
    </PageContainer>
  );
}

export default Recipes;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: Colors.primary250,
    flex: 1,
  },
});
