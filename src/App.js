
import './App.css';
import Navbar from './Page/Sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Purchase from './Page/Purchase/Purchase';
import Dashboard from './Page/Dashboard/Dashboard';
import Login from './Page/Login/Login';
import Blog from './Page/Blog/Blog';

function App() {
  return (
    <div className="App">
        <Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Purchase" element={<Purchase></Purchase>}></Route>
                <Route path="/Dashbord" element={<Dashboard></Dashboard>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
            </Routes>
        </Navbar>
    </div>
  );
}

export default App;
