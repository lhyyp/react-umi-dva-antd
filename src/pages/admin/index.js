import React, { Component } from 'react';
import {Link} from 'umi'
class Admin extends Component{
    render (){
        return (
            <div>
                <Link to={'/demo'}>go demo</Link>
            </div>
        )
    }
}
export default Admin;