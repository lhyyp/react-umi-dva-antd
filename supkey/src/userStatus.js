

import {router ,Redirect } from 'umi'
import { message } from 'antd'


export default function (props){
    let token = sessionStorage.getItem('token');
    if(!token){
       message.error('请先登录');
       return (<Redirect to="/login" />)
    }else{
        return props.children ;
    }
}
