import * as React from "react";
import Header from "../header";
import { StyleSheet, ScrollView, View ,Button } from "react-native";
import Fetch from '../getData'

 const ViewCards =({history})=>{

      return (
        <View style={styles.container}>

          <Header headerText={" Bill Manager "} />
          <ScrollView>

            <View style ={styles.wrapper}>
              <Fetch /> 
            </View>

            <View style={styles.buttonCss}>
              <Button title = "Back" color='blue'  onPress={() => history.push("/mainpage")} />

            </View>
          </ScrollView>
        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  wrapper :{
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between"

  },
  buttonCss:{
    width: 70, 
    height: 40,
     marginLeft: 260, 
     marginTop: 15 ,
  }
});

export default ViewCards;