import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import UserService from "../services/userService";

const ListUserComponent = ()=>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers=()=>{
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteUser = (userID) => {
        UserService.deleteUser(userID).then((response) =>{
            getAllUsers();
        }).catch(error =>{
            console.log(error);
        })
         
    }

    return (
        <div className="container">
            <h2 className = "text-center"> List Users </h2>
            <Link to = "/add-user" className = "btn btn-primary mb-2" > Add User </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th className="text-center"> Id </th>
                    <th className="text-center"> First Name </th>
                    <th className="text-center"> Last Name </th>
                    <th className="text-center"> Email Id </th>
                    <th className="text-center"> Actions </th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}> 
                                <td className="text-center"> {user.id} </td>
                                <td className="text-center"> {user.firstName} </td>
                                <td className="text-center">{user.lastName}</td>
                                <td className="text-center">{user.emailId}</td>
                                <td className="text-center">
                                    <Link className="btn btn-info" to={`/edit-user/${user.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListUserComponent;
