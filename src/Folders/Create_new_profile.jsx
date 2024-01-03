
// import { NavLink } from "react-router-dom";


import React from 'react'
import HOC from './HOC'
import { Button, Table } from 'react-bootstrap'
import '../Folders/Css/New_profile.css'
import { addprofileapi, deleteprofileapi, editprofileapi, getprofileapi } from "../Redux/Action/action";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function Create_new_profile(props) {

    console.log(props)


    // ===============Code================

    let [obj, setobj] = useState({});
  let [blankobj, setblankobj] = useState({});

  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getprofileapi());
  }, []);


  const getdata = async (e) => {
    if (e.target.type == "checkbox") {
      obj[e.target.name] = obj[e.target.name] ?? [];
      blankobj[e.target.name] = [];
      if (e.target.checked) {
        obj[e.target.name] = [...obj[e.target.name], e.target.value];
      } else {
        obj[e.target.name] = obj[e.target.name].filter(
          (x) => x !== e.target.value
        );
      }
    } else {
      obj[e.target.name] = e.target.value;
      blankobj[e.target.name] = "";
    }
    setobj({ ...obj });
    setblankobj({ ...blankobj });
  };

// =============================Add Data==========================

  const submit = () => {
    obj.idNumber = "string"
    obj.bankDetails= [
        {
          "profileBankAssociateId": 0,
          "profileId": 0,
          "bankAddress": "string",
          "bankInfo": "string",
          "cardHolder": "string",
          "cardType": "string",
          "cardNo": "string",
          "tel": "string"
        }
      ]
    obj.profileImageBase64 = "string"
    obj.role = [
      {
        "profileRoleAssociateId": 0,
        "profileId": 0,
        "roleType": 1,
      }
    ]
    obj.advanceType= 1
    obj.advanceAmount = 0
    obj.contractStartDate = "2023-12-01T04:47:46.151Z"
    obj.contractEndDate = "2023-12-01T04:47:46.151Z"
    obj.contractTotalMonths = 0
    obj.userId = 0
    obj.alternativeName = "string"
    obj.chineseName =  "string"
    obj.artistName = "string"
    
    if (obj.id) {
        obj.role = obj.profileBankAssociateResponses;
        console.log(obj)
        dispatch(editprofileapi(obj));
      }
      else {
        dispatch(addprofileapi(obj))
        setobj({...blankobj})
        }
    console.log(state.api);
  }

  // ==========================delete data====================

  const deleteData = (id) => {
    dispatch(deleteprofileapi(id));
  };

  // =======================edit data========================

  const editData = (x) => {
    setobj({...x});
    setblankobj({...blankobj});
  };

  return (
    <>
    <main className='main-container ' style={{backgroundColor : '#151519', height: '100vh'}}>

        <div className='main-title-profile'>
            <h2><i><CgProfile/></i>Create New Profile</h2>
            <br />

          <div id='form_profile'>
            <div>
<div className="container"><div className="row gutters"><div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"><div className="card1 h-100"><div className="card1-body"><div className="account-settings"><div className="user-profile"><div className="user-avatar"> <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/></div><h5 className="user-name">PERSONAL DETAILS</h5><h6 className="user-email">For Your Profile</h6></div></div></div></div></div><div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"><div className="card1 h-100"><div className="card1-body"><div className="row gutters"><div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><h6 className="mb-2 text-primary"></h6></div><div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"><div className="form-group"> <label for="fullName">Full Name</label> 
<input type="text" className="form-control" id="fullName" placeholder="Enter full name" name="displayName"
                      value={obj.displayName ?? ""}
                      onChange={getdata}/>
</div></div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"><div className="form-group"> <label for="eMail">Email</label> <input type="email" className="form-control" id="eMail" placeholder="Enter email ID"  name="email"
                      
                      value={obj.email ?? ""}
                      onChange={getdata}/></div></div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"><div className="form-group"> <label for="phone">BirthDate</label> <input type="date" className="form-control" id="phone" placeholder="Enter phone number" name="birthdate"
                      value={obj.birthdate ?? ""}
                      onChange={getdata}/></div></div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"><div className="form-group"> <label for="website">Address</label> <input type="url" className="form-control" id="website" placeholder="Address" name="address"
                      value={obj.address ?? ""}
                      onChange={getdata}/></div></div>

</div><div className="row gutters"></div><div className="row gutters"><div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
  
  <div className="text-right1">
    <br />
    <span type="button" id="submit" name="submit" className="btn btn-secondary" onClick={submit}>SUBMIT</span> 
  
  </div>


   </div>
   </div>
   </div>
   
   </div>
   </div>
   </div>
   </div>




            </div>

          </div>
           
          <Table className="table  profile_table table-info">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Birthdate</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {state.api?.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.displayName}</td>
                  <td>{x.email}</td>
                  <td>{x.birthdate}</td>
                  <td>{x.address}</td>
                  <td>

                  <span type="button" id="submit" name="submit" className="table_btn"  onClick={() => editData(x)}>Edit</span>

                  <span type="button" id="submit" name="submit" className="table_btn"   onClick={() => deleteData(x.id)}>Delete</span> 
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        </div>

    </main>
        
   </>
  )
}

export default HOC(Create_new_profile)