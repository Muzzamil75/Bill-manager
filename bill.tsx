import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import MainPage from './storybook/stories/components/pages/mainpage';
import ViewCards from './storybook/stories/components/pages/viewcards';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Home from './storybook/stories/components/pages/home';
import Form from  './storybook/stories/components/pages/form';

const client = new ApolloClient({
    uri: 'https://api-euwest.graphcms.com/v1/cjqxm640z059401hq78m8s8v0/master'
});

const Apps:any = () => {
    return (
        <ApolloProvider client={client}>
            <NativeRouter>
                <Switch>
                    
                    <Route exact path="/" component={Form} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/mainpage" component={MainPage} />
                    <Route exact path="/cards" component={ViewCards} />

                </Switch>
            </NativeRouter>
        </ApolloProvider>

    )
}

//export default from './storybook'
AppRegistry.registerComponent('Bill manager', Apps );
export default Apps;

