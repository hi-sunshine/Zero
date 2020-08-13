/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file Schema for TypeOrm
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 *
 * More detail see https://github.com/typeorm/javascript-example
 */

import { EntitySchema } from 'typeorm';
import { User } from '../model/user.js';

module.exports = new EntitySchema({
    name: 'User',
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        sex: {
            type: "varchar"
        },
        email: {
            type: 'varchar'
        },
        phone: {
            type: 'varchar'
        }
    }
});