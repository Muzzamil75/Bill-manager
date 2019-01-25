import * as React from 'react';
import {StyleSheet , View, Button} from 'react-native';

export interface IProps {
    text : string;
    text1 : string;
    history:any;
}

 const ButtonC:React.SFC<IProps> = (props:IProps) =>
{
        return (           
            <View style={styles.buttons}>
               <Button title = {props.text} onPress={() =>alert("First Create Bill ")} />       
               <Button title = {props.text1}  onPress={() => props.history.push("/mainpage")} />                  
            </View>
      );
    
}

const styles= StyleSheet.create({
    buttons : {
        height : 35,
        width : 230,
        marginTop:90,
        flexDirection: 'row',
        justifyContent : 'space-between',
        marginLeft:80,
        //backgroundColor:"blue",
    }
});

export default ButtonC;