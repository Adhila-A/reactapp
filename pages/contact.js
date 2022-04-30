import React from 'react'

const Contact=()=>{
    return(
    <>
<form className=" d-flex flex-column align-items-center my-5"  id="contactform">
    <div className=" form-group py-2 col-lg-3 col-md-6  ">
        <h3 className="text-uppercase text-center mb-4">contact</h3>
    </div>

    <div className=" form-group py-2 col-lg-3 col-md-6  ">

        <label  className="text-capitalize "> enter your name</label>
        <input   className="form-control "type="text"/>
    </div>
    <div className="form-group pb-2  col-lg-3 col-md-6">

    <label  className="text-capitalize"> email</label>
    <input   className="form-control" type="email"/>
    </div>
    <div className="form-group  pb-2  col-lg-3 col-md-6 ">

        <label  className="text-capitalize"> messge</label>
        <textarea  className="form-control" ></textarea>
    </div>

    <div className="form-group  pb-2  col-lg-3 col-md-6 ">
        <button className=" button text-capitalize"  >submit</button>
    </div>
</form>
</>
)}
export default Contact;
