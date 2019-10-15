import React, { Component } from 'react';

class TOC extends Component {

    render() {
      var _title, _desc = null;
      var lists = [];
      var i = 0;
      var data = this.props.data;

      while(i < data.length) {
        lists.push(
          <div class="panel" key={data[i].id}>
          <div class="haco-panel-heading" role="tab" id="headingOne">
          <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + data[i].id} aria-expanded="true" aria-controls="collapseOne">
                  <span class="listNum">#00{data[i].id}</span>
                  <a 
                    href={"/content/" + data[i].id}
                    data-id={data[i].id}
                    onClick={function(e) {
                      e.preventDefault();
                      this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>{data[i].title}</a>
              </a>
              <span class="thanksBox" data-tooltip-text="thanks!">
              <span class="thanksNum">514</span>
              <a href="#">
                  <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
              </a>                                     
              </span> 
          </h4>
          </div>
          <div id={"collapse" + data[i].id} class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="haco-panel-body">
                    <div class="libraryEditBox">
                      <a href="#" class="addList haco-delete-btn delete-trigger">
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                      </a>                    
                    </div>
                    {data[i].desc}
                  <br/>
                </div>
            </div>
          </div>
            
          );

        i = i + 1;
      }

      return (
        <span>
          {lists}
        </span>
      );
    }
}

export default TOC;