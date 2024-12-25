import React from "react";
import style from "./StudentEdit.module.scss";
import img from "../../../Asset/image/logo1.png";
import Header from "../../../component/Header";
import HeaderTop from "../../../component/Header-top";
import Headerbutton from "../../../component/Header-button";

const StudentEdit = () => {
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
              <h2>Edit Student</h2>
              <h5>Student / Edit Student</h5>
              <div className="card">
                <div className="card-body">
                  <from>
                    <h3>Student Information</h3>
                    <div className="row mt-4">
                      <div className="col-md-5">
                        <label>Location</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="col-md-5">
                      <label>Resorce Name</label>
                      <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-5">
                        <label>Company Name</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="col-md-5">
                      <label>Employee ID</label>
                      <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-5">
                        <label>Blood Group</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="col-md-5">
                      <label>course Name</label>
                      <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-5">
                        <label>Gov id</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="col-md-5">
                      <label>Training Date</label>
                      <input type="date" className="form-control"/>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-5">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control"/>
                      </div>
                      <div className="col-md-5">
                      <label>Certification Number</label>
                      <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <button className="btn btn-warning mt-4">Submit</button>
                  </from>
                </div>
              </div>
            </div>
          <div><Headerbutton /></div>
          </div>
        </div>
      
    </>
  );
};

export default StudentEdit;