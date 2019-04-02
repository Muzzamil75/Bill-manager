import * as React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import Header from '../components/header';
import { withRouter } from 'react-router-native'

const Home = (props) => {

    return (
        <>
            <View style={styles.container}>
                <Header headerText={'Bill Manager'} type={"bars"} />
                <View style={styles.img}>
                    <Image source={require('../components/assets/pic.png')} />
                </View>
            </View>

            <View style={styles.buttons}>
                <Button title="Go to listing" onPress={() => props.history.push("/cards")} />
                <Button title="Create Bill" onPress={() => props.history.push("/mainpage")} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container:
    {
        marginTop: 24,
    },
    buttons: {
        height: 35,
        width: 230,
        marginTop: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 70,
    },

    img: {
        paddingTop: 90,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: 80
    }
}
);

export default withRouter(Home);
