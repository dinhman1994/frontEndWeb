import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from "./axios";
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

import "./Profile.css";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

function Profile(){

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        DOB: '',
        phonenumber: '',
        oldPassword: '',
        pass: '',
        repass: ''
    });

    const [alert, setAlert] = useState(true);

    const {register , handleSubmit} = useForm();

    const onSubmit = async(data) => {
        console.log("Data is"+data)
        const dataReq = await axios.post("http://localhost:8000/products",data);
        console.log(dataReq);
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = {
            ...formErrors
        };
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 5
                ? 'Name must be at least 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'DOB': 
            errors.DOB = 
              !((new Date('01-01-1930')).getTime() < (new Date(value)).getTime() && (new Date(value)).getTime() < (new Date('01-01-2015')).getTime()) ? 'Invalid Date Of Birth'
                : '';
            break;
          case 'phonenumber': 
            errors.phonenumber = 
              (isNaN(value) || value.length != 10 )
                ? 'Invalid Phone Number'
                : '';
            break;
          case 'oldPassword': 
            errors.oldPassword = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
          case 'pass': 
            errors.pass = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
          case 'repass': 
            errors.repass = 
                value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
          default:
            break;
        }

        setFormErrors(errors);
    }

    return(
        <div className="profile">
            <h1>My Profile</h1>
            <div className="right_area col-md-6">
                <h3>UserName</h3>
                <div className="avatar_area">
                    <img className="avatar_image" src="avatar.jpg"/>
                </div>    
                <hr />
                <ul className="social_list">
                    <li><FacebookIcon className="Icon"/></li>
                    <li><MailIcon className="Icon"/></li>
                    <li><InstagramIcon className="Icon"/></li>
                </ul>
                <hr />
                <table class="table profile-detail table-condensed table-hover">
                    <thead>
                        <tr>
                            <th colspan="3">Contact Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name </td>
                            <td className="infor">Duong Dinh Binh</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td className="infor">binhbg14@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td className="infor">(0)326621539</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td className="infor">14-02-2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="left_area col-md-6">
                <form className="form-horizontal" method="post" onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <h4>Personal Information</h4>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="profileName"> Name</label>
                            <div className="col-md-7">
                                <input ref={register} type="text" className="form-control" id="profileName" name="name" onChange={handleChange}/>
                            </div>
                            {formErrors.name.length > 0 && 
                                <span className='error'>{formErrors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="profileEmail">Email</label>
                            <div className="col-md-7">
                                <input ref={register} type="email" className="form-control" id="profileEmail" name="email" onChange={handleChange}/>
                            </div>
                            {formErrors.email.length > 0 && 
                                <span className='error'>{formErrors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="profileBirth">Date Of Birth</label>
                            <div className="col-md-7">
                                <input ref={register} type="date" className="form-control" id="profileBirth" name="DOB" onChange={handleChange}/>
                            </div>
                            {formErrors.DOB.length > 0 && 
                                <span className='error'>{formErrors.DOB}</span>}
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="profilePhone">Phone Number</label>
                            <div className="col-md-7">
                                <input ref={register} type="text" className="form-control" id="profilePhone" name="phonenumber" onChange={handleChange}/>
                            </div>
                            {formErrors.phonenumber.length > 0 && 
                                <span className='error'>{formErrors.phonenumber}</span>}
                        </div>
                    </div>                    
                    <div>
                        <h4 className="mb-xlg">Change Password</h4>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="oldPassword">Old Password</label>
                            <div className="col-md-7">
                                <input ref={register} type="text" className="form-control" id="oldPassword" name="oldPassword" onChange={handleChange}/>
                            </div>
                            {formErrors.oldPassword.length > 0 && 
                                <span className='error'>{formErrors.oldPassword}</span>}
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="profileNewPassword">New Password</label>
                            <div className="col-md-7">
                                <input ref={register} type="text" className="form-control" id="profileNewPassword" name="pass" onChange={handleChange}/>
                            </div>
                            {formErrors.pass.length > 0 && 
                                <span className='error'>{formErrors.pass}</span>}
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label" for="profileNewPasswordRepeat">Repeat New Password</label>
                            <div className="col-md-7">
                                <input ref={register} type="text" className="form-control" id="profileNewPasswordRepeat" name="repass" onChange={handleChange}/>
                            </div>
                            {formErrors.repass.length > 0 && 
                                <span className='error'>{formErrors.repass}</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-md-6">
                            <button type="reset" className="btn btn-default col-md-6">Reset</button>
                        </div>      
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Profile;