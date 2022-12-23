import { StyleSheet, Text, View } from "react-native";

import PageContainer from "../components/PageContainer";
import Colors from "../constants/colors";

function MealPlanning() {
  return (
    <PageContainer style={styles.container}/>
  );
}

export default MealPlanning;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
