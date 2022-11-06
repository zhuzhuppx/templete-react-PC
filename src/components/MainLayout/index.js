import React, { useState, useEffect } from "react";
import { Menu, Layout, Tabs, message } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, BulbOutlined, EyeOutlined, TeamOutlined } from '@ant-design/icons';
import { useNavigate, Outlet } from 'react-router-dom'
import './index.less'
import logo from '@/assets/images/logo.png'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
const { TabPane } = Tabs;

const MainLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null); // 当前选择的头部菜单
    const [panes, setPanes] = useState([]); // 所有展开的菜单tab
    const [activeKey, setActiveKey] = useState(null); // 当前激活的tab
    const menus = [
        {
            name: '模块一',
            value: '一',
            icon: 'UserOutlined',
            children: [
                {
                    name: '业务1',
                    value: '1',
                    icon: 'UserOutlined',
                    children: [
                        {
                            name: '1-1-1',
                            value: '1-1-1',
                            icon: null,
                            url: '/one',
                            children: []
                        },
                        {
                            name: '1-1-2',
                            value: '1-1-2',
                            icon: null,
                            url: '/two',
                            children: []
                        }
                    ]
                },
                {
                    name: '业务2',
                    value: '2',
                    icon: 'UserOutlined',
                    children: [
                        {
                            name: '1-2-1',
                            value: '1-2-1',
                            icon: null,
                            url: '/three',
                            children: []
                        }
                    ]
                }
            ]
        },

    ]
    const navigate = useNavigate()

    useEffect(() => {
        let obj = menus[0]
        setSelectedMenu(obj)
    }, []);
    // sider 选中
    const onSiderSelect = (item) => {
        let temp = panes.some(element => {
            if (element.value === item.value) {
                return true
            }
        });
        if (temp) {
            navigate(item.url)
            setActiveKey(item.value)
        } else {
            navigate(item.url)
            setActiveKey(item.value)
            setPanes([...panes, item])
        }
    }
    return (
        <Layout className="layout_wrap">
            <Sider className="sider_wrap" trigger={null} collapsible collapsed={collapsed}>
                <div className="logo_box">
                    <img src={logo} alt='logo' />
                </div>
                <Menu mode="inline">
                    {
                        selectedMenu && selectedMenu.children.map(item => <SubMenu key={item.value} title={item.name}>
                            {
                                item.children.map(sub => <Menu.Item key={sub.value} onClick={() => onSiderSelect(sub)}>{sub.name}</Menu.Item>)
                            }
                        </SubMenu>)
                    }
                </Menu>
            </Sider>
            <Layout className="main_wrap">
                <Content className="content_wrap">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
export default MainLayout