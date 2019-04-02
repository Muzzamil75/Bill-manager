import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
    },
    pickercss: {
        height: 40,
        marginTop: 10,
        marginLeft: 22,
        flexDirection: 'row',

    }, List: {
        flexDirection: 'column',
    }, billName: {
        fontSize: 17,
        marginLeft: 25,
        marginTop: 15,
        color: 'blue',
    }
    ,
    input: {
        padding: 10,
        height: 50,
        width: 260,
        marginTop: 5,
        marginLeft: 12,
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
    },
    addMoreBtn: {
        width: 90, height: 40, marginLeft: 25, marginTop: 15
    },
    viewCardBtn:
    {
        width: 100, height: 40, marginLeft: 240, marginTop: 15
    },

    inputStyle: {
        height: 15, width: 315,
        marginLeft: 18
    }
});