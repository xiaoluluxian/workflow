/**
 * @overview generated by ghoti-cli
 * @fileoverview Route configs
 */

import * as React from 'react';
import * as Pages from '../page/import';

import Root from './root';

export default function (props) {
    const routes = [
        {
            component: Root,
            routes: [
                {
                    component: Pages.main,
                    exact: true,
                    path: '/main',

                },
                {
                    component: Pages.login,
                    exact: true,
                    path: '/',

                },
                {
                    component: Pages.addtask,
                    exact: true,
                    path: '/addTask',

                },
                {
                    component: Pages.edittask,
                    exact: true,
                    path: '/editTask',

                },
                {
                    component: () => <div>Path = /home</div>,
                    path: '/home',
                },
                {
                    component: () => <div>404</div>,
                    path: '*',
                },
            ],
        },
    ];
    return routes;
};
