import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
    </Router>
  );
}

export default App;
