import * as React from "react";
import Header from "../components/header";
import { StyleSheet, ScrollView, View } from "react-native";
import Fetch from '../components/fetchdata'

 const ViewCards = () => {

      return (
        <View style={styles.container}>

          <Header headerText={" Bill Manager "} type = "createbill" />

          <ScrollView>
            <View style ={styles.wrapper}>
              <Fetch /> 
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
    padding: 12,
    justifyContent: "space-around"

  }
  
});

export default ViewCards;