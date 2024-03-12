import './App.css';
import Admin_login from './Pages/Admin/admin_login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Freelancer_login from './Pages/Freelancers/login/freelancer_login';
import Freelancer_register from './Pages/Freelancers/register/freelancer_register';
import User_login from './Pages/User/login/user_login';
import User_register from './Pages/User/register/user_register';
import Home from './Pages/Common/Home/home';
import Navbar from './Pages/Common/Navbar/navbar';
import Footer from './Pages/Common/Footer/footer';
function App() {
  return (
    <div className='container-xxl bg-hero m-auto '>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin_login />} />
          <Route path='/freelancer-login' element={<Freelancer_login/>}/>
          <Route path='/freelancer-register' element={<Freelancer_register/>}/>
          <Route path='/user-login' element={<User_login/>}/>
          <Route path='/user-register' element={<User_register/>}/>
        </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
