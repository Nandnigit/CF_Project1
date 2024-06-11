// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import "../Footer/Footer.css";
// import { useNavigate } from "react-router-dom";
// import toast from 'react-hot-toast';
// import axios from "axios";

// function Login() {
//   const [role, setRole] = useState("student");
//   const navigate = useNavigate();

//   const handlelogin = async (e) => {
//     e.preventDefault();
//     const rawdata = new FormData(e.target);
//     const formData = Object.fromEntries(rawdata);
//     console.log(formData);
//     if (!formData.email || !formData.password) {
//       console.log("Details are required");
//     } else {
//       try {
//         const response = await axios.post(
//           "https://novajobs.us/api/students/login",
//           formData,
//           { withCredentials: true }
//         );
//         if (response.status === 201) {
//           toast.success("Logged-in successfully!");
//           navigate('/');
//         } else {
//           toast.error("Failed to Logged-in.");
//           navigate('/login');
//         }
//         console.log("login Response", response);

//         // Store token and user data in localStorage
//         // localStorage.setItem('token', JSON.stringify(response.data.token));
//         // localStorage.setItem('userid', JSON.stringify({
//         //   id: response.data.data._id,
//         //   name: response.data.data.username
//         // }));

//         // Update context
//         // userId.setID(response.data.token);
//         // userId.setname(response.data.data.username);

//         // Navigate based on user role
//         // if (!response.data.data.isTrainer) {
//         //   navigate("/");
//         // } else {
//         //   navigate("/");
//         // }
//       } catch (err) {
//         console.log(err);
//         toast.error("An error occurred. Please try again.");
//       }
//     }
//   };

//   const handletrainerlogin =async (e) => {
//     e.preventDefault();
//     const rawdata = new FormData(e.target);
//     const formData = Object.fromEntries(rawdata);
//     console.log(formData);
//     if(!formData.email || !formData.password)
//       {
//         console.log("details required")
//       }
//       else{
//         try {
//           const response = await axios.post(
//             "https://novajobs.us/api/trainers/login",
//             formData,
//             { withCredentials: true }
//           );
//           if (response.status === 201) {
//             toast.success("Logged-in successfully!");
//             navigate('/trainers');
//           } else {
//             toast.error("Failed to Logged-in.");
//             navigate('/login')
//           }
//           console.log("login Response", response);
  
//           // Store token and user data in localStorage
//           // localStorage.setItem('token', JSON.stringify(response.data.token));
//           // localStorage.setItem('userid', JSON.stringify({
//           //   id: response.data.data._id,
//           //   name: response.data.data.username
//           // }));
  
//           // Update context
//           // userId.setID(response.data.token);
//           // userId.setname(response.data.data.username);
  
//           // Navigate based on user role
//           // if (!response.data.data.isTrainer) {
//           //   navigate("/");
//           // } else {
//           //   navigate("/");
//           // }
//         } catch (err) {
//           console.log(err);
//           toast.error("An error occurred. Please try again.");
//         }
//       }

//   };

//   return (
//     <>
//       <div className=" " id="bgimage">
//         <div className="min-h-screen flex justify-end px-2 md:px-16 py-12">
//           <div
//             className=" p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg"
//             id="bg"
//           >
//             <h2 className="text-2xl text-white font-bold mb-6 text-center">
//               Login
//             </h2>
//             <div className="flex justify-center mb-6">
//               <button
//                 className={`px-4 py-2 font-semibold rounded-lg ${
//                   role === "student"
//                     ? "bg-yellow-500 text-white"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setRole("student")}
//               >
//                 Student
//               </button>
//               <button
//                 className={`ml-4 px-4 py-2 font-semibold rounded-lg ${
//                   role === "trainer"
//                     ? "bg-yellow-500 text-white"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setRole("trainer")}
//               >
//                 Trainer
//               </button>
//             </div>
            
//               {role === "student" ? (
//                 <>
//                   <form onSubmit={(e) => handlelogin(e)}>
//                     {/* <div className="mb-4">
//                 <label className="block text-white">Name</label>
//                 <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div> */}
//                     <div className="mb-4">
//                       <label className="block text-white">Email ID</label>
//                       <input
//                         type="email"
//                         name="email"
//                         className="w-full px-3 py-2 border rounded-md"
//                         placeholder="Enter your email ID"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-white">Password</label>
//                       <input
//                         type="password"
//                         name="password"
//                         className="w-full px-3 py-2 border rounded-md"
//                         placeholder="Enter your password"
//                       />
//                     </div>
//                     <Link to="/signup">
//                       <p className=" text-blue-300 hover:text-yellow-300 text-center py-2">
//                         New User? Create Account
//                       </p>
//                     </Link>

//                     <div className=" text-center py-2">
//                       <label className=" text-white ">
//                         {" "}
//                         I agree to Terms and condition{" "}
//                       </label>
//                       <input type="checkbox" required />
//                     </div>

//                     {/* <input type='checkbox' >
//           <p>I agree to Terms and condition</p>
//           </input> */}
//                     <button
//                       type="submit"
//                       className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md"
//                     >
//                       Login
//                     </button>
//                   </form>
//                 </>
//               ) : (
//                 <>
//                   <form onSubmit={(e) => handletrainerlogin(e)}>
//                     <div className="mb-4">
//                       <label className="block text-white">Email ID</label>
//                       <input
//                         type="email"
//                         name="email"
//                         className="w-full px-3 py-2 border rounded-md"
//                         placeholder="Enter your email ID"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-white">Password</label>
//                       <input
//                         type="password"
//                         name="password"
//                         className="w-full px-3 py-2 border rounded-md"
//                         placeholder="Enter your password"
//                       />
//                     </div>
//                     <Link to="/signup">
//                       <p className=" text-blue-300 hover:text-yellow-300 text-center py-2">
//                         New User? Create Account
//                       </p>
//                     </Link>

//                     <div className=" text-center py-2">
//                       <label className=" text-white ">
//                         {" "}
//                         I agree to Terms and condition{" "}
//                       </label>
//                       <input type="checkbox" required />
//                     </div>

//                     {/* <input type='checkbox' >
//           <p>I agree to Terms and condition</p>
//           </input> */}
//                     <button
//                       type="submit"
//                       className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md"
//                     >
//                       Login
//                     </button>
//                     {/* <div className="mb-4">
//                 <label className="block text-white">Special Code</label>
//                 <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your special code" />
//               </div> */}
//                   </form>
//                 </>
//               )}
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios";

function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = async (e, url) => {
    e.preventDefault();
    const rawdata = new FormData(e.target);
    const formData = Object.fromEntries(rawdata);
    console.log(formData);

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
    } else {
      try {
        const response = await axios.post(
          url,
          formData,
           {withCredentials: true },
          {
            headers: {
            'Content-Type': 'application/json',
          }
        }
        );
        if (response.status === 201) {
          toast.success("Logged-in successfully!");
          navigate(role === "student" ? '/' : '/trainers');
        } else {
          toast.error("Failed to log in.");
        }
        console.log("login Response", response);
      } catch (err) {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className=" " id="bgimage">
        <div className="min-h-screen flex justify-end px-2 md:px-16 py-12">
          <div
            className=" p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg"
            id="bg"
          >
            <h2 className="text-2xl text-white font-bold mb-6 text-center">
              Login
            </h2>
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 font-semibold rounded-lg ${
                  role === "student"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={`ml-4 px-4 py-2 font-semibold rounded-lg ${
                  role === "trainer"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setRole("trainer")}
              >
                Trainer
              </button>
            </div>
            
            {role === "student" ? (
              <form onSubmit={(e) => handleLogin(e, "https://novajobs.us/api/students/login")}>
                <div className="mb-4">
                  <label className="block text-white">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
                <Link to="/signup">
                  <p className=" text-blue-300 hover:text-yellow-300 text-center py-2">
                    New User? Create Account
                  </p>
                </Link>

                <div className=" text-center py-2">
                  <label className=" text-white ">
                    {" "}
                    I agree to Terms and condition{" "}
                  </label>
                  <input type="checkbox" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            ) : (
              <form onSubmit={(e) => handleLogin(e, "https://novajobs.us/api/trainers/login")}>
                <div className="mb-4">
                  <label className="block text-white">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
                <Link to="/signup">
                  <p className=" text-blue-300 hover:text-yellow-300 text-center py-2">
                    New User? Create Account
                  </p>
                </Link>

                <div className=" text-center py-2">
                  <label className=" text-white ">
                    {" "}
                    I agree to Terms and condition{" "}
                  </label>
                  <input type="checkbox" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
