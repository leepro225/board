import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <a href="/" onClick={function(e) {
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a>
      );
    }
}

export default Title;