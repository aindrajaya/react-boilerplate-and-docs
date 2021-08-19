import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import AppWrapper from './App';

ReactDOM.render(
  <Router>
    <AppWrapper />
  </Router>,
  document.getElementById('root')
);
