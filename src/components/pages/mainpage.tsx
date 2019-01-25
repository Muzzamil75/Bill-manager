import * as React from 'react';
import { View, StyleSheet, Button, Picker, ScrollView, Text, TextInput } from 'react-native';
import { withRouter } from 'react-router-native'   //or may be with dom

import Header from '../header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from '../addContent'

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

class MainPage extends React.Component<any, IState> {
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
    //working
    onAddClickHandler = () => {

        this.setState({ fields: [...this.state.fields, {}] })
    }
    //working
    onDeletehandler = (index) => {

        this.state.fields.splice(index, 1)
        this.setState({ fields: this.state.fields })
    }
    //working
    saveBudget = (param, index) => {

        this.state.fields[index].budget = param;
        this.setState({ fields: this.state.fields })
    }
    //working

    saveUnit = (param, index) => {
        this.state.fields[index].unitrate = param;
        this.setState({ fields: this.state.fields })

    }
    //working
    savemonth = (param, index) => {
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

        return (
            <View style={styles.container}>
                <Header headerText={'Create Bill Step-1'} />
                <ScrollView>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginLeft: 25,
                            marginTop: 15,
                            color: 'blue',
                        }}>Bill name</Text>
                    </View>
                    <View style={styles.input}>
                        <Icon name='book' size={25} />
                        <TextInput placeholder="Enter Bill"
                            style={{
                                height: 15, width: 300,
                                marginLeft: 18
                            }}

                        />
                    </View>
                    <View>
                        <Text style={styles.textstyle}>Select Site</Text>
                    </View>
                    <View style={styles.pickercss}>
                        <Icon name='question' size={25} />
                        <Picker
                            selectedValue={this.state.site}
                            style={{ height: 20, width: 315 }}
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
                        <Icon name='wifi' size={25} />
                        <Picker
                            selectedValue={this.state.device}
                            style={{ height: 20, width: 300 }}
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
                            this.state.fields.map((object, index) => {
                                return <Content  rowNo={index} key={index}
                                    ondel={this.onDeletehandler} sbudget={this.saveBudget}
                                    sunit={this.saveUnit}
                                    smonth={this.savemonth}
                                />
                            })
                        }
                    </View>

                    <View style={{ width: 90, height: 40, marginLeft: 25, marginTop: 15 }}>
                        <Button title="Add more" color='green' onPress={this.onAddClickHandler} />

                    </View>
                    <View style={{ width: 100, height: 40, marginLeft: 240, marginTop: 15, backgroundColor: 'yelow' }}>
                        <Button title="View Cards" color='blue' onPress={() => this.props.history.push("/cards")} />

                    </View>
                    
                    <View style={{ width: 100, height: 40, marginLeft: 240, marginTop: 15, backgroundColor: 'yelow' }}>
                        <Button title="Home page  Cards" color='blue' onPress={() => this.props.history.push("/home")} />

                    </View>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
    }, pickercss: {
        height: 40,
        marginTop: 10,
        marginLeft: 25,
        flexDirection: 'row',

    }, List: {
        flexDirection: 'column',
    }
    ,
    input: {
        padding: 10,
        height: 50,
        width: 260,
        marginTop: 5,
        marginLeft: 22,
        flexDirection: 'row',
    },
    button: {
        height: 5,
        width: 60,
        backgroundColor: 'red',
    },
     header: {

        height: 30,
        width: 350,
        margin: 10,
        marginTop: 35,

    }, textstyle: {

        fontSize: 17,
        marginLeft: 25,
        color: 'blue',
        alignItems: 'flex-start'

    }, headingbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        color: 'blue'

    }, month: {
        alignItems: 'flex-start',
        width: 40,
        flexDirection: 'row'
    }
});

export default  withRouter(MainPage);