/**
 * User Controller
 * 
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
import userService from '../service/user';

class userController {

    /**
     * get user detail by id
     * 
     * @param {String} id - user id
     * @return {Object} user meta info
     */
    static async find(ctx, next) {
        try {
            const result = await userService.findOne(ctx.params.id) || {};
            ctx.body = {
                success: true,
                message: 'success',
                data: result
            };
        } catch(e) {
            console.log(e);
        }
    };

    static async insert(ctx, next) {
        try {
            const result = await userService.insert(ctx.request.body) || [];
            ctx.body = {
                success: true,
                message: 'success',
                data: result
            };
        } catch (e) {
            console.log(e);
        }
    };

    static async update(ctx, next) {
        try {
            const result = await userService.update(ctx.request.body) || {};
            ctx.body = {
                success: true,
                message: 'success',
                data: result
            };
        } catch(e) {
            console.log(e);
        }
    };

    static async remove(ctx, next) {
        try {
            const result = await userService.remove(ctx.request.body.id) || {};
            ctx.body = {
                success: true,
                message: 'success',
                data: {}
            };
        } catch(e) {
            console.log(e);
        }
    };

    static async list(ctx, next) {
        try {
            const query = ctx.query || {};
            const pageNo = query.pageNo || 1;
            const pageSize = query.pageSize || 10;
            const offset = (pageNo - 1) * pageSize;
            const result = await userService.list(offset, pageSize) || {};
            ctx.body = {
                success: true,
                message: 'success',
                data: {
                    total: result.total,
                    pageNo: pageNo,
                    pageSize: pageSize,
                    result: result.list
                }
            };
        } catch(e) {
            console.log(e);
        }
    };
};

module.exports = userController;