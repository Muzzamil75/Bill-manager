
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface CardProps {
    name: string;
    month: number;
    asset: number;
    unitrate: number;
    budget?: string;
    site: number;
    billLimit: number;

};

const Cards: React.SFC<CardProps> = props => {
    return (
        <View style={styles.wrapperView}>

            {/* Card upper  */}

            <View style={{ flex: 1 }}>
                <Text style={styles.consumed}>Total Consumed</Text>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={styles.billLimit}> Rs.{props.billLimit}</Text>
                    <Icon style={styles.billLimitIcon} name='arrow-up' size={21} marginLeft={20} />
                </View>

            </View>

            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />

            {/* Card Bottom */}

            <View style={styles.cardBottom}>
                <Text style={styles.name}> {props.name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon style={{ color: 'white', marginLeft: 10}} name='calendar' size={15} />
                    <Text style={{ marginLeft: 5, color: '#0099ff' }}>January to March</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    wrapperView: {
        height: 200,
        width: 150,
        backgroundColor: '#0099ff',
        marginTop: 10,
        borderRadius: 8
    },
    billLimit: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        alignSelf: 'flex-start'
    },
    consumed: {
        alignSelf: 'flex-start',
        color: 'white',
        marginLeft: 10,
        marginTop: 8
    },
    cardBottom: {
        flex: 2,
        marginTop: 15,
        backgroundColor: '#b3e0ff',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    name: {
        marginLeft: 27,
        color: '#0099ff',
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 16,
    },
    billLimitIcon: {
        color: 'white', marginLeft: 5
    }
})

export default Cards;

