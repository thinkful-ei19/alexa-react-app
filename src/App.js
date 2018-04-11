import React from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      addresses: []

    }
  }

  addNames(name) {
    this.setState({
      names: [...this.state.names, name]
    })
  }

  addAdresses(address) {
    this.setState({
      addresses: [...this.state.addresses, address]
    })
  }
  render() {
    return (
      <div>
        <Form 
          add={(userName) => this.addNames(userName)}
          addAddress={(userAddress) => this.addAdresses(userAddress)}
        />
        <List 
          users={this.state.names}
          items={this.state.addresses}

        
        />
      </div>
    );
  }
}

