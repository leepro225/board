import React, { Component } from 'react';
import alert from '../alert.png';

class ModalWrite extends Component {

    render() {
      var data = this.props.data;
      
      return (

        <div className={data}>
            <div class="haco-write-modal">
                <div class="haco-write-modal-head">
                    <img src={alert} class="alertPng"></img><span class="modalMassage">Don't forget to push save botton!</span>
                    <a class="btn-close write-trigger" href="#">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="haco-write-modal-content">
                    <span class="modalQuestion">Title</span>
                    <div class="modalUnderline">
                        <form action="/">
                            <input type="text" name="title" placeholder="write title here..." style={{
                                border:'0px'
                                }}
                                ></input><br/>
                        </form>
                    </div>
                    <form 
                        action="/create_process" 
                        method="post"
                        onSubmit={function(e) {
                            e.preventDefault();
                            this.props.onSubmit(
                              e.target.title.value,
                              e.target.desc.value
                            );
                          }.bind(this)}
                    >
                        <textarea id="summernote" name="editordata" placeholder="description"></textarea>
                    </form>
                    <a class="write-trigger" href="#"><span class="modalAnswer"><input type="submit"></input>SAVE</span></a>
                </div>
            </div>
        </div>        
     
      );
    }
}

export default ModalWrite;