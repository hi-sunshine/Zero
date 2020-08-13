/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file ZERO DataBase Config
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 *
 * More Connect Options see https://typeorm.io/#/connection-options
 */
 
export default {
    connection: {
        name: 'default',
        type: "mysql",
        host: "xx.xx.xx.xx",
        port: 33066,
        username: "xxxx",
        password: "xxxx",
        database: "xxxx",
        synchronize: true,
        logging: false,
        entities: ['server/domain/schema/*.js']
    }
    // connections: [
    //     {
    //         name: 'default',
    //         type: "mysql",
    //         host: "localhost",
    //         port: 3306,
    //         username: "work",
    //         password: "xxxx",
    //         database: "user"
    //     },
    //     {
    //         name: 'slave1',
    //         type: "mysql",
    //         host: "xx.xx.xx.xx",
    //         port: 3306,
    //         username: "work",
    //         password: "xxxx",
    //         database: "user"
    //     },
    //     {
    //         name: 'slave2',
    //         type: "mysql",
    //         host: "xx.xx.xx.xx",
    //         port: 3306,
    //         username: "work",
    //         password: "xxxx",
    //         database: "user"
    //     }
    // ]
};