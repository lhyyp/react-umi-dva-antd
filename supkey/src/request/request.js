import axios from 'axios';
import { message } from 'antd';
import { router } from 'umi';
import api from './api';
const qs = require('qs');

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 全局默认配置
axios.defaults.baseURL = api.target;
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;   // 跨域携带cookie

const defaultConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}


// response拦截器
axios.interceptors.response.use(config => {
  if (config.data && config.data.code === 401 || !sessionStorage.getItem('token')) {
    router.push('/login');
  }
  return config.data;
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 500:
        router.push('/500');
        message.error(codeMessage[error.response.status]);
        break;
        case 504:
        router.push('/504');
        message.error(codeMessage[error.response.status]);
        break;
      case 403:
        router.push('/403');
        message.error(codeMessage[error.response.status]);
        break;
      case 404:
        router.push('/404');
        message.error(codeMessage[error.response.status]);
        break;
      default:
        message.error('发生未知错误！！！');
    }
  } else if (JSON.stringify(error).indexOf('timeout') !== -1) {
    message.error('连接超时,请刷新试试');
  }
});

const get = (url, obj) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: obj } )
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const post = (url, parmas, config = defaultConfig) => {
  let data = '';
  if (config.isQs) {
    data = parmas;
  } else {
    data = qs.stringify(parmas);
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then(res => {
        if (res) {
          resolve(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { get, post, api };
