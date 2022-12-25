import { StyleSheet } from "react-native";

import PageContainer from "../components/PageContainer";
import RecipeCard from "../components/RecipeCard";
import Colors from "../constants/colors";

function MealPlanning() {
  return (
    <PageContainer headerText="meal planning" style={styles.container}>
      <RecipeCard backgroundColor={Colors.primary100} />
    </PageContainer>
  );
}

export default MealPlanning;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary50,
    flex: 1,
  },
});
