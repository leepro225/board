import React, { Component } from 'react';
import TOC from "./TOC.js"
import Controls from "./Controls.js"
import ModalWrite from "./ModalWrite.js"
import ModalUpdate from "./ModalUpdate.js"




class RightContent extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
          mode : 'read',
          modalClass : 'haco-write-modal-wrapper',
          selected_content_id:1,
          contents : [
            {id:1, title:'html', desc:'HTML is HyperText...'},
            {id:2, title:'CSS', desc:'CSS is HyperText...'},
            {id:3, title:'JavaScript', desc:'JavaScript is HyperText...'}
          ]
        }
    }

    getUpdateData() {
        var i = 0;
        while(i < this.state.contents.length) {
            var data = this.state.contents[i];

            if(data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i = i + 1;
        }
    }
      
    render() {

        if (this.state.mode === 'update') {
            var _content = this.getUpdateData();
        } 

      return (
        <div class="col-md-9 right">
            <div class="row">
                <div class="libraryHeader col-lg-6">
                    <h2><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span><span class="underlineMagical"><b><a href="#" class="404-trigger">back to the list</a></b></span></h2>
                    <h1>JavaScript</h1>                                     
                </div>      
                <div class="librarySearchBox col-lg-2 col-xs-2">
                    <div class="input-group">
                    <span class="input-group-btn">
                        <button class="btn btn-default haco-btn" type="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </span>
                    <input type="text" class="haco-form-control" placeholder="찾기"></input>
                    </div>
                </div>
                <div class="librarySortBox col-lg-2 col-xs-2 selectUI">
                    <a href="#none" class="selCheck">정렬 방식<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></a>                   
                    <ul class="selectOption"
                        style={{display:'none'}}>
                        <li><a href="#">글번호순</a></li>
                        <li><a href="#">최신순</a></li>
                        <li><a href="#">오래된순</a></li>
                        <li><a href="#">제목 오름차순</a></li>
                        <li><a href="#">제목 내림차순</a></li>
                    </ul>
                </div>
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <Controls onChangeMode={function(_mode) {
                                                    this.setState({mode: _mode, modalClass: 'haco-write-modal-wrapper open'});
                                                    }.bind(this)
                                                }>
                    </Controls> 
                    <ModalWrite data={this.state.modalClass}
                                onChangeClass={function(_mode) {
                                                    this.setState({mode: _mode, modalClass: 'haco-write-modal-wrapper'});
                                                    }.bind(this)
                                             }
                                onSubmit={function(_title, _desc) {
                                    this.max_content_id = this.max_content_id + 1;
                                    var _contents = this.state.contents.concat(
                                        {id:this.max_content_id, title:_title, desc: _desc}
                                    )
                                    this.setState({
                                        contents:_contents
                                    });
                                }.bind(this)}>
                    </ModalWrite>
                    <ModalUpdate data={this.state.modalClass}
                                onChangeClass={function(_mode) {
                                                    this.setState({mode: _mode, modalClass: 'haco-write-modal-wrapper'});
                                                    }.bind(this)
                                                }
                                content={_content}
                                onSubmit={function(_title, _desc) {
                                    this.max_content_id = this.max_content_id + 1;
                                    var _contents = this.state.contents.concat(
                                        {id:this.max_content_id, title:_title, desc: _desc}
                                    )
                                    this.setState({
                                        contents:_contents
                                    });
                                }.bind(this)}>
                    </ModalUpdate>
                    <TOC onChangePage={function(id) {
                        this.setState({
                            selected_content_id:Number(id)
                        });
                    }.bind(this)}
                    data={this.state.contents}></TOC>              
                </div>
                
                <span class="totop"><a href="#"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></span> 
                
                <footer>
                Copyright 2019. ha-co. All rights reserved | E-mail : leepro225@gmail.com | <a href="https://www.etri.re.kr/korcon/etc/etc_04.etri">이메일무단수집거부</a>
                </footer>
            </div> 
        </div>     
      );
    }
}

export default RightContent;