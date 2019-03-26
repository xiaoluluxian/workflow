/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiPhoto
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';

import Config from '../config/config';
import * as PhotoSphereViewer from "photo-sphere-viewer";


export interface IProps {
    match: any
}

export interface IState {

}

class PageGhotiPhoto extends React.Component<IProps, IState> {
    state={
        src:""
    }
    public constructor(props) {
        super(props);
        this.changeSrc=this.changeSrc.bind(this);
        this.convert360 = this.convert360.bind(this)
    }

    public render() {
        return (<React.Fragment>
            <div style={{width:"100%"}}><div style={{marginLeft:"10px"}}>Enter Picture Src</div><textarea style={{marginLeft:"10px", width:"300px", height:"100px"}}onChange={e=>this.changeSrc(e.target.value)}/></div>
            <div><button style={{marginLeft:"10px", marginBottom:"10px"}}onClick={this.convert360}>Convert360</button></div>
            <div className="container1" id="container1"
                    style={{
                        width: "100%",
                        height: "80%",
                        
                    }}></div>
        </React.Fragment>);
    }

    protected changeSrc(src){
        this.setState({src:src})
    }
    protected convert360(){
        let div = document.getElementById('container1');
        let PSV;
        // console.log(this.state.test[0].longitude);
        let url = this.state.src
        PSV = new PhotoSphereViewer({
            panorama: url,
            container: div,
            time_anim: false,
            navbar: ['autorotate', 'zoom', 'markers', 'spacer-1',
                {
                    title: 'Refresh',
                    className: 'custom-button',
                    content: '↻',
                    onClick: (function () {
                        let loading = false;
                        return function () {
                            PSV.destroy();
                        }
                    }.bind(this)())
                },
                "caption", 'fullscreen'],
            navbar_style: {
                backgroundColor: "silver",
            },
            markers:[]
            
        });
    }

}

export default PageGhotiPhoto;