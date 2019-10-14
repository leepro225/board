import React, { Component } from 'react';

class WriteControl extends Component {

  render() {
    return (
      <a href="#" 
      class="addList write-trigger" 
      onClick={function(e) {
        e.preventDefault();
        this.props.onChangeMode('create');
      }.bind(this)}>
        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </a>
    );
  }
}

export default WriteControl;