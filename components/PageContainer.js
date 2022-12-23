import { View, Text, Image, StyleSheet } from "react-native";

function PageContainer(props) {
  return (
    <View style={props.style}>
        <Text>
            This is the entire screen container!
        </Text>
    </View>
  );
}

export default PageContainer;