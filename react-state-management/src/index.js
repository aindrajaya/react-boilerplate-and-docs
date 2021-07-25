import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import TodoState from './ContextAPI/TodoState'; //TodoState ditulis di index agar menjadi global state

//data themeColors berupa property dan value css yg diubah ke dalam state
// const themeColors = {
//   gold: "#ffc107",
//   blue: "#1b58b3",
//   red: "#e92030"
// }

//colorContext dimana object state themeColors disimpan di Global State
// export const ColorContext = createContext(themeColors)

ReactDOM.render(
  <div>
    <TodoState>
      <App />
    </TodoState>
  </div>
  
,document.getElementById('root'));

