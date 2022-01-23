import React, { Component } from 'react';
import { render } from 'react-dom';
import Basic from './Basic';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Basic />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
