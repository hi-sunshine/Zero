/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file ZERO Development Config
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
import Koa from 'koa';
import Path from 'path';
import KoaRouter from 'koa-router';
import KoaStatic from 'koa-static';
import KoaBodyParser from 'koa-bodyparser';
import {createConnection, createConnections} from "typeorm";

import Utils from './utils';
import EnvConfig from './config';
import ConnectionConfig from '../server/common/db.js';

const newConnection = ConnectionConfig.connections ? createConnections : createConnection;
const connectionOptions = ConnectionConfig.connections ? (ConnectionConfig.connections || []) : (ConnectionConfig.connection || {});

newConnection({
    type: "mysql",
    host: "xx.xx.xx.xx",
    port: 33066,
    username: "xxxx",
    password: "xxxx",
    database: "xxxx",
    synchronize: true,
    logging: false,
    entities: ['server/domain/schema/*.js']
}).then(function(connection) {
    console.log('[Success] database connection create success...');

    const app = new Koa();
    const router = new KoaRouter();
    const host = EnvConfig.dev.host || '127.0.0.1';
    const port = EnvConfig.dev.port || 3000;

    app.use(KoaBodyParser());

    Utils.installRoutes(router);
    app.use(router.routes());

    const staticRoot = EnvConfig.dev.static.root || '../static';
    const staticOptions = EnvConfig.dev.static.options || {};
    app.use(KoaStatic(Path.resolve(__dirname, staticRoot), staticOptions));

    app.listen({'host': host, 'port': port});
    console.log('[Success] server started at ' + host + ':' + port + '...');
}).catch(e => {
    console.log(e);
});




