import axios from "axios";
const API_URL='http://localhost:8080/users'

class UserService{
    getAllUsers(){
        return axios.get(API_URL);
    }
    getUserById(userID){
        return axios.get(API_URL + '/' + userID);
    }
    createUser(user){
        return axios.post(API_URL, user);
    }
    updateUser(userID, user){
        return axios.put(API_URL + '/' + userID, user);
    }
    deleteUser(userID){
        return axios.delete(API_URL + '/' + userID);
    }
}

export default new UserService();

