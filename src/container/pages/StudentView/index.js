import React, { useState, useEffect } from "react";
import style from "./StudentView.module.scss";
import img from "../../../Asset/image/man.png";
import Header from "../../../component/Header";
import HeaderTop from "../../../component/Header-top";
import Headerbutton from "../../../component/Header-button";
import { axiosIdData } from "../../../Service/api";
import { axiosDelete } from "../../../Service/api";
import { useNavigate } from "react-router-dom";

const StudentView = () => {
  const [name, setname] = useState();
  const [detail, setDetail] = useState([]);
  const [valueDelete,setValueDelete]=useState(false)
  const navigate=useNavigate()
  // const [flag, setFlag] = useState(false);
  console.log(detail, "?????????????? details");
  // const FileDate=[
  //     {'FullName':'Nagesh Kanade','Department':'Computer Science','Mobile':'7709458130','Gender':'Male','DOB':'22 Apr 1995'},
  // ];

  const id =localStorage.getItem('Student');
  // const flagValue = JSON.parse(localStorage.getItem("btnFlag"));
  // console.log("this is btn flag :", flagValue);
  // console.log(id,'*************')
  useEffect(() => {
    // setFlag(flagValue);
    GetIdData(id);

  }, [id]);

  // useEffect(() => {
  //   // setname('Computer Science')
  //   console.log('this useEffect is running')
  //   if (flag) {
  //     console.log("here is my flag ...");
  //     setFlag(false);
  //   }
  //   else{
  //     GetIdData([{}])
  //   }
  // }, []);

  const GetIdData = async (id) => {
    console.log('i come here')
    const response = await axiosIdData(id);
    console.log(response, "&&&&&&&&&&&");
    if (response) {
      setDetail(response);
    }
     else {
      setDetail();
    }
  };

  //  const nameDetail = localStorage.getItem('Student')
  //  console.log(nameDetail,'Hsrwrwerrrrrrrrr')

  //  useEffect(()=>{
  //   if(nameDetail.length>0){
  //     setDetail(JSON.parse(nameDetail))
  //   }
  //  },[])
 const getDelete= async()=>{
  const response= await axiosDelete()
  if(response){
    setValueDelete(response)
  }
 }
  console.log(name);
  const calling=()=>{
    navigate('/StudentList')
  }
  return (
    <>
      <div className={`row`}>
        <div className="col-md-2">
          <Header />
        </div>
        <div className="col-md-10">
          <div>
            <HeaderTop />
          </div>
          <div>
            <h2>Student Details</h2>
            <h5>Student / students Details</h5>
            <div className="card w-75">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    ></input>
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-danger">Submit</button>
                  </div>
                  <div className="row mt-4 p-4">
                    <div className="col-md-3">
                      <img src={img} className={style.manimg}></img>
                    </div>
                    {( valueDelete===false ?detail?.map((item, index) => {
                      return (
                        <div className="col-md-5" key={index}>
                          <h4>
                            ID :
                          
                            <span>{item.id}</span>
                          </h4>
                          <h4>
                            Entries :<span>{item.name}</span>
                          </h4>
                          <h4>
                            Class :
                            <span>{item.address.city}</span>
                          </h4>
                          <h4>
                            DOB :
                            <span>{item.email}</span>
                          </h4>
                          <h4>
                            Parent_Name :<span>{item.username}</span>
                          </h4>
                          <h4>
                            Mobile :
                            
                            <span>{item.phone}</span>
                          </h4>
                          <h4>
                            Address :
                                                     <span>{item.website}</span>
                          </h4>
                          <button className="btn btn-warning mt-2" onClick={()=>{
                            calling()
                          }}>
                            Back
                          </button>
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                          <button className="btn btn-info mt-2" onClick={()=>{
                            getDelete()
                          }}>
                            Delete
                          </button>
                        </div>
                      );}):<h3>Record has been Deleted</h3>)}
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Headerbutton />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentView;
