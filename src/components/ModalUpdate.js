import React, { Component } from 'react';
import alert from '../alert.png';

class ModalUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
      
      return (
        <div className={this.props.data}>
            <div class="haco-write-modal">
                <div class="haco-write-modal-head">
                    <img src={alert} class="alertPng"></img><span class="modalMassage">Don't forget to push save botton!</span>
                    <a class="btn-close write-trigger" href="#"
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeClass('read');
                        }.bind(this)}>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="haco-write-modal-content">
                    <form 
                        action="/update_process" 
                        method="post"
                        onSubmit={function(e) {
                            e.preventDefault();
                            this.props.onChangeClass('read');
                            this.props.onSubmit(e.target.title.value, e.target.editordata.value);
                        }.bind(this)}
                    >
                        <span class="modalQuestion">Title</span>
                        <div class="modalUnderline">
                            <input type="text" 
                                   name="title" 
                                   placeholder="write title here..." 
                                   style={{border:'0px',width:'100%'}}
                                   value={this.state.title}
                                   onChange={function(e) {
                                        this.setState({title:e.target.value});
                                   }.bind(this)}
                                ></input><br/>
                        </div>
                        <textarea name="editordata" 
                                  placeholder="description" 
                                  style={{width:'100%', height:'400px', marginTop:'20px'}}
                                  value={this.state.desc}
                                  onChange={function(e) {
                                    this.setState({desc:e.target.value});
                                  }.bind(this)}
                                  >
                        </textarea>
                        <input type="submit" class="write-trigger modalAnswer"></input>
                    </form>
                </div>
            </div>
        </div>        
     
      );
    }
}

export default ModalUpdate;