import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';
import AddUserComponent from './components/AddUserComponent';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListUserComponent />} />
            <Route path="/users" element={<ListUserComponent />} />
            <Route path="/add-user" element={<CreateUser />} />
            <Route path="/edit-user/:userId" element={<UpdateUser />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
