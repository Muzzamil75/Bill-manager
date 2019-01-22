import * as React from "react";
import { Text,Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Home from './components/home'
import Button from './Button';
import MainPage from './components/mainpage';
import ViewCards from './components/viewcards';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


//storiesOf('Image', module).add('to sb image', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)

  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))  
  .add('with Muzamil', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Muzamil</Text>
    </Button>
  ))
  
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))

.add('Home', () => < Home />)
.add('Step 1', () => < MainPage />)
.add('ViewCards', () => < ViewCards />)

