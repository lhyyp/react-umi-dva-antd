import { login } from '../../controller/member';
import { message } from 'antd';
import { router } from 'umi';

export default {
  namespace: 'loginToNamespace',
  state: {
    aa:1
  },
  subscriptions: {},
  effects: {
    * platformLogin({ payload }, { call }) {
      const res = yield call(login, payload);
      if ( res && res.code == 200) {
        const token = res.data.id;
        sessionStorage.setItem('token', token);
        router.push('/');
      } else  {
        message.error(res.msg);
      }
    },
  },
  reducers: {},
};
