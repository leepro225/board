import React, { Component } from 'react';
import gif from '../404.gif';
import alert from '../alert.png';

class Modal404 extends Component {
    render() {
      return (

        <div class="haco-404-modal-wrapper">
            <div class="haco-404-modal">
                <div class="haco-404-modal-head">
                    <img src={alert} class="alertPng"></img><span class="modalMassage">Oops, you've got 404 error message!</span>
                    <a class="btn-close 404-trigger" href="#">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="haco-404-modal-content">
                    <div class="modalQuestionBox">
                        <img src={gif}></img><br/>
                        <span class="modalQuestion">Sorry, I'm making this page now.</span>
                    </div>
                    <a class="404-trigger" href="#"><span class="modalAnswer">RETURN</span></a>
                </div>
            </div>
        </div>
     
      );
    }
}

export default Modal404;