import * as React from 'react';
import ReactDom from 'react-dom';
import { StyleSheet, Text, View,Button } from 'react-native';

 class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
ReactDom.render(<Main />, document.getElementById("root"));



