import { StyleSheet } from "react-native";

import Colors from "../constants/colors";
import RecipeCard from "../components/RecipeCard";
import PageContainer from "../components/PageContainer";

function Recipes() {
  return (
    <PageContainer
      style={styles.container}
    >
      <RecipeCard />
    </PageContainer>
  );
}

export default Recipes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
