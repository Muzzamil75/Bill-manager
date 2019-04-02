import * as React from 'react';
import { View, Button, Picker, ScrollView, Text, TextInput } from 'react-native';
import { withRouter } from 'react-router-native'  
import Header from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from '../components/addContent'
import { styles } from '../styles';

export interface IState {
    site: null;
    device: null;
    countrows: number;
    value:null

    fields: Array<{
        month? : number,
        unitrate?: number,
        budget?: number,
    }>;
}

class CreateBill extends React.Component<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                {
                    month: 5,
                    unitrate: 2,
                    budget: 1000,
                }
            ],
            value :null,
            countrows: 1,
            site: null,
            device: null,

        }
    }

    onAddClickHandler = () => {

        this.setState({ fields: [...this.state.fields, {}] })
    }
    onDeletehandler = (index) => {

        if(this.state.fields.length > 1 == true )
        {
        this.state.fields.splice(index, 1)
        this.setState({ fields: this.state.fields })
        }
    }
    saveBudget = (param, index) => {

        this.state.fields[index].budget = param;
        this.setState({ fields: this.state.fields })
    }

    saveUnit = (param, index) => {

        this.state.fields[index].unitrate = param;
        this.setState({ fields: this.state.fields })

    }
    saveMonth = (param, index) => {

        this.state.fields[index].month = param;
        this.setState({ fields: this.state.fields })
    }

    handlPickerSite = (itemValue)=>{

        this.setState({ site: itemValue })
    }
    handlPickerDevice = (itemValue)=>{

        this.setState({ device: itemValue })
    }

    render() {

        const iterate =  this.state.fields.map((object, index) => {
            return <Content  rowNo={index} key={index}
            onDeletehandler = {this.onDeletehandler} 
            saveBudget={this.saveBudget}
            saveUnit={this.saveUnit}
            saveMonth={this.saveMonth}
            />
        })

        return (
            <View style={styles.container}>
                <Header headerText={'Create Bill Step -1'} type = "createbill"/>
                <ScrollView>


                    <View>
                        <Text style={styles.billName}>Bill name</Text>
                    </View>
                    <View style={styles.input}>
                        <Icon name='book' size={24} color = "blue" />
                        <TextInput  placeholder="Enter Bill"  style={styles.inputStyle} />
                    </View>


                    <View>
                        <Text style={styles.textstyle}>Select Site</Text>
                    </View>
                    <View style={styles.pickercss}>
                        <Icon name='question' size={24} color ="blue" />
                        <Picker
                            selectedValue={this.state.site}
                            style={{ height: 20,marginLeft:12 ,  width: 315 }}
                            onValueChange={(itemValue, itemIndex) => this.handlPickerSite(itemValue)}>
                            <Picker.Item label="Bedroom" value="bedroom site" />
                            <Picker.Item label="Room" value="Room site" />
                            <Picker.Item label="Lounge" value="lounge site" />
                        </Picker>
                    </View>


                    <View >
                        <Text style={styles.textstyle}>Select Device</Text>
                    </View>
                    <View style={styles.pickercss}>
                        <Icon name='wifi' size={24} color ="blue" />
                        <Picker
                            selectedValue={this.state.device}
                            style={{ height: 20, width: 315 }}
                            onValueChange={(itemValue, itemIndex) => this.handlPickerDevice(itemValue)}>
                            <Picker.Item label="Lounge Ac" value="L Ac" />
                            <Picker.Item label="Corridor Ac" value="C Ac" />
                            <Picker.Item label="Room Ac" value="R Ac" />
                        </Picker>
                    </View>


                    <View style={styles.headingbar}>
                        <Text>Select Month</Text>
                        <Text>Unit Rate</Text>
                        <Text>Budget</Text>
                    </View>
                    <View style={styles.List}>
                        {
                           iterate
                        }
                    </View>


                    <View style={styles.addMoreBtn}>
                        <Button title="Add more" color='green' onPress={this.onAddClickHandler} />
                    </View>
                    <View style={styles.viewCardBtn}>
                        <Button title="View Cards" color='blue' onPress={() => this.props.history.push("/cards")} />
                    </View>


                </ScrollView>
            </View>
        );
    }
}



export default  withRouter(CreateBill);
