import { getMenuListByrole } from '../../controller/member';
import { message } from 'antd';

export default {
  namespace: 'menuListToNamespace1',
  state: {
    MenuList:[],
    aa:1
  },
  subscriptions: {},
  effects: {
    * getMenuListByrole({ payload }, { call ,put}) {
        alert(12);
      const res = yield call(getMenuListByrole, payload);
      if ( res && res.code == 200) {
        yield put({
            type: 'setMenuList',
            payload: res.data,
          });
      } else  {
        message.error(res.msg);
      }
    },
  },
  reducers: {
    setMenuList(state,acion){
        return{
            ...state,
            MenuList :acion.payload
        }
    }
  },
};
