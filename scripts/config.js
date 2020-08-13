/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file ZERO Base Meta Config
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 *
 */

export default {
    pro: {
        
    },
    dev: {
        host: '127.0.0.1',
        port: 3000,
        static: {
            root: '../static',
            options: {
                gzip: true,
                extensions: ['.html', '.htm', '.jpg']
            }
        }
    }
};