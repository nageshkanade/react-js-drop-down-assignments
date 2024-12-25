import React from "react";
import style from "./Header-top.module.scss";
import img from "../../Asset/image/imgsfslj.png";
import { useNavigate } from "react-router-dom";
import StudentList from "../../container/pages/StudentList";
const HeaderTop = () => {
    const navigate= useNavigate()
    const one =()=>{
        navigate('/StudentList')
    }
    const two=()=>{
        navigate('/')
    }
  return (
    <>
      <div className={style.HeaderTopimg}>
        {/* <img src={img} ></img> */}
        <div className=" d-flex justify-content-between align-items-center pe-5">
          <img
            src={img}
            style={{ height: "50px", width: "5%", margin: "8px 10px" }}
          ></img>
          
          <div className="dropdown pe-5">
            <button className='btn btn-danger dropdown-toggle' id="dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded="false">Profile</button>
            <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#" onClick={()=>{
                one()
            }} >My profile</a></li>
            <li><a class="dropdown-item" onClick={()=>{
                two()
            }}>Logout</a></li>
            </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
