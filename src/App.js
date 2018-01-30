import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {

    state = { loggedIn: null };

    componentWillMount(){
      firebase.initializeApp( {
        apiKey: "AIzaSyCGt-rqG1XBc8HY4kOkcDJpgzJgjk80LTA",
        authDomain: "authentication-a675d.firebaseapp.com",
        databaseURL: "https://authentication-a675d.firebaseio.com",
        projectId: "authentication-a675d",
        storageBucket: "authentication-a675d.appspot.com",
        messagingSenderId: "847327792691"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false})
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out!
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
      return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
      )
  }

}

export default App;
