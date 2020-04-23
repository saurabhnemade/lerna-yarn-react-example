import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'ui-components';
import { formatDate } from 'common-utils';

function App() {
  return (
    <div className="App">
      <div>
        Sample product
        <Button label="A product button" />
        <span>
          Today is: {formatDate(new Date())}
        </span>
      </div>
    </div>
  );
}

export default App;
