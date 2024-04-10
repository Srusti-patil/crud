import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserService from "../services/userService";
import axios from "axios";
const API_URL='http://localhost:8080/users'


const UpdateUser = ()=>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const {userId}=useParams();


    const updateUser = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        const user = { firstName, lastName, emailId };
        UserService.updateUser(userId, user)
            .then(() => {
                console.log("User updated successfully");
                navigate('/');
              })
            .catch(error => console.log(error));
    };
    

    return (
        <div>
            <br /><br />
                <div className="container">
                    <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2>Update User</h2>
                        <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                            <label className="form-label"> First Name :</label>
                            <input
                                type="text"
                                placeholder="Enter first name"
                                name="firstName"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-label"> Last Name :</label>
                            <input
                                type="text"
                                placeholder="Enter last name"
                                name="lastName"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-label"> Email Id :</label>
                            <input
                                type="email"
                                placeholder="Enter email Id"
                                name="emailId"
                                className="form-control"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                            </div>

                            <button className="btn btn-success" onClick={updateUser}>Submit </button>
                            <Link to="/users" className="btn btn-danger"> Cancel </Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;