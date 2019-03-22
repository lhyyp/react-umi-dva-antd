import React, { Component } from 'react';
import Menulist from '../../components/menuList'
import {Link} from 'umi'
class Admin extends Component{
    render (){
        return (
            <div>
                <Menulist/>
                <Link to={'/demo'}>go demo</Link>
            </div>
        )
    }
}
export default Admin;