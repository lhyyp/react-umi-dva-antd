import react, { Component } from "react";
import { Link } from 'umi';
import { Menu, Icon, Button,message } from 'antd';
import { getMenuListByrole } from '../pages/controller/member';
import toTree  from '../../common/toTree.js'

const SubMenu = Menu.SubMenu;
class MenuList extends Component {
    state = {
        collapsed: false,
        menuList:[],
        selectedKeys:[''],
        openKeys:['权限管理']
    }
    componentWillMount() {
        console.log(this.props)
        this.setState({selectedKeys : [this.props.props.location.pathname]});
        getMenuListByrole().then(res => {
            if( res.code == 200 ){
                let menuList = toTree ( res.data ) ;
                this.setState({menuList});
            }else{
                message.error(res.msg);
            }
        });
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    onSelect = ( item, key, keyPath) => {
        this.setState({selectedKeys : [item.key]})
    }
    onOpenChange = (e) =>{
        this.setState({openKeys:e})

    }

    render() {
        const MenuItem = (data) => {
            return (
                <Menu.Item key={data.path}>
                    <Link to={data.path}>
                        <Icon type={data.icon} />
                        <span>{data.name}</span>
                    </Link>
                </Menu.Item>
            );
        };
        const SubMenuItem = (data) => {
            return (
                <SubMenu key={data.name} title={<span><Icon type={data.icon} /><span>{data.name}</span></span>}>
                    {
                        data.children && data.children.map(item => (
                            <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>
                        ))
                    }
                </SubMenu>
            );
        };
        const { menuList } = this.state;
        return (
            <div style={{ width: 200 }}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button> */}
                <Menu
                    onClick = {this.onSelect}
                    onOpenChange = { this.onOpenChange}
                    selectedKeys = {this.state.selectedKeys}
                    openKeys = {this.state.openKeys} 
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    {
                        menuList && menuList.map((item) => (
                            item.children ?
                                SubMenuItem(item)
                                :
                                MenuItem(item)
                        ))
                    }
                </Menu>
            </div>
        );
    }
}

export default MenuList;

// import React, { Component } from 'react';
// import { Menu, Icon, Spin } from 'antd';
// import Link from 'umi/link';
// import { getMenu } from '../common/menu';

// const SubMenu = Menu.SubMenu;

// class Side extends Component {
//   state = {
//     loading: false,
//     menu: [],
//   };
//   onSelect = ({ key }) => {
//     this.props.onSelect(key);
//   };
//   onOpenChange = (e) => {
//     this.props.onOpenChange(e[1]);
//   };

//   componentWillMount() {
//     this.setState({ loading: true });
//     if (sessionStorage.getItem('selectedKeys')) {
//       this.onSelect({ key: sessionStorage.getItem('selectedKeys') });
//       this.onOpenChange(['', sessionStorage.getItem('selectedKeys')[0]]);
//     }
//     getMenu((res) => {
//       this.setState({ menu: res, loading: false });
//     });
//   }

//   componentWillUnmount() {
//     this.setState = (state, callback) => {
//       return;
//     };
//   }

//   render() {
//     const { openKeys, selectedKeys } = this.props;
//     const { menu, loading } = this.state;
//     sessionStorage.setItem('selectedKeys', selectedKeys);
//     return (
//       <Spin spinning={loading} tip='菜 单 加 载 中 ...'>
//         <Menu
//           onClick={this.onSelect}
//           onOpenChange={this.onOpenChange}
//           mode="inline"
//           theme="dark"
//           openKeys={[openKeys]}
//           selectedKeys={[selectedKeys]}
//           style={{ minHeight: 400 }}
//         >
//           {
//             menu && menu.map((item) => (
//               item.children ?
//                 SubMenuItem(item)
//                 :
//                 MenuItem(item)
//             ))
//           }
//         </Menu>
//       </Spin>
//     );
//   }
// }


// export default Side;
