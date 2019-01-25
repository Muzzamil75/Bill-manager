import * as React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Text, StyleSheet  } from 'react-native';
import Cards from './cards';

const q = gql`
query  {
    bills {
         id
          name
          site
          month
          asset
          unitrate
          billLimit
    }
      }
  `

const Fetch = () => (

  <Query query={q}>
   
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error :(</Text>;
         if (!data)
         {
          return ( <Text>No data found !</Text>)

         }
            return data.bills.map(   ({ name, site, month, asset, unitrate, billLimit })  => (
          <Cards name={name} month={month} asset={asset} site={site} unitrate={unitrate} billLimit={billLimit} />
        ),i=>{});
      }}
  </Query>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    margin: 10,

  }
});

export default Fetch;