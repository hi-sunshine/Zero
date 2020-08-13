/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file ZERO Router Config
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 *
 * More Router Path see https://www.npmjs.com/package/koa-router
 */

import userController from '../controller/user.js';

export default {
    prefix: '/api',
    router: [
        {
            path: '/user/all',
            method: 'GET',
            controller: userController.list
        },
        {
            path: '/user/:id',
            method: 'GET',
            controller: userController.find
        },
        {
            path: '/user',
            method: 'POST',
            controller: userController.insert
        },
        {
            path: '/user',
            method: 'PUT',
            controller: userController.update
        },
        {
            path: '/user',
            method: 'DELETE',
            controller: userController.remove
        }
    ]
};