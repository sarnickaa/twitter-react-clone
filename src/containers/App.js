import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header.js'

// components needed: Header, Form, Tweets, Tweet
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "RubyJesus",
      headerImage: ":)"
    }
  }
  render() {
    return (
      <div className="App">
        <Header username={this.state.username} headerImage={this.state.headerImage}/>
      </div>
    );
  }
}

export default App;
