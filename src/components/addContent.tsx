import * as React from 'react';
import { View, Picker, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ComingProps {

    saveMonth (month: number, id: number): void;
    saveUnit (unit: string, id: number): void;
    saveBudget (budget: string, id: number): void;
    onDeletehandler (id : number) : void
    rowNo ? : number;
}
export interface IState {
    picker: null;

}

class Content extends React.Component<ComingProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            picker: null,
        }
    }
    handlePicker = (month, id) => {

        this.props.saveMonth(month, id)
        this.setState({ picker: month })
    };
    render() {

        let id = this.props.rowNo;
        
        return (
            <View style={styles.datecontainer}>

                <Picker
                    selectedValue={this.state.picker}
                    style={{ height: 25.0, width: 110 }}
                    onValueChange={(month) => this.handlePicker(month, id)}>
                    <Picker.Item label="Jan" value="1" />
                    <Picker.Item label="February" value="2" />
                    <Picker.Item label="March" value="3" />
                    <Picker.Item label="April" value="4" />
                    <Picker.Item label="May" value="5" />
                    <Picker.Item label="June" value="6" />
                    <Picker.Item label="July" value="7" />
                    <Picker.Item label="August" value="8" />
                    <Picker.Item label="September" value="9" />
                    <Picker.Item label="October" value="10" />
                    <Picker.Item label="November" value="11" />
                    <Picker.Item label="December" value="12" />
                </Picker>

                <TextInput placeholder="22"
                    style={styles.unitStyle}
                    onChangeText={(unit) => { this.props.saveUnit(unit, id) }}
                    keyboardType={"numeric"} />

                <TextInput placeholder="1000"
                    style={styles.budgetStyle }
                    onChangeText={(budget) => { this.props.saveBudget(budget, id) }}
                    keyboardType={"numeric"}  />

                <Icon name='trash' size={20} style={{ marginLeft: 12 }}
                 onPress={() => { this.props.onDeletehandler(id) }} />
            </View >
        )
    }
}
const styles = StyleSheet.create({
    datecontainer: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 10,
    },
    unitStyle : {
        height: 25,
        width: 60,
        marginLeft: 40,
        
    },
    budgetStyle : {
        height: 25, width: 30,
        marginLeft: 55
    }

});

export default Content;

