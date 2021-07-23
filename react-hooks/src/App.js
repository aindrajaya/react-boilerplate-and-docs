import React, {Fragment, useState} from "react"

import './App.css';
import CounterAppClass from "./component/ClassComponent/CounterApp";
import {FunctionComponent, GetDataFromAPI} from "./component/FunctionComponent"
import CounterAppFunc from "./component/FunctionComponent/CounterApp"
import ContactAppManager from "./pages/ContactsManager";


//parent component dari react
function App() {
  return (
    <Fragment>
        <div className="">
          <ContactAppManager />
        </div>
    </Fragment>
  );
}

export default App;
