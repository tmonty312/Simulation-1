import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard'
import Header from './component/Header'
import Form from './component/Form'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
  
      this.state = {
        product: [ {
          id: 1,
          name: 'Coconut Cream',
          price: '$'+4
      },
      {
          id: 2,
          name: 'Chocolate',
          price: '$'+4
      },
      {
          id: 3,
          name: 'Banana Cream',
          price: '$'+4
      },
      {
          id: 4,
          name: 'White Chocolate Raspberry',
          price: '$'+4
      },
      {
          id: 5,
          name: 'PenutButter Chocolate',
          price: '$'+4
      }]
      }
    }
  
    componentDidMount(){
      axios.get('/api/product').then(results => {
        this.setState({product: results.data})
      })
    }
 
 
  updateInvintory= (product) => {
    this.setState({product})
  }

  render() {
    return (
      <div className="App">
       <Header/>
      <Form updateInvintory={this.updateInvintory}/>
       <Dashboard/>
      </div>
    );
  }
}

export default App;
