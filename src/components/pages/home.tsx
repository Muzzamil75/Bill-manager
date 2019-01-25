import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../header';
import Content from '../home-content'
import ButtonC from '../home-btn'
import { withRouter } from 'react-router-native'  

const Home =(props)=> {
   
        return (
        <View style={styles.container}>
            <Header headerText={'Bill Manager'} />
            <Content />
            <ButtonC text={'Go to listing'} text1={'Create Bill'}   {...props}  />   
        </View>
        );
    }

    const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:24,
    }
});

export default withRouter(Home);
