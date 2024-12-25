import React from "react";
import style from './Router.modules.scss';
import { Routes,Route } from 'react-router-dom';
// import StudentEdit from "../container/pages/StudentEdit";
import Dashboard from '../container/pages/Dashboard';
// import Dashboard from './container/pages/Dashboard';
import StudentList from '../container/pages/StudentList';
import StudentView from '../container/pages/StudentView';
import StudentAdd from '../container/pages/StudentAdd';
import StudentEdit from '../container/pages/StudentEdit';
import LoginPage from "../LoginPage";
import ProductedRouter from "../component/ProductedRouter";



const Routers=()=>{
    return(
        <Routes>
        <Route path="/Dashboard" element={< ProductedRouter Comp={Dashboard}/>} />
        <Route path="/" element={<LoginPage/>} />
        <Route path="/StudentList" element={< ProductedRouter Comp={StudentList}/>} />
        <Route path="/StudentView" element={< ProductedRouter Comp ={StudentView}/>} />
        <Route path="/StudentAdd" element={< ProductedRouter Comp={StudentAdd}/>} />
        <Route path="/StudentEdit" element={< ProductedRouter Comp={StudentEdit}/>} />
     </Routes>
  
    )
}

export default Routers;