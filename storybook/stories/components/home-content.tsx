import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Content = () => {
    return (
        <View style={styles.img}>
           <Icon name='hotel' size={100} backgroundColor={'white'}/>

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