import React from 'react';
import { render } from 'react-dom';
import "./assets/bulma.min.css";
import "./assets/favicon.ico";
import "./assets/styles.css";
import { PopularShows } from './pages/PopularShows';

const rootEl = document.getElementById('app');
const app = (
  <div className="section">
    <div className="container">
      <PopularShows />
    </div>
  </div>
)

render(app, rootEl);
