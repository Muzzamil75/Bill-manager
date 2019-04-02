import * as React from 'react';
import { withRouter } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { StyleSheet, View, Text } from 'react-native';

export interface HeaderProps {
    headerText: string;
    type: string
    history?: any
}
const Header: React.SFC<HeaderProps> = (props) => {

    return (
        <View style={styles.header}>

            {
                props.type == 'createbill' ?
                    <Icon style={styles.iconStyle} name='arrow-left' size={21} marginTop={60} marginLeft={20} onPress={() => props.history.push("/")} />
                    :
                    <Icon style={styles.iconStyle} name='bars' size={21} marginTop={60} marginLeft={20} />
            }

            <Text style={styles.text}>{props.headerText}</Text>

        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 55,
        width: 360,
        backgroundColor: '#0099ff',
    },
    iconStyle: {
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
        color: 'white'
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginLeft: 22,
        marginTop: 18
    }
});
export default withRouter(Header);
