import React, { Component } from 'react';

class Controls extends Component {

  render() {
    return (
      <span>
        <a href="#" 
          class="addList write-trigger" 
          onClick={function(e) {
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>
          <span class="glyphicon glyphicon-erase" aria-hidden="true"></span>
        </a>
        <a href="#" 
          class="addList write-trigger" 
          onClick={function(e) {
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </a>

      </span>
    );
  }
}

export default Controls;