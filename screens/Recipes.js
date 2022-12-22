import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

function Recipes() {
    return (
        <View style={styles.container}>
          <Text>Existing Recipes!</Text>
        </View>
      );
}

 export default Recipes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
 