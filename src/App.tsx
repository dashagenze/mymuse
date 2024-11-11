import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import './App.css';
import MusicPage from "./MusicPage.tsx";

const { Header, Content, Sider } = Layout;

//   ['1', '2', '3'].map((key) => ({

const items1 =
  {
    children: [ {
      key: '1',
      label: 'qq'
    }
    ].map(key)

  }
//   key: MusicPage,
//   label: `nav ${key}`,
//     children: MusicPage
// }));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: [
                {}
            ]
          //   <MusicPage/>
          //   new Array(4).fill(null).map((_, j) => {
          // const subKey = index * 4 + j + 1;
          // return {
          //   key: subKey,
          //   label: `option${subKey}`,
        //   };
        // }),
      };
    },
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items1}
              style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Layout>
          <Sider width={150} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
                style={{
                  padding: 24,
                  marginTop: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
  );
};

export default App;
