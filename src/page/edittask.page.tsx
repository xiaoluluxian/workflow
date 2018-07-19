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
import { ITask, IPage } from './interface';
import * as $ from "jquery";

import Config from '../config/config';

export interface IProps {
    page: IPage;
    updatePage: (page: IPage, next?: () => void) => void;
}

export interface IState {

}

class PageGhotiEdittask extends React.Component<IProps, IState> {
    state={
        Address:'',
        AssetNum:'',
        StartDate:'',
        City:'',
        Stage:'',
    };
    public componentDidMount(){
        var id;
        $.ajax({
            url: 'https://rpnserver.appspot.com/findTaskById?task_id='+localStorage.getItem("currTask"),
            //url: 'http://localhost:8080/login',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({ Address: result.Address });
                this.setState({ AssetNum: result.asset_num });
                this.setState({ StartDate: result.StartDate });
                this.setState({ City: result.City });
                this.setState({ Stage: result.Stage });
                console.log(this.state.City);


            }).bind(this),
        });
    }

    public constructor(props) {
        super(props);
        this.submitTask = this.submitTask.bind(this);
        
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

            <table id="edittask">
                
                    <tr>Property Address <input className="text" id = 'propaddr' value={this.state.Address} ></input></tr>
                    <tr>Asset Number <input className="text" id = 'assetnum' value={this.state.AssetNum}></input></tr>
                    <tr>Start Date      <input className="text" id= 'startdate' value={this.state.StartDate}></input></tr>
                    <tr>City      <input className="text" id= 'city' value={this.state.City}></input></tr>
                    <tr>Stage <input className="text" id='stage' value={this.state.Stage}></input></tr>
                    
                
            </table>
            <button
            style={{
                marginLeft:'10px',
                width: '60px',
                height: '25px',
            }}
            title="Submit Task" onClick={this.submitTask}><ins>Submit</ins></button>
        </div>);

    }
    protected logout() {

    }
    protected changeStatus() {

    }
    protected addTask(){

    }

    
    protected submitTask(){
        var temp;
        $.ajax({
            url: 'https://rpnserver.appspot.com/updateTask',
            //url: 'http://localhost:8080/login',
            method: 'POST',
            datatype: "json",
            headers: {
                Authorization:"Bearer " + localStorage.getItem('Token'),
            },
            data: JSON.stringify({
                TaskID:localStorage.getItem("currTask"),
                asset_num:$('#assetnum').val(),
                startDate:$('#startdate').val(),
                city:$('#city').val(),
                address:$('#propaddr').val(),
                stage:$('#stage').val()
            }),
            success: function (data) {
                console.log(data);
                this.props.history.push('/main');
            }.bind(this),
        });
    }
}

export default PageGhotiEdittask;
