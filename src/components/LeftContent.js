import React, { Component } from 'react';
import logo from '../logo.png';


class LeftContent extends Component {
    render() {
            const color_b1b1b1={
                color:"#b1b1b1"      
            }
      return (
            <div class="col-md-3 left">
                <a class="menu-trigger" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>   
                <div class="menuBg">
                    <div class="menu-list-pc">
                        <ul>
                            <li><a href="http://ha-co.net/">skills</a></li>
                            <li><a href="http://ha-co.net/about.html">about</a></li>
                            <li class="active"><a href="http://www.react.pe.kr">library</a></li>
                            <li><a href="http://ha-co.net/contact.html">contact</a></li>
                        </ul>
                    </div>
                </div>    
                <div class="logo">
                    <a href="http://ha-co.net/"><img src={logo} alt="Logo"></img></a>
                </div> 
                <div class="haco-social-btn_wrap">
                    <span class="haco-social-span">SNS</span>
                    <div class="haco-social-container">
                        <a><i class="fa fa-envelope" style={color_b1b1b1}></i>
                        </a>
                        <a href="https://github.com/leepro225" target="_blank"><i class="fab fa-github-alt"></i></a>
                        <a><i class="fab fa-linkedin-in" style={color_b1b1b1}></i></a> 
                    </div>
                </div>                      
            </div>     
      );
    }
}

export default LeftContent;