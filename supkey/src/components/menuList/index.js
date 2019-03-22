import react, { Component } from "react";
import { Link } from 'umi';
import { Menu, Icon, Button,message } from 'antd';
import { getMenuListByrole } from '../../pages/controller/member';

const SubMenu = Menu.SubMenu;
class MenuList extends Component {
    state = {
        collapsed: false,
        menuList: [{
            'name': '权限管理',
            'path': null,
            'icon': 'user',
            'children': [
                {
                    'name': '角色列表',
                    'path': '/role',
                    'icon': null,
                    'children': null,
                },
                {
                    'name': '用户列表',
                    'path': '/userList',
                    'icon': null,
                    'children': null,
                },
                {
                    'name': '菜单列表',
                    'path': '/menuList',
                    'icon': null,
                    'children': null,
                },
            ],
        }]
    }
    componentDidMount() {
        getMenuListByrole(getMenuListByrole).then(res => {
            if( res.code == 200 ){
                let menuList = res.data;
                menuList.map( item => {

                })


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
        // const { menuListToNamespace: { aa } } = this.props;
        // console.log( this.props);
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
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
