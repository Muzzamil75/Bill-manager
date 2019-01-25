
import * as React from 'react';
import { View, Image, Text } from 'react-native';

export interface IProps {
    name? : string;
    month? :number;
    asset?: number;
    unitrate? : number;
    budget? : string;
    site? : number;
    billLimit? :number;
  
  };

 const Cards:React.SFC<IProps> = props => {
    return (
        <View style={{ height: 170, width: 150, backgroundColor: 'blue', marginTop: 30 }}>

            <View style={{ backgroundColor: 'lightblue', height: 20 }}>
                <Text style={{ textAlign:'center' }}>{props.name}</Text>
            </View>

            <View style={{ marginTop:20, height: 20,marginLeft:35, width:70 }}>
                <Text style={{ textAlign:'center' ,color:'white' }}>Asset : {props.asset}</Text>
            </View>

            <View style={{ marginTop:20, height: 20 ,marginLeft:35,width:80  }}>
                <Text style={{ textAlign:'center',color:'white'   }}>Unitrate : {props.unitrate}</Text>
            </View>

            <View style={{ marginTop:20, width:100 ,marginLeft:35, height: 20}}>
                <Text style={{ textAlign:'center',color:'white'  }}>Bill-Limit : {props.billLimit}</Text>
            </View>


        </View>
    );
}

export default Cards;

