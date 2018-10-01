/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiMain
 */

import * as React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import logo from "./logo";
import * as $ from "jquery";
import PageTransition from 'react-router-page-transition';
import mainp from "./main.page";
//import "bootstrap/dist/css/bootstrap.min.css";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { Redirect, BrowserRouter } from 'react-router-dom';
//import TextField from '@material-ui/core/TextField';

import Config from '../config/config';

export interface IProps {
    history: any;
}

export interface IState {
    isPop: boolean;
    pop: JSX.Element;
}




class PageGhotiLogin extends React.Component<IProps, IState> {
    public state: IState = {
        isPop: false,
        pop: void 0,
    };

    public constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this)
        this.login = this.login.bind(this);
    }

    public componentWillMount() {
        localStorage.clear();
        //console.log(localStorage.getItem('Token'));
        // this.setState({
        //     isPop: true,
        //     pop: <div>123</div>,
        // })
        // cookie
        // localstorage
        // if (meiyoudenglu) {
        //     this.props.history.replace('/');
        // }
    }

    public render() {
        return (
            <React.Fragment>
                {this.state.isPop ? <div>
                    {this.state.pop}
                </div> : void 0}
                <div className="main">
                    <div className="title">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100px',
                            alignItems: 'center',
                        }}>
                            <img src={logo} alt="logo" style={{
                                marginLeft: "5px",
                                width: '70px',
                                height: '50px',
                            }} />
                            <div style={{
                                flex: 1,
                                paddingLeft: '10px',
                                paddingTop: '20px',
                                display: 'inline',
                                fontSize: '20px',
                                color: 'darkblue',
                                fontWeight: 'bold',
                            }}>
                                Repair and Preservation Network, LLC
                    </div>
                        </div>
                    </div>
                    {/* <div className="space">
                        <div style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '100%',
                        }}>
                            Welcome to Repair and Preservation Network Company!
                </div>
                    </div>
                    <div className="menu">
                        <div style={{
                            margin: '15px',
                        }}>
                            <button className="link" title="Sign In" onClick={this.changeStatus}><ins>Sign In</ins></button>
                        </div>
                        <div style={{
                            margin: '5px',
                        }}>
                            <button className="link" title="Sign Up" onClick={this.changeStatus}><ins>Sign Up</ins></button>
                        </div>
                    </div>
                    <div className="loginT">
                        <div style={{
                            textAlign: 'center',

                        }}>
                            <h1>Sign in</h1>

                            Username: <input id="UN" /><br /><br />
                            Password:  <input id="PW" type="password" /><br /><br />
                            <div style={{
                            }}>
                                <button style={{
                                    width: '40px',
                                    height: '20px'
                                }}
                                onClick={this.login}>
                                </button></div>
                        </div>
                    </div> */}
                    <section className="login-block">
                <div className="containner">
                    <div className='row'>
                        <div className="col-md-4 login-sec">
                            <h2 className="text-center">Login</h2>
                            <form className="login-form">
                                <div className="form-group">
                                    <label className="text-uppercase">Username</label>
                                    <input type="text" id="UN" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label className="text-uppercase">Password</label>
                                    <input type="password" id="PW" className="form-control" placeholder="" />
                                </div>
                                
                                    <button type="button" className="btn btn-login float-right" onClick={this.login}>LogIn</button>
                                
                            </form>
                            <div className="copy-text"><div>© 2018 REPAIR AND PRESERVATION NETWORK.</div><div> All Rights Reserved <a href="http://www.rpncompany.com">rpncompany.com</a></div></div>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>Start From RPN</h2>
                                                <p>Our best-in-class services and reputation rely upon our core corporate values of quality, commitment and integrity. These values are thoroughly integrated in our day-to-day work with our clients, our vendor partners and our employees.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>Start From RPN</h2>
                                                <p>Our best-in-class services and reputation rely upon our core corporate values of quality, commitment and integrity. These values are thoroughly integrated in our day-to-day work with our clients, our vendor partners and our employees.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>Start From RPN</h2>
                                                <p>Our best-in-class services and reputation rely upon our core corporate values of quality, commitment and integrity. These values are thoroughly integrated in our day-to-day work with our clients, our vendor partners and our employees.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>
            </React.Fragment>
        );
    }

    protected login() {
        var temp;
        
        $.ajax({
            url: 'https://rpntechserver.appspot.com/login',
            //url: 'http://localhost:8080/login',
            method: 'POST',
            datatype: "json",
            data: JSON.stringify({
                username: $('#UN').val(),
                password: $('#PW').val(),
            }),
            success: (function (data) {
                //console.log(data);
                var result = JSON.parse(data);
                //this.IProps.key = data;
                //console.log(result.Authority);
                //console.log(result);
                localStorage.setItem('Token', result.Token);
                localStorage.setItem('Authority', result.Authority);
                localStorage.setItem('currUser',result.Username);
                this.props.history.push('/main');
            }).bind(this),
        });

    }

    protected changeStatus() {

    }


}

export default PageGhotiLogin;