import React, { Component } from 'react';
import style from '../css/style.css'
import _ from 'lodash';
import { connect } from 'dva';

const platformLogin = 'loginToNamespace/platformLogin';

@connect(({ loginToNamespace, loading }) => ({
    loginToNamespace,
    submitLoading: loading.effects[platformLogin],
  }))


class Login extends Component {
    state = {
        userInfo: {
            userName: 'admin',
            password: 123456
        }
    }
    dispatchFunction = (name, data, cb) => {
        const { dispatch } = this.props;
        dispatch({
          type: name,
          payload: data ? data : '',
          callback: (res) => {
            if (res.status == 200) {
              if (cb && typeof (cb) === 'function') cb(res);
            }
          }
        })
      }
    submit = () => {
        let userName = _.trim(this.refs.userName.value);
        let password = _.trim(this.refs.password.value);
        this.dispatchFunction( platformLogin ,{ userName , password });
    }

    render() {
        const { userInfo } = this.state;
        console.log(this.props)
        return (
            <div className={style.login_wrap}>
                <div className={style.ms_title}>欢迎登录^_^</div>
                <form className={style.ms_login}>
                    <div>
                        <input type="text" ref='userName' className={style.username} placeholder='请输入用户名' defaultValue={userInfo.userName} />
                    </div>
                    <div>
                        <input type="password" ref='password' className={style.password} placeholder='请输入密码' defaultValue={userInfo.password} />
                    </div>
                    <div>
                        <span className={style.login_btn} onClick={(e) => this.submit(e)}>登录</span>
                        <p className={style.already}>还没有理账号？<a href="/register" >请立即注册</a></p>
                    </div>
                </form>
            </div>

        )
    }
}



export default Login;