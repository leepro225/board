import React, { Component } from 'react';
import LeftContent from "./components/LeftContent.js"
import RightContent from "./components/RightContent.js"
import Modal404 from "./components/Modal404.js"
import ModalDelete from "./components/ModalDelete.js"
import './App.css';
import { isPureish } from '@babel/types';


class App extends Component {
 
  render() {
    
    return (
      <div className="App">
        <LeftContent></LeftContent>
        <RightContent></RightContent>
        <Modal404></Modal404>
        <ModalDelete></ModalDelete>
      </div>
    );
  }
}

export default App;
