
import './App.css';
import Navbar from './Page/Sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Purchase from './Page/Purchase/Purchase';
import Dashboard from './Page/Dashboard/Dashboard';
import Login from './Page/Login/Login';
import Blog from './Page/Blog/Blog';
import SingUp from './Page/Login/SingUp';
import RequireAuth from './Page/Login/RequireAuth';
import MyOrders from './Page/Dashboard/MyOrders';
import AddReview from './Page/Dashboard/AddReview';
import MyProfile from './Page/Dashboard/MyProfile';
import NotFound from './Page/Sheard/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Purchase/:id" element={<RequireAuth>
                  <Purchase></Purchase>
                  
                </RequireAuth>}>
                  
                
                </Route>
                
                <Route path="/Dashbord" element={<RequireAuth>
                  <Dashboard></Dashboard>
                </RequireAuth>}>
                  <Route index element={<MyProfile></MyProfile>}></Route>
                  <Route path='AddReview' element={<AddReview></AddReview>}></Route>
                  <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
                </Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/singup" element={<SingUp></SingUp>}></Route>
                
                <Route path='*'element={<NotFound></NotFound>}></Route>
            </Routes>
        </Navbar>
    </div>
  );
}

export default App;
