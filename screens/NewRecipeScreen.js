import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

function NewRecipeScreen() {
    return (
        <View style={styles.container}>
          <Text>New recipe!</Text>
        </View>
      );
}

 export default NewRecipeScreen;

 const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});