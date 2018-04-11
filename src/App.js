import React from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

