/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiEdittask
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import logo from './logo';
import { IItem, IPage } from './interface';
import * as $ from "jquery";
import * as fs from 'fs';

import Config from '../config/config';

export interface IProps {
    page: IPage;
    updatePage: (page: IPage, next?: () => void) => void;
    history: any;
}

export interface IState {

}

class PageGhotiSettask extends React.Component<IProps, IState> {
    state = {
        oldUser: '',
        newUser: '',
        stage: '',
        alluser: []
    };
    public componentDidMount() {
        var id;
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findTaskById?task_id=' + localStorage.getItem("currTask"),
            //url: 'http://localhost:8080/login',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                //console.log(result);
                this.setState({ oldUser: result.Username });
                //console.log(this.state.oldUser);
            }).bind(this),
        });
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findAllUsers',

            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                //console.log(result);
                this.setState({ alluser: result });
            }).bind(this),
        });
    }

    public constructor(props) {
        super(props);
        this.submitTask = this.submitTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findUserByName = this.findUserByName.bind(this);
        this.changeStatus = this.changeStatus.bind(this);

    }

    public render() {
        return (<div className="main">
            <div className="title">
                <div style={{
                    display: 'flex',
                    height: '100px',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <img src={logo} alt="logo" style={{
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
                    <div style={{
                        marginTop: '20px',
                        marginRight: '20px',
                        textAlign: 'center',
                        width: '30%'

                    }}>
                        <input type="text" id="myInput" placeholder="Search for Addr.." title="Search Task" />
                    </div>
                    <div style={{
                        marginTop: '20px',
                        marginRight: '10px',
                        textAlign: 'right',
                    }}>
                        <button className='link' title='Log out' onClick={this.logout}><ins>Log Out</ins></button>
                    </div>
                </div>
            </div>
            <div className="space">
                <div style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '10px',
                    width: '100%',
                }}>
                    Welcome to Repair and Preservation Network Company!
            </div>
            </div>
            <div className="menu">
                <div style={{
                    margin: '15px',
                }}>
                    <button className="link" title="View Task" onClick={this.changeStatus}><ins>View Task</ins></button>
                </div>
                <div style={{
                    margin: '5px',
                }}>
                    <button className="link" title="Add Task" onClick={this.addTask}><ins>Add Task</ins></button>
                </div></div>
            <div style={{
                padding: '10px',
            }}>
                <tr>User:
                    <select id='setUser' onChange={e => this.UserChange(e.target.value)}>
                        {this.state.alluser.map(function (item, key) {
                            return (
                                <option>{item.Firstname}</option>
                            )
                        }.bind(this))}
                    </select>
                </tr>
                <tr>Stage: <input className="text" id='setStage' value={this.state.stage}
                    onChange={e => this.StageChange(e.target.value)} /></tr>
            </div>
            <button
                style={{
                    marginLeft: '10px',
                    width: '60px',
                    height: '25px',
                }}
                title="Submit Task" onClick={this.submitTask}><ins>Submit</ins></button>
        </div>);

    }
    protected handleChange(selectorFiles: FileList) {
        //var tmppath = URL.createObjectURL(selectorFiles[0]);
        let page = JSON.parse(selectorFiles[0].toString());
        // let temp = JSON.stringify(selectorFiles[0].toString());
        // let page = JSON.parse(temp);
        //console.log(page);
        // console.log(tmppath);
    }
    protected UserChange(value) {
        this.setState({
            newUser: value
        })
    }
    protected StageChange(value) {
        this.setState({
            stage: value
        })
    }


    protected logout() {

    }
    protected changeStatus() {
        this.props.history.push('/main');
    }
    protected addTask() {

    }
    protected findUserByName(name) {
        //console.log(this.state.newUser); tim001
        //console.log(name);
        for (let i = 0; i < this.state.alluser.length; i++) {
            if (this.state.alluser[i].Firstname === name) {
                return this.state.alluser[i].Username;
            }

        }

    }


    protected submitTask() {
        var fd = new FormData();
        var newname = this.findUserByName($('#setUser').val());
        if (this.state.oldUser[$('#setStage').val()] === undefined) {
            console.log(this.state.oldUser[$('#setStage').val()]);
            fd.append('userToAdd', newname);
            fd.append('task_id', localStorage.getItem('currTask'));
            fd.append('stage', $('#setStage').val());
        }
        else {
            fd.append('userToRemove', this.state.oldUser[$('#setStage').val()]);
            fd.append('userToAdd', newname);
            fd.append('task_id', localStorage.getItem('currTask'));
            fd.append('stage', $('#setStage').val());
        }

        $.ajax({
            url: 'https://rpntechserver.appspot.com/addTaskToUser',
            //url: 'http://192.168.0.66:8080/addTaskToUserII?userToRemove='+this.state.oldUser+'&userToAdd='+$('#setUser').val()+'&task_id='+localStorage.getItem('currTask'),
            method: 'POST',
            dataType: 'json',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            cache: false,
            processData: false,
            contentType: false,
            data: fd,
            success: function (data) {
                //console.log(data);
                this.props.history.push('/main');
            }.bind(this),
        });
    }
}

export default PageGhotiSettask;
