import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      data: 'Giving it a try'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message,
        data: response.data.test
      });
    }) 
  }

  fetchTest = () => {
    axios.get('/api/test')
    .then((response) => {
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message,
        data: response.data.test
      });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <p>{ this.state.data }</p>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>   
        <button onClick={this.fetchTest} >
          Fetch Test
        </button>        
      </div>
    );
  }
}

export default App;
