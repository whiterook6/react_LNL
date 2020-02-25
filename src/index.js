import React from 'react';
import { render } from 'react-dom';
import "./favicon.ico";
import "./styles.css";

const rootEl = document.getElementById('app');
const App = () => {
  return (
    <h1>Hello, world!</h1>
  );
};

render(<App />, rootEl);
