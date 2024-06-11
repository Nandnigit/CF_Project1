// import React, { useState } from 'react';
// import '../Login/Login.css'
// import '../Footer/Footer.css'
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import axios from "axios";

// function Signup() {
//   const [role, setRole] = useState('student');
//   const navigate = useNavigate();

//   const handlesignup = async(e)=>{
//     e.preventDefault();
//     const rawdata = new FormData(e.target);
//     const formData = Object.fromEntries(rawdata);
//     console.log(formData)
//     if(!formData.email || !formData.password){
//       console.log("Details are required");
//     }
//     else {
//       try {
//         const response = await axios.post(
//           'https://novajobs.us/api/students/register',
//           formData,
//           { withCredentials: true }
//         );
//         if (response.status === 201) {
//           toast.success("Logged-in successfully!");
//           navigate('/login')
//         } else {
//           toast.error("Failed to Logged-in.");
//           navigate('/signup')
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
//         if (!response.data.data.isTrainer) {
//           navigate('/');
//         } else {
//           navigate('/trainer');
//         }
//       } catch (err) {
//         console.log(err);
//         toast.error("An error occurred. Please try again.");
//       }
//     }
//   };
  


//   const handletrainersignup = async(e)=>{
//     e.preventDefault();
//     const rawdata = new FormData(e.target);
//     const formData = Object.fromEntries(rawdata);
//     console.log(formData)
//     if(!formData.email || !formData.password){
//       console.log("Details are required");
//     }
//     else {
//       try {
//         const response = await axios.post(
//           'https://novajobs.us/api/trainers/register',
//           formData,
//           { withCredentials: true }
//         );
//         if (response.status === 201) {
//           toast.success("signup successfully!");
//           navigate('/login')
//         } else {
//           toast.error("Failed to Logged-in.");
//           navigate('/signup')
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
//         if (!response.data.data.isTrainer) {
//           navigate('/');
//         } else {
//           navigate('/trainer');
//         }
//       } catch (err) {
//         console.log(err);
//         toast.error("An error occurred. Please try again.");
//       }
//     }
//   };
//   return (
//     <>
//     <div className=' ' id='bgimage'>
//     <div className="min-h-screen flex justify-end px-2 md:px-16 py-12" >
//       <div className=" p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg" id='bg'>
//         <h2 className="text-2xl text-white font-bold text-center">Welcome Back</h2>
//         <h3 className=' text-xl text-white font-semibold py-5 text-center'>Please Create Your Account Here</h3>
//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-4 py-2 font-semibold rounded-lg ${role === 'student' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => setRole('student')}
//           >
//             Student
//           </button>
//           <button
//             className={`ml-4 px-4 py-2 font-semibold rounded-lg ${role === 'trainer' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => setRole('trainer')}
//           >
//             Trainer
//           </button>
//         </div>
        
//           {role === 'student' ? (
//             <>
//              <form
//         onSubmit={(e) => handlesignup(e)}
//         >

//               <div className="mb-4">
//                 <label className="block text-white">Name</label>
//                 <input type="text" name='name' className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Email ID</label>
//                 <input type="email" name="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email ID" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Password</label>
//                 <input type="password" name="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
//               </div>
//               <div className=' py-5 text-white  text-center '>
// <label className=' py-5 text-white'> I agree to Terms and condition </label>
// <input type="checkbox" required/>
// </div>

          
//           {/* <input type='checkbox' >
//           <p>I agree to Terms and condition</p>
//           </input> */}
//           <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md">
//             SignUp
//           </button>
//               </form>
//             </>
//           ) : (
//             <>
//               <form
//         onSubmit={(e) => handletrainersignup(e)}
//         >
//               <div className="mb-4">
//                 <label className="block text-white">Email ID</label>
//                 <input type="text" name='email' className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email ID" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Password</label>
//                 <input type="password" name='password' className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
//               </div>
//               {/* <div className="mb-4">
//                 <label className="block text-white">Special Code</label>
//                 <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your special code" />
//               </div> */}
//               <div className=' py-5 text-white  text-center '>
// <label className=' py-5 text-white'> I agree to Terms and condition </label>
// <input type="checkbox" required/>
// </div>

          
//           {/* <input type='checkbox' >
//           <p>I agree to Terms and condition</p>
//           </input> */}
//           <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md">
//             SignUp
//           </button>
//               </form>
//             </>
//           )}


        
//       </div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import '../Login/Login.css';
import '../Footer/Footer.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";

function Signup() {
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSignup = async (e, url) => {
    e.preventDefault();
    const rawData = new FormData(e.target);
    const formData = Object.fromEntries(rawData);
    console.log(formData);

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
    } else {
      try {
        const response = await axios.post(
          url,
          formData,
          { withCredentials: true },
          {
            headers: {
            'Content-Type': 'application/json',
          }
        }
        );
        if (response.status === 201) {
          toast.success("Signed up successfully!");
          navigate('/login');
        } else {
          toast.error("Failed to sign up.");
        }
        console.log("Signup Response", response);

        // Navigate based on user role
        if (role === 'student' && !response.data.data.isTrainer) {
          navigate('/');
        } else {
          navigate('/trainer');
        }
      } catch (err) {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div id='bgimage'>
      <div className="min-h-screen flex justify-end px-2 md:px-16 py-12">
        <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg" id='bg'>
          <h2 className="text-2xl text-white font-bold text-center">Welcome Back</h2>
          <h3 className='text-xl text-white font-semibold py-5 text-center'>Please Create Your Account Here</h3>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-semibold rounded-lg ${role === 'student' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button
              className={`ml-4 px-4 py-2 font-semibold rounded-lg ${role === 'trainer' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setRole('trainer')}
            >
              Trainer
            </button>
          </div>
          
          {role === 'student' ? (
            <form onSubmit={(e) => handleSignup(e, 'https://novajobs.us/api/students/register')}>
              <div className="mb-4">
                <label className="block text-white">Name</label>
                <input type="text" name='name' className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Email ID</label>
                <input type="email" name="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email ID" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Password</label>
                <input type="password" name="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
              </div>
              <div className='py-5 text-white text-center'>
                <label className='py-5 text-white'> I agree to Terms and condition </label>
                <input type="checkbox" required />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md">
                SignUp
              </button>
            </form>
          ) : (
            <form onSubmit={(e) => handleSignup(e, 'https://novajobs.us/api/trainers/register')}>
              <div className="mb-4">
                <label className="block text-white">Email ID</label>
                <input type="email" name='email' className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email ID" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Password</label>
                <input type="password" name='password' className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
              </div>
              <div className='py-5 text-white text-center'>
                <label className='py-5 text-white'> I agree to Terms and condition </label>
                <input type="checkbox" required />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md">
                SignUp
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
