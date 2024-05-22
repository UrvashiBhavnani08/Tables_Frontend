// import "./App.css";
// import React, {useState} from 'react';
// import Card from "./components/Card";
// import All_Projects_Card from "./components/all_projects_card";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Employee_form from "./components/Employee_form";
// import Employee_Form from "./components/EmployeeForm";
// function App() {

//   return (
//     <div>
   
  
//     <BrowserRouter>
//         <Routes>
//         <Route
//             path="/"
//             element={
//               <>
//               <div className="App"> 
//     <Card/>

//      </div> 
//      <div>
//               <All_Projects_Card/>
//             </div>
             
                
//               </>
//             }
//           ></Route>
//           <Route
//             path="/employeeform"
//             element={
//               <>
//               <div className="employee_form_styling"> 
//    <Employee_Form/>

//      </div> 
  
             
                
//               </>
//             }
//           ></Route>
     
//           </Routes>
//           </BrowserRouter>
          
    
   
//     </div>
//   );
// }

// export default App;


import { lazy, Suspense } from 'react';
import {HomeOutlined, AppstoreOutlined, CarOutlined, MoneyCollectOutlined, FileDoneOutlined, InsuranceOutlined, LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import License from './pages/license/License';
import AddLicenseForm from './pages/license/AddLicense';
import Demo from './pages/Demo';
import Passport from './pages/passport/Passport';
import AddPassportForm from './pages/passport/AddPassport';

import './App.css'
import Insurance from './pages/insurance/Insurance';
import AddInsuranceForm from './pages/insurance/AddInsrance';
import Rental from './pages/rental/Rental';
import CarList from './pages/carList/CarList';
import AddRentalForm from './pages/rental/AddRental';
import AddCarList from './pages/carList/AddCarList';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';



import "./App.css";
import React from 'react';
import Card from "./pages/Employees";
import All_Projects_Card from "./components/all_projects_card";
import AdminCard from "./admin_card";
import { BrowserRouter } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./pages/Employees";
import DepartmentTable from "./pages/DepartmentTable";


const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const HR = lazy(() => import('./pages/hr/Hr'));
// const Home = lazy(() => import('./pages/home/Home'));
// const Sales = lazy(() => import('./pages/sales/Sales'));


const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// // const items = [
// //   getItem('Option 1', '1', <PieChartOutlined />),
// //   getItem('Option 2', '2', <DesktopOutlined />),
// //   getItem('User', 'sub1', <UserOutlined />, [
// //     getItem('Tom', '3'),
// //     getItem('Bill', '4'),
// //     getItem('Alex', '5'),
// //   ]),
// //   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
// //   getItem('Files', '9', <FileOutlined />),
// // ];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const {user, dispatch} = useContext(AuthContext);
const user = true;

  const logout = () => {
          axios.post("https://dal-backend-vimpex.vercel.app/api/auth/logout")
          // dispatch({ type: "LOGOUT" })
          window.location.reload()
  };



  return (
    <div>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      {user ? <>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 50,
            margin: 10,
            background: 'rgba(255, 255, 255, 0.2)',
            textAlign: "center",
            fontSize:"20px",
            color:"#FFF",
            borderRadius: "5px",
            marginBottom: "20px",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}
        >VIMPEX</div>

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

          <Menu.Item key="1" icon={<HomeOutlined />} style={{margin: "14px 0px"}}>
            <Link to="/">
              Home
            </Link>
          </Menu.Item>



          <Menu.Item key="2" icon={<AppstoreOutlined />} style={{margin: "14px 0px"}}>
            <Link to="/license">
              License
            </Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<FileDoneOutlined />} style={{margin: "14px 0px"}}>
            <Link to="/passport">
              Passport
            </Link>
          </Menu.Item>


          <Menu.Item key="4" icon={<InsuranceOutlined />} style={{margin: "14px 0px"}}>
            <Link to="/insurance">
              Insurance
            </Link>
          </Menu.Item>

          <Menu.Item key="5" icon={<MoneyCollectOutlined />} style={{margin: "14px 0px"}}>
            <Link to="/rental">
              Rental
            </Link>
          </Menu.Item>

          <Menu.Item key="6" icon={<CarOutlined />} style={{margin: "14px 0px"}}>
            <Link to="/car">
              Car List
            </Link>
          </Menu.Item>

          <Menu.Item key="7" icon={<LogoutOutlined />} style={{margin: "14px 0px"}} onClick={logout}>
              Logout
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 30,
              minHeight: 360,
              boxShadow: "0px 0px 3px gray",
              background: colorBgContainer,
              borderRadius: "5px"
            }}
          >

            <Suspense>
              <div>
                <Routes>


                  <Route path="/" element={<Dashboard />} />

                  <Route path="/license" element={<License />} />
                  <Route path="/license/add" element={<AddLicenseForm />} />
                  <Route path="/license/edit/:id" element={<AddLicenseForm />} />

                  <Route path="/passport" element={<Passport />} />
                  <Route path="/passport/add" element={<AddPassportForm />} />
                  <Route path="/passport/edit/:id" element={<AddPassportForm />} />


                  <Route path="/insurance" element={<Insurance />} />
                  <Route path="/insurance/add" element={<AddInsuranceForm />} />
                  {/* <Route path="/insurance/edit/:id" element={<AddInsuranceForm />} /> */}

                  <Route path="/rental" element={<Rental />} />
                  <Route path="/rental/add" element={<AddRentalForm />} />
                  <Route path="/rental/edit/:id" element={<AddRentalForm />} />


                  <Route path="/car" element={<CarList />} />
                  <Route path="/car/add" element={<AddCarList />} />
                  <Route path="/car/edit/:id" element={<AddCarList />} />


                  <Route path="/employeeform" element={<EmployeeForm />}/>
                  <Route path="/admincard" element={<AdminCard />}/>
                  <Route path="/employeetable" element={<EmployeeTable />}/>
                  <Route path="/depttable" element={<DepartmentTable />}/>
                
             


 

                </Routes>

              </div>
            </Suspense>



          </div>
        </Content>
 
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Vimpex Ltd
        </Footer>
      </Layout>
      </>: <>
      <div className='login-main'>
      <Login />
      </div>
  
      </>}
      
    </Layout>
    <Routes>
   
    </Routes>
    </div>
    
  );
};
export default App;
