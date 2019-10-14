import React, { Component } from 'react';
import alert from '../alert.png';

class ModalDelete extends Component {
    render() {
      return (

        <div class="haco-delete-modal-wrapper">
            <div class="haco-delete-modal">
                <div class="haco-delete-modal-head">
                    <img src={alert} class="alertPng"></img><span class="modalMassage">Alert!</span>
                    <a class="btn-close delete-trigger" href="#">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="haco-delete-modal-content">
                    <div class="modalQuestionBox">
                        <span class="modalQuestion">Are you sure to delete?</span>
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span><br/>
                    </div>
                    <a class="delete-trigger" href="#"><span class="modalAnswer">YES</span></a><a class="delete-trigger" href="#"><span class="modalAnswer btnBlack">NO</span></a>
                </div>
            </div>
        </div>
     
      );
    }
}

export default ModalDelete;