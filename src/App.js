import "./App.css";
import Admin_login from "./Pages/Admin/admin_login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Freelancer_login from "./Pages/Freelancers/login/freelancer_login";
import Freelancer_register from "./Pages/Freelancers/register/freelancer_register";
import User_login from "./Pages/User/login/user_login";
import User_register from "./Pages/User/register/user_register";
import Home from "./Pages/Common/Home/home";
import Forgot_password from "./Pages/User/forgot_password/forgot_password";
import ViewAllFreelancers from "./Pages/User/ViewAllFreelancers/ViewAllFreelancers";
import DetailedViewFreelancers from "./Pages/User/DetailedViewFreelancers/DetailedViewFreelancers";
function App() {
  return (
    <div className='container-fluid bg-hero m-auto w-100'>
    
      <BrowserRouter>
        <Routes>
          {/* user routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<User_login />} />
          <Route path="/user-register" element={<User_register />} />
          <Route path="/user-forgot-password" element={<Forgot_password />} />
          <Route path="/view-all-freelancers" element={<ViewAllFreelancers />} />
          <Route path='/detailed-view-freelancers' element={<DetailedViewFreelancers />} />
          {/* Freelancer routes  */}
          <Route path="/freelancer-login" element={<Freelancer_login />} />
          <Route
            path="/freelancer-register"
            element={<Freelancer_register />}
          />
          {/* Admin routes  */}
          <Route path="/admin" element={<Admin_login />} />
          <Route path="/*" element={<h1> Please re-check the Route </h1>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
