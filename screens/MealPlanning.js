import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

function MealPlanning() {
    return (
        <View style={styles.container}>
          <Text>New recipe!</Text>
        </View>
      );
}

 export default MealPlanning;

 const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});