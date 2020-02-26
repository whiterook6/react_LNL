import React from 'react';
import { render } from 'react-dom';
import "./assets/favicon.ico";
import "./assets/styles.css";
import "./assets/bulma.min.css";
import { Dashboard } from './Dashboard';

const rootEl = document.getElementById('app');
const App = () => {
  return (
    <section className="section">
      <div className="container" id="app">
        <Dashboard />
      </div>
    </section>
  );
};

render(<App />, rootEl);
