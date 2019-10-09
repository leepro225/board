import React, { Component } from 'react';

class MainContent extends Component {
    render() {
      return (
        <div class="container-fluid">          
            <div class="row">
                <div class="col-md-3 left">
                    <a class="menu-trigger" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>   
                    <div class="menuBg">
                        <div class="menu-list-pc">
                            <ul>
                                <li><a href="http://ha-co.net/main.html">skills</a></li>
                                <li><a href="http://ha-co.net/about.html">about</a></li>
                                <li class="active"><a href="http://www.react.pe.kr">library</a></li>
                                <li><a href="http://ha-co.net/contact.html">contact</a></li>
                            </ul>
                        </div>
                    </div>    
                        <div class="logo">
                            <a href="main.html"><img src="img/logo.png"></img></a>
                        </div> 
                        <div class="haco-social-btn_wrap">
                            <span class="haco-social-span">SNS</span>
                            <div class="haco-social-container">
                                <a><i class="fa fa-envelope"></i></a>
                                <a href="https://github.com/leepro225" target="_blank"><i class="fab fa-github-alt"></i></a>
                                <a><i class="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>                      
                </div>
          
                <div class="col-md-9 right">
                    <div class="row">
                        <div class="libraryHeader col-lg-6">
                            <h2><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span><span class="underlineMagical"><b><a href="#" class="404-trigger">back to the list</a></b></span></h2>
                                <h1>JavaScript.</h1>                                     
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
                            <ul class="selectOption">
                                <li><a href="#">글번호순</a></li>
                                <li><a href="#">최신순</a></li>
                                <li><a href="#">오래된순</a></li>
                                <li><a href="#">제목 오름차순</a></li>
                                <li><a href="#">제목 내림차순</a></li>
                            </ul>
                        </div>
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a> 
                            <div class="panel">
                                <div class="haco-panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="listNum">#001</span>what is JavaScript?
                                    </a>
                                    <span class="thanksBox" data-tooltip-text="thanks!">
                                      <span class="thanksNum">514</span>
                                      <a href="#">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                      </a>                                     
                                    </span> 
                                </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="haco-panel-body">
                                        <div class="libraryEditBox"><a href="#" class="addList haco-delete-btn delete-trigger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a><a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></a></div>
                                            <h3>Anim pariatur cliche reprehenderit, </h3>
                                            enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="haco-panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="listNum">#001</span>what is JavaScript?
                                    </a>
                                    <span class="thanksBox" data-tooltip-text="thanks!">
                                      <span class="thanksNum">514</span>
                                      <a href="#">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                      </a>                                     
                                    </span> 
                                </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="haco-panel-body">
                                        <div class="libraryEditBox"><a href="#" class="addList haco-delete-btn delete-trigger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a><a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></a></div>
                                            <h3>Anim pariatur cliche reprehenderit, </h3>
                                            enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="haco-panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="listNum">#001</span>what is JavaScript?
                                    </a>
                                    <span class="thanksBox" data-tooltip-text="thanks!">
                                      <span class="thanksNum">514</span>
                                      <a href="#">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                      </a>                                     
                                    </span> 
                                </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="haco-panel-body">
                                        <div class="libraryEditBox"><a href="#" class="addList haco-delete-btn delete-trigger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a><a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></a></div>
                                            <h3>Anim pariatur cliche reprehenderit, </h3>
                                            enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="haco-panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="listNum">#001</span>what is JavaScript?
                                    </a>
                                    <span class="thanksBox" data-tooltip-text="thanks!">
                                      <span class="thanksNum">514</span>
                                      <a href="#">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                      </a>                                     
                                    </span> 
                                </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="haco-panel-body">
                                        <div class="libraryEditBox"><a href="#" class="addList haco-delete-btn delete-trigger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a><a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></a></div>
                                            <h3>Anim pariatur cliche reprehenderit, </h3>
                                            enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="haco-panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="listNum">#001</span>what is JavaScript?
                                    </a>
                                    <span class="thanksBox" data-tooltip-text="thanks!">
                                      <span class="thanksNum">514</span>
                                      <a href="#">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                      </a>                                     
                                    </span> 
                                </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="haco-panel-body">
                                        <div class="libraryEditBox"><a href="#" class="addList haco-delete-btn delete-trigger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a><a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></a></div>
                                            <h3>Anim pariatur cliche reprehenderit, </h3>
                                            enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="haco-panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="listNum">#001</span>what is JavaScript?
                                    </a>
                                    <span class="thanksBox" data-tooltip-text="thanks!">
                                      <span class="thanksNum">514</span>
                                      <a href="#">
                                        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                                      </a>                                     
                                    </span> 
                                </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="haco-panel-body">
                                        <div class="libraryEditBox"><a href="#" class="addList haco-delete-btn delete-trigger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a><a href="#" class="addList write-trigger"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span></a></div>
                                            <h3>Anim pariatur cliche reprehenderit, </h3>
                                            enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            
                               
            

                        <div class="haco-delete-modal-wrapper">
                            <div class="haco-delete-modal">
                                <div class="haco-delete-modal-head">
                                    <img src="img/alert.png" class="alertPng"></img><span class="modalMassage">Alert!</span>
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
                       
                        <div class="haco-write-modal-wrapper">
                            <div class="haco-write-modal">
                                <div class="haco-write-modal-head">
                                    <img src="img/alert.png" class="alertPng"></img><span class="modalMassage">Don't forget to push save botton!</span>
                                    <a class="btn-close write-trigger" href="#">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="haco-write-modal-content">
                                    <span class="modalQuestion">Title</span>
                                    <div class="modalUnderline">
                                        <form action="/">
                                            <input type="text" name="title" value="write title here..."></input><br/>
                                        </form>
                                    </div>
                                    <form method="post">
                                        <textarea id="summernote" name="editordata"></textarea>
                                    </form>
                                    <a class="write-trigger" href="#"><span class="modalAnswer">SAVE</span></a>
                                </div>
                            </div>
                        </div>
                       
                        <div class="haco-404-modal-wrapper">
                            <div class="haco-404-modal">
                                <div class="haco-404-modal-head">
                                    <img src="img/alert.png" class="alertPng"></img><span class="modalMassage">Oops, you've got 404 error message!</span>
                                    <a class="btn-close 404-trigger" href="#">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="haco-404-modal-content">
                                    <div class="modalQuestionBox">
                                        <img src="img/404.gif"></img><br/>
                                        <span class="modalQuestion">Sorry, I'm making this page now.</span>
                                    </div>
                                    <a class="404-trigger" href="#"><span class="modalAnswer">RETURN</span></a>
                                </div>
                            </div>
                        </div>

                                
                        <span class="totop"><a href="#"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></a></span> 
                        
                        <footer>
                            Copyright 2019. ha-co. All rights reserved | E-mail : leepro225@gmail.com | <a href="https://www.etri.re.kr/korcon/etc/etc_04.etri">이메일무단수집거부</a>
                        </footer>
                    </div> 
            </div>
        </div>
      
        
        </div>
      </div>        
      );
    }
}

export default MainContent;