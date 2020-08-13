/**
 * User Service
 * 
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */

import { getManager, getRepository } from 'typeorm';
import { User } from '../domain/model/user.js';

class userService {

    static async findOne(id) {
        const findUser = await getRepository(User).findOne(id);
        return findUser;
    };

    static async insert(params) {
        const user = new User(0, params.name, params.sex, params.email, params.phone);
        return await getRepository(User).save(user);
    };

    static async update(params) {
        let updateUser = await getRepository(User).findOne(params.id);
        updateUser = User.update(updateUser, params, 'id');
        return await getRepository(User).save(updateUser);
    };

    static async remove(id) {
        const user = await getRepository(User).delete(id);
        return user;
    };

    static async list(offset, limit) {
        const total = await getRepository(User).count();
        const list = await getRepository(User).createQueryBuilder("user").skip(offset).take(limit).getMany();
        return {'total': total, 'list': list};
    };
};

module.exports = userService;