import * as React from 'react';
import { View,StyleSheet,Image } from 'react-native';

const Content = () => {
    return (
        <View style={styles.img}>
         <Image source={require('./assets/a.png')} />
        </View>
    );
}
const styles= StyleSheet.create({
    img: {
         paddingTop: 90, 
        width: 200, 
        height: 200,
        //marginLeft:20,
        justifyContent:'center',
        alignItems:'center' ,
        backgroundColor:'white',
        marginLeft:80
    }

});
export default Content;