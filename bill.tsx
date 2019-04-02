import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import MainPage from './src/pages/CreateBill';
import ViewCards from './src/pages/viewcards';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Home from './src/pages/home';
import Form from  './src/pages/form';

const client = new ApolloClient({
    uri: 'https://api-euwest.graphcms.com/v1/cjqxm640z059401hq78m8s8v0/master'
});

const Apps:any = () => {
    return (
        <ApolloProvider client={client}>
            <NativeRouter>
                <Switch>
                    
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/mainpage" component={MainPage} />
                    <Route exact path="/cards" component={ViewCards} />

                </Switch>
            </NativeRouter>
        </ApolloProvider>

    )
}

AppRegistry.registerComponent('Bill manager', Apps );
export default Apps;

