import React, { useEffect, useState } from "react";
import style from "./StudentList.module.scss";
import img from "../../../Asset/image/logo1.png";
import Header from "../../../component/Header";
import HeaderTop from "../../../component/Header-top";
import Headerbutton from "../../../component/Header-button";
import { useNavigate } from "react-router-dom";
import axioxGetData from "../../../Service/api";
import { Helper } from "../../../component/Helper";
import { axiosDelete } from "../../../Service/api";

const StudentList = () => {
  const [studentTable, setStudentTable] = useState([]);
  console.log(studentTable, "&&&&&&&&&&&&&&&&&&&&&&&");
  const navigate = useNavigate();
  console.log(studentTable);
  // const [Delete, setDelete] = useState(false);
  const student_Details = [
    {
      Id: "PRE1231",
      Entries: "Nathan Humphries",
      Class: "10B",
      DOB: "26Apri 1997",
      Parent_Name: "Stephen Marley",
      Mobile: "00778",
      Address: "Pune ",
    },
    {
      Id: "PRE1232",
      Entries: "Joa kelley",
      Class: "9B",
      DOB: "25Apri 1996",
      Parent_Name: "Vincent Howard",
      Mobile: "402221",
      Address: "Mumbai",
    },
    {
      Id: "PRE1233",
      Entries: "Vincent",
      Class: "8B",
      DOB: "24Apri 1995",
      Parent_Name: "Kelley Joe",
      Mobile: "402221",
      Address: "Bhenda ",
    },
    {
      Id: "PRE1234",
      Entries: "Lois A",
      Class: "7B",
      DOB: "23Apri 1994",
      Parent_Name: "Cleary Wong",
      Mobile: "413289",
      Address: "Newasa",
    },
    {
      Id: "PRE1235",
      Entries: "Levell Scott",
      Class: "6B",
      DOB: "22Apri 1993",
      Parent_Name: "Jeffrey Scott",
      Mobile: "026731",
      Address: "Nagar ",
    },
    {
      Id: "PRE1236",
      Entries: "Calvin",
      Class: "5B",
      DOB: "21Apri 1992",
      Parent_Name: "Minnie J Shaffer",
      Mobile: "007788",
      Address: "A-nagar",
    },
    {
      Id: "PRE1237",
      Entries: "Malynne",
      Class: "4B",
      DOB: "20Apri 1991",
      Parent_Name: "Jeffret Wong",
      Mobile: "09735843",
      Address: "Kukana",
    },
  ];

  //  const Detail=(Id,Entries,Class,DOB,Parent_Name,Mobile,Address)=>{

  // const obj=[{
  //   'Id':Id,
  //   'Entries':Entries,
  //   'Class':Class,
  //   'DOB':DOB,
  //   'Parent_Name':Parent_Name,
  //   'Mobile':Mobile,
  //   'Address':Address,
  // }]

  //   navigate("/StudentView");
  //   localStorage.setItem('Student',JSON.stringify(obj))
  //  }
  useEffect(() => {
    GetStudentData();
  }, []);
  const GetStudentData = async () => {
    try {
      const response = await axioxGetData();
      console.log(response, "This is api #########");

      if (response) {
        setStudentTable(response);
      } else {
        setStudentTable(student_Details);
      }
    } catch (error) {
      console.log(error);
    }

  };
  const deleteData = (id) => {
    // console.log('this is delete id : ',id)
    // const reponse = await axiosDelete(id);
    // setDelete(reponse);
    // setStudentTable(reponse)

    console.log(id, 'this is id ')
    const upData =studentTable.filter((item)=>{
      return item.id != id 
    });
 
    setStudentTable(upData)
    alert('RECORD HAS BEEN DELECT....!')
    

  };

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
          <div className="">
            <h2>Students</h2>
            <h5>Dashboard / Students</h5>

            <div className={`card ${style.tableCard}`}>
              <div className="card-body ">
                <table
                  className={`table table-bordered text-center ${style.tables}`}
                >
                  <tr>
                    <th>ID</th>
                    <th>entries</th>
                    <th>Class</th>
                    <th>DOB</th>
                    <th>Parents</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                  </tr>
                  { studentTable?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address.city}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>{item.website}</td>
                            {/* <td><button className="btn btn-warning" onClick={()=>{Detail(item.Id,item.Entries,item.Class,item.DOB,item.Parent_Name,item.Mobile,item.Address)}}>SUMBIT</button></td>&nbsp;&nbsp; */}
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                Helper(
                                  "Student",
                                  item.id,
                                  navigate,
                                  "/StudentView"
                                );
                              }}
                            >
                              VIEW
                            </button>
                            <button
                              className="btn btn-warning"
                              style={{ margin: "0px 5px" }}
                              onClick={() => {
                                deleteData(item.id);
                              }}
                            >
                              DELECT
                            </button>
                          </tr>
                        );
                      })
                    }
                </table>
              </div>
            </div>

            {/*  */}
          </div>
          <div>
            <Headerbutton />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;
