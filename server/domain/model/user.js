/**
 * ZERO
 * Copyright (c) 2019 HK, Inc. All Rights Reserved.
 *
 * @file model for TypeOrm
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 *
 * More detail see https://github.com/typeorm/javascript-example
 */

class User {
    constructor(id, name, sex, email, phone) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.email = email;
        this.phone = phone;
    }

    static update(updateUser, options, primary) {
        for (let attr in options) {
            if (options.hasOwnProperty(attr) && attr !== primary) {
                updateUser[attr] = options[attr];
            }
        }
        return updateUser;
    }
};

module.exports = {
    User: User
};