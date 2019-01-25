import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {StyleSheet , View,Image,Text} from 'react-native';

export interface IProps
{
    headerText : string;
}
const Header:React.SFC<IProps> = (props) =>
{
        return (           
            <View style={styles.header}>
              <Icon style = {{alignItems:'center',marginLeft:20,marginTop:22,color:'white' }}name = 'bars'  size = {21} marginTop ={60} marginLeft={20} />
               <Text style={{fontSize:20,color:'white',marginLeft:20,marginTop:20}}>{props.headerText}</Text>    
                      
            </View>
      );
    
}

const styles= StyleSheet.create({
    header : {
    flexDirection :'row',
        justifyContent:'flex-start',
        height : 70,
        width:360,
        backgroundColor : '#4286f4',
    }
});
export default Header;