import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Dashboard from './component/Dashboard'
// import Dashboard from './container/pages/Dashboard';
// import StudentList from './container/pages/StudentList';
// import StudentView from './container/pages/StudentView';
// import StudentAdd from './container/pages/StudentAdd';
// import StudentEdit from './container/pages/StudentEdit';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "../node_modules/bootstrap/dist/js/bootstrap.js";
 import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
 import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS (includes Popper.js)
 import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
 import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS (includes Popper.js)
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Dashboard /> */}
    {/* <StudentList/> */}
    {/* <StudentView/> */}
    {/* <StudentAdd/> */}
    {/* <StudentEdit/> */}
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
