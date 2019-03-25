const userModel = require('../lib/SQL.js');
const moment = require('moment');

/*
 * 登录
 * 
 */


exports.login = async ctx => {
    let { userName, password } = ctx.request.body;
    if(userName === null || userName === undefined){
        return ctx.body = {
            code: 100,
            msg: '请输入用户名'
        };
    };
    if(password === null || password === undefined){
        return ctx.body = {
            code: 100,
            msg: '请输入密码'
        };
    }
    await userModel.login(userName).then( async result => {
        let res = {}; 
        if(result.length < 1 ){
            res.code = 100;
            res.msg = '没有该用户';
        }else{
            if ( password === result[0]['password'] ) {
                if(!result[0]['status']){
                    res.code = 100;
                    res.msg = '该账号已被禁止登录';
                }else{
                    ctx.session = result[0];
                    res.code = 200;
                    res.msg = '登录成功';
                    res.data = result[0];
                    await userModel.updateLoginTime( moment().format('YYYY-MM-DD HH:mm:ss'), result[0].id ).then(result =>{ 
                    })
                }
               
            } else {
                res.code = 100;
                res.msg = '用户名密码错误';
            }
        }
        ctx.body = res;    
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err.message
        };
    })
}



/**
 *获取该用户下的菜单栏
 *   */
exports.getMenuListByrole = async ctx => {
    ctx.body = ctx.session;
    if(!ctx.session.id){
        return ctx.body = {
            code : 401,
            msg : '请先登录'
        }
    }
    console.log(ctx.session)
    await userModel.getMenuListByrole(ctx.session.roleId).then( result => {
        ctx.body = {
            code: 200,
            msg: '请求成功',
            data:result
        };
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err.message
        };
    })
}


