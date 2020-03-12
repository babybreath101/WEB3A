import React from 'react';
import './App.css';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function App(){

  const cardData = [
    {
      title:"Febriana P",
      job:"FrontEnd Dev",
    },
    {
      title:"Ana Sari",
      job:"Project Manager",
    },
    {
      title:"Pamungkasari",
      job:"UI/UX",
    }
  ]

  return (
    // <div>
    //   {cardData.map(data =>
    //     <div className="card">
    //       <p className="title">{data.title}</p>
    //       <p>{data.job}</p>
    //     </div>
    //     )}
    // </div>
     <Layout>
     <Header className="header">
       <div className="logo" />
       <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['2']}
         style={{ lineHeight: '64px' }}
       >
         <Menu.Item key="1">nav 1</Menu.Item>
         <Menu.Item key="2">nav 2</Menu.Item>
         <Menu.Item key="3">nav 3</Menu.Item>
       </Menu>
     </Header>
     <Content style={{ padding: '0 50px' }}>
       <Breadcrumb style={{ margin: '16px 0' }}>
         <Breadcrumb.Item>Home</Breadcrumb.Item>
         <Breadcrumb.Item>List</Breadcrumb.Item>
         <Breadcrumb.Item>App</Breadcrumb.Item>
       </Breadcrumb>
       <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
         <Sider className="site-layout-background" width={200}>
           <Menu
             mode="inline"
             defaultSelectedKeys={['1']}
             defaultOpenKeys={['sub1']}
             style={{ height: '100%' }}
           >
             <SubMenu
               key="sub1"
               title={
                 <span>
                   <UserOutlined />
                   subnav 1
                 </span>
               }
             >
               <Menu.Item key="1">option1</Menu.Item>
               <Menu.Item key="2">option2</Menu.Item>
               <Menu.Item key="3">option3</Menu.Item>
               <Menu.Item key="4">option4</Menu.Item>
             </SubMenu>
             <SubMenu
               key="sub2"
               title={
                 <span>
                   <LaptopOutlined />
                   subnav 2
                 </span>
               }
             >
               <Menu.Item key="5">option5</Menu.Item>
               <Menu.Item key="6">option6</Menu.Item>
               <Menu.Item key="7">option7</Menu.Item>
               <Menu.Item key="8">option8</Menu.Item>
             </SubMenu>
             <SubMenu
               key="sub3"
               title={
                 <span>
                   <NotificationOutlined />
                   subnav 3
                 </span>
               }
             >
               <Menu.Item key="9">option9</Menu.Item>
               <Menu.Item key="10">option10</Menu.Item>
               <Menu.Item key="11">option11</Menu.Item>
               <Menu.Item key="12">option12</Menu.Item>
             </SubMenu>
           </Menu>
         </Sider>
         <Content style={{ padding: '0 24px', minHeight: 280 }}>
           //disini isi konten
         <Carousel autoplay>
    <div>
      <br></br>
      <h3> Hallo! Perkenalkan.. Aku Asya, mahasiswi komputer dan sistem informasi UGM.</h3>
    </div>
    <div>
    <br></br>
      <h3> Ini adalah Ant Design Web pertamaku </h3>
    </div>
    <div>
    <br></br>
      <h3> Semoga di Web 3 ini, aku bisa belajar banyak dan bisa aku implementasikan di dunia kerja. </h3>
    </div>
    <div>
    <br></br>
      <h3> Siapapun kamu yang sedang belajar, semangat yaaaa!!! :) </h3>
    </div>
  </Carousel>
           
           </Content>
       </Layout>
     </Content>
     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
   </Layout>
  );
      }


export default App;
