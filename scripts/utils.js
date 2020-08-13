/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file ZERO Utils
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */

import lodash from 'lodash';
import routerConfig from '../server/common/router.js';
import ConnectionConfig from '../server/common/db.js';

const Utils = {};

Utils.getRoutes = function() {
    const config = routerConfig.router || [];
    config.forEach(item => {
        if (item.redirect) {
            let inx = lodash.findIndex(config, ['path', item.redirect]);
            item.method = config[inx]['method'];
            item.controller = config[inx]['controller'];
            delete item.redirect;
        }
    });
    return config;
};

Utils.installRoutes = function(koaRouter) {
    const prefix = routerConfig.prefix || '';
    const config = Utils.getRoutes();
    // set path prefix
    if (prefix) {
        koaRouter.prefix(prefix);
    }
    // mount router config, support get/post/put/delete/patch/del methods
    config.forEach(item => {
        const path = item.path || '';
        const method = (item.method || 'GET').toLocaleLowerCase();
        const controller = item.controller || function () {
            return;
        };
        koaRouter[method](path, controller);
    });
};

export default Utils;
