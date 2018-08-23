/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiTest
 */

import * as React from 'react';
import * as Component from '../component/import';
import { IItem, IPage } from './interface';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import * as $ from "jquery";

import Config from '../config/config';

export interface IProps {
    page: IPage;
}

export interface IState {

}

class PageGhotiTest extends React.Component<IProps, IState> {
    state = {
        page: null,
    }
    public constructor(props) {
        super(props);
        this.readJson = this.readJson.bind(this);

    }

    public render() {
        return (<div>
            <input
                style={{

                }}
                type="file" id="readJson" name="json" onChange={(e) => { this.readJson(e.target.files) }} />
        </div>);
    }

    protected readJson(Files: FileList) {
        var file = Files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var test = event.target.result;
            var js = JSON.parse(test);
            console.log(js);
            let pagei: IPage = {
                address: js.address,
                assetnum: '',
                startdate: '',
                duedate: '',
                billTo: '',
                city: js.city,
                stage: '',
                invoicenum: '',
                completiondate: '',
                invoicedate: '',
                totalcost:js.totalCost,
                totalimage: parseInt(js.totalImage),
                item: js.list,
            }
            console.log(pagei.address);
            console.log(pagei.totalcost);
            console.log(pagei.totalimage);
            console.log(pagei.item);

        }.bind(this);
        reader.readAsText(file);

    }

    protected init(): IPage {
        return {
            address: '',
            assetnum: '',
            startdate: '',
            duedate: '',
            billTo: '',
            city: '',
            stage: '',
            invoicenum: '',
            completiondate: '',
            invoicedate: '',
            totalcost:'',
            totalimage:0,
            item: [],
        };
    }
}

export default PageGhotiTest;
