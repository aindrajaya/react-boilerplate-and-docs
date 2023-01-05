import React from 'react';
import { createRoot } from 'react-dom/client';
import BoilingCalc from './components/BoilingCalc';
import './index.css';

const App = () => {
  return (
    <BoilingCalc />
  )
}

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<App />);



