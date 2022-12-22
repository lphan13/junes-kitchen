import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";

import Recipes from "../screens/Recipes";
import NewRecipeScreen from "../screens/NewRecipeScreen";
import MealPlanning from "../screens/MealPlanning";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

function NavBottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 70,
            ...styles.shadow,
          },
        }}
      >
      <Tab.Screen
          name="Plan"
          component={MealPlanning}
          options={{
            tabBarIcon: ({ focused }) => {
              let iconName = focused ? "calendar" : "calendar-outline";
              return <Icon name={iconName} style={styles.iconStyle} />;
            },
          }}
        />
        <Tab.Screen
          name="Create"
          component={NewRecipeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              let iconName = focused ? "add-circle" : "add-circle-outline";
              return <Icon name={iconName} style={styles.iconStyle} />;
            },
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={Recipes}
          options={{
            tabBarIcon: ({ focused }) => {
              let iconName = focused ? "pizza" : "pizza-outline";
              return <Icon name={iconName} style={styles.iconStyle} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavBottom;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconStyle: {
    fontSize: 32,
  }
});
