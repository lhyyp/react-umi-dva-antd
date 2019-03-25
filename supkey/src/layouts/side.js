import React, { Component } from 'react';
import Menulist from './menuList'
import { Layout } from 'antd';
const {
    Header, Footer, Sider, Content,
} = Layout;


class Side extends Component {

    render() {
        const { props } = this.props;

        return (
            <Layout>
                <Header style={{ background: '#FFF' }}>Header</Header>
                <Layout>
                    <Sider><Menulist props={props} /></Sider>
                    <Content>{props.children}</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default Side;

