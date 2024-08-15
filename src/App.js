import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployee from './components/CreateEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
            <Route path="/view-component/:id" element={<ViewEmployeeComponent/>} />
          </Routes>
        </div>
        <FooterComponent />
    </Router>
  );
}

export default App;
