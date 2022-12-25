import { View } from "react-native";

import Header from "./Header";

function PageContainer(props) {
  return (
    <View
      style={{
        flex: 1,
        ...props.style,
      }}
    >
      <Header>{props.headerText}</Header>
      {props.children}
    </View>
  );
}

export default PageContainer;