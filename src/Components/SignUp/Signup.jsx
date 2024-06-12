// import React, { useState } from 'react';
// import '../Login/Login.css';
// import '../Footer/Footer.css';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import axios from "axios";
// import validator from 'validator';

// function Signup() {
//   const [role, setRole] = useState('student');
//   const [registerValues, setRegisterValues] = useState({
//     Name: "",
//     email: "",
//     password: "",
//   });
//   console.log(registerValues, "values");
//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterValues({ ...registerValues, [name]: value });
//     // name
    
//   };
//   const navigate = useNavigate();

// //   async function onSignUp(e) {
// //     e.preventDefault();
// //     const body = {
// //       name: registerValues.Name,
// //       email: registerValues.email,
// //       password: registerValues.password,
// //     };
// //     console.log(body);
// //     try {
// //       axios({
// //         url: "https://novajobs.us/api/employeer/auth/signup",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: token,
// //         },
// //         method: "post",
// //         data: body,
// //       })
// //         .then((res) => {
// //           console.log(res);
// //           localStorage.setItem("employeeLoginToken", res.data.data);
// //           showToastSuccess('Success');
// //           setShowUpload(false);
// //         })
// //         .catch((err) => {
// //           console.log(err);
// //           showToastError('Employee already registed from this email before');
// //         });
        
// //     } catch (error) {
// //       console.log(error);
      
// //     }
// //   }


//   const handleSignup = async (e, url) => {
//     const body = {
//         name: registerValues.Name,
//         email: registerValues.email,
//         password: registerValues.password,
//       };
//     e.preventDefault();
//     const rawData = new FormData(e.target);
//     const formData = Object.fromEntries(rawData);
//     console.log(formData);

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password are required");
//     } else {
//       try {
//         // const response = await axios.post(
//         //   url,
//         //   formData,
//         //   { withCredentials: true ,
          
//         //     headers: {
//         //     'Content-Type': 'application/json',
//         //   },
//         // }
//         // );
//         const response = await fetch(url, {
//             method: 'POST',
//             // mode: 'cors',
//             headers: {
//             //   Authorization: `Bearer: ${token}`,
//               'Content-Type': 'application/json',
//             },
//             data: body,
//           })
//           console.log(response.json())
          
//         if (response.status === 201) {
//           toast.success("Signed up successfully!");
//           navigate('/login');
//         } else {
//           toast.error("Failed to sign up.");
//         }
//         console.log("Signup Response", response);

//         // Navigate based on user role
//         if (role === 'student' && !response.data.data.isTrainer) {
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
//     <div id='bgimage'>
//       <div className="min-h-screen flex justify-end px-2 md:px-16 py-12">
//         <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg" id='bg'>
//           <h2 className="text-2xl text-white font-bold text-center">Welcome Back</h2>
//           <h3 className='text-xl text-white font-semibold py-5 text-center'>Please Create Your Account Here</h3>
//           <div className="flex justify-center mb-6">
//             <button
//               className={`px-4 py-2 font-semibold rounded-lg ${role === 'student' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
//               onClick={() => setRole('student')}
//             >
//               Student
//             </button>
//             <button
//               className={`ml-4 px-4 py-2 font-semibold rounded-lg ${role === 'trainer' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
//               onClick={() => setRole('trainer')}
//             >
//               Trainer
//             </button>
//           </div>
          
//           {role === 'student' ? (
//             <form onSubmit={(e) => handleSignup(e, 'https://novajobs.us/api/students/register')}>
//               <div className="mb-4">
//                 <label className="block text-white">First Name</label>
//                 <input type="text" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your First Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Last Name</label>
//                 <input type="text" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Last Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Email ID</label>
//                 <input type="email" name="email" value={registerValues.email} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email ID" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Phone</label>
//                 <input type="number" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your phone number" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Password</label>
//                 <input type="password" name="password" value={registerValues.password} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
//               </div>
//               {/* <div className="mb-4">
//                 <label className="block text-white">Country_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">State_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">City_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Qualification_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div> */}
//               <div className='py-5 text-white text-center'>
//                 <label className='py-5 text-white'> I agree to Terms and condition </label>
//                 <input type="checkbox" required />
//               </div>
//               <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md">
//                 SignUp
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={(e) => handleSignup(e, 'https://novajobs.us/api/trainers/register')}>
//               <div className="mb-4">
//                 <label className="block text-white">First Name</label>
//                 <input type="text" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Last Name</label>
//                 <input type="text" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Email ID</label>
//                 <input type="email" name="email" value={registerValues.email} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email ID" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Phone</label>
//                 <input type="number" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Password</label>
//                 <input type="password" name="password" value={registerValues.password} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
//               </div>
//               {/* <div className="mb-4">
//                 <label className="block text-white">Country_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">State_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">City_Id</label>
//                 <input type="checkbox" name='Name' value={registerValues.Name} onChange={handleRegisterChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name" />
//               </div> */}
//               <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md">
//                 SignUp
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState, useEffect } from 'react';
// import '../Login/Login.css';
// import '../Footer/Footer.css';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import axios from 'axios';

// function Signup() {
//   const [role, setRole] = useState('student');
//   const [registerValues, setRegisterValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     qualificationId: '',
//   });

//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [qualifications, setQualifications] = useState([]);

//   const navigate = useNavigate();

//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterValues({ ...registerValues, [name]: value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!registerValues.email || !registerValues.password) {
//       toast.error('Email and Password are required');
//       return;
//     }

//     const body = {
//       firstName: registerValues.firstName,
//       lastName: registerValues.lastName,
//       email: registerValues.email,
//       phone: registerValues.phone,
//       password: registerValues.password,
//       countryId: registerValues.countryId,
//       stateId: registerValues.stateId,
//       cityId: registerValues.cityId,
//       qualificationId: role === 'student' ? registerValues.qualificationId : undefined,
//     };

//     try {
//       const response = await axios.post(
//         role === 'student' ? 'https://novajobs.us/api/students/register' : 'https://novajobs.us/api/trainers/register',
//         body,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (response.status === 201) {
//         toast.success('Signed up successfully!');
//         navigate('/login');
//       } else {
//         toast.error('Failed to sign up.');
//       }

//       if (role === 'student' && !response.data.data.isTrainer) {
//         navigate('/');
//       } else {
//         navigate('/trainer');
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error('An error occurred. Please try again.');
//     }
//   };

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get(
//           role === 'student' ? 'https://novajobs.us/api/students/countries' : 'https://novajobs.us/api/trainers/countries'
//         );
//         setCountries(Array.isArray(response.data) ? response.data : []);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };
//     fetchCountries();
//   }, [role]);

//   useEffect(() => {
//     if (registerValues.countryId) {
//       const fetchStates = async () => {
//         try {
//           const response = await axios.get(
//             role === 'student' ? `https://novajobs.us/api/students/stats/231` : `https://novajobs.us/api/trainers/stats/231`
//           );
//           console.log(response);
//           setStates(Array.isArray(response.data) ? response.data : []);
//         } catch (error) {
//           console.error('Error fetching states:', error);
//         }
//       };
//       fetchStates();
//     }
//   }, [registerValues.countryId, role]);

//   useEffect(() => {
//     if (registerValues.stateId) {
//       const fetchCities = async () => {
//         try {
//           const response = await axios.get(
//             role === 'student' ? `https://novajobs.us/api/students/cities/3919` : `https://novajobs.us/api/trainers/cities/3919`
//           );
//           setCities(Array.isArray(response.data) ? response.data : []);

//         } catch (error) {
//           console.error('Error fetching cities:', error);
//         }
//       };
//       fetchCities();
//     }
//   }, [registerValues.stateId, role]);
//    console.log(cities,states);

//   useEffect(() => {
//     if (role === 'student') {
//       const fetchQualifications = async () => {
//         try {
//           const response = await axios.get('https://novajobs.us/api/students/qualifications');
//           setQualifications(Array.isArray(response.data) ? response.data : []);
//         } catch (error) {
//           console.error('Error fetching qualifications:', error);
//         }
//       };
//       fetchQualifications();
//     }
//   }, [role]);

//   return (
//     <div id='bgimage'>
//       <div className='min-h-screen flex justify-end px-2 md:px-16 py-12'>
//         <div className='p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg' id='bg'>
//           <h2 className='text-2xl text-white font-bold text-center'>Welcome Back</h2>
//           <h3 className='text-xl text-white font-semibold py-5 text-center'>Please Create Your Account Here</h3>
//           <div className='flex justify-center mb-6'>
//             <button
//               className={`px-4 py-2 font-semibold rounded-lg ${role === 'student' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
//               onClick={() => setRole('student')}
//             >
//               Student
//             </button>
//             <button
//               className={`ml-4 px-4 py-2 font-semibold rounded-lg ${role === 'trainer' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
//               onClick={() => setRole('trainer')}
//             >
//               Trainer
//             </button>
//           </div>

//           <form onSubmit={handleSignup}>
//             <div className='mb-4'>
//               <label className='block text-white'>First Name</label>
//               <input
//                 type='text'
//                 name='firstName'
//                 value={registerValues.firstName}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your First Name'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>Last Name</label>
//               <input
//                 type='text'
//                 name='lastName'
//                 value={registerValues.lastName}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your Last Name'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>Email ID</label>
//               <input
//                 type='email'
//                 name='email'
//                 value={registerValues.email}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your email ID'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>Phone</label>
//               <input
//                 type='number'
//                 name='phone'
//                 value={registerValues.phone}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your phone number'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>Password</label>
//               <input
//                 type='password'
//                 name='password'
//                 value={registerValues.password}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your password'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>Country</label>
//               <select
//                 name='countryId'
//                 value={registerValues.countryId}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//               >
//                 <option value=''>Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.id} value={country.id}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>State</label>
//               <select
//                 name='stateId'
//                 value={registerValues.stateId}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//               >
//                 <option value=''>Select State</option>
//                 {states.map((state) => (
//                   <option key={state.id} value={state.id}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className='mb-4'>
//               <label className='block text-white'>City</label>
//               <select
//                 name='cityId'
//                 value={registerValues.cityId}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//               >
//                 <option value=''>Select City</option>
//                 {cities.map((city) => (
//                   <option key={city.id} value={city.id}>
//                     {city.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {role === 'student' && (
//               <div className='mb-4'>
//                 <label className='block text-white'>Qualification</label>
//                 <select
//                   name='qualificationId'
//                   value={registerValues.qualificationId}
//                   onChange={handleRegisterChange}
//                   className='w-full px-3 py-2 border rounded-md'
//                 >
//                   <option value=''>Select Qualification</option>
//                   {qualifications.map((qualification) => (
//                     <option key={qualification.id} value={qualification.id}>
//                       {qualification.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}
//             <div className='py-5 text-white text-center'>
//               <label className='py-5 text-white'> I agree to Terms and condition </label>
//               <input type='checkbox' required />
//             </div>
//             <button type='submit' className='w-full bg-yellow-500 text-white px-4 py-2 rounded-md'>
//               SignUp
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React, { useState, useEffect } from 'react';
import '../Login/Login.css';
import '../Footer/Footer.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Signup() {
  const [role, setRole] = useState('student');
  const [registerValues, setRegisterValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    countryId: '',
    stateId: '',
    cityId: '',
    qualificationId: '',
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [qualifications, setQualifications] = useState([]);

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!registerValues.email || !registerValues.password) {
      toast.error('Email and Password are required');
      return;
    }

    const body = {
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      phone: registerValues.phone,
      password: registerValues.password,
      countryId: registerValues.countryId,
      stateId: registerValues.stateId,
      cityId: registerValues.cityId,
      qualificationId: role === 'student' ? registerValues.qualificationId : undefined,
    };

    try {
      const response = await axios.post(
        role === 'student' ? 'https://novajobs.us/api/students/register' : 'https://novajobs.us/api/trainers/register',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        toast.success('Signed up successfully!');
        navigate('/login');
      } else {
        toast.error('Failed to sign up.');
      }

      if (role === 'student' && !response.data.data.isTrainer) {
        navigate('/');
      } else {
        navigate('/trainer');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          role === 'student' ? 'https://novajobs.us/api/students/countries' : 'https://novajobs.us/api/trainers/countries'
        );
        console.log(response);
        setCountries(Array.isArray(response.data) ? response.data : []);
        console.log(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, [role]);

  useEffect(() => {
    if (registerValues.countryId) {
      const fetchStates = async () => {
        try {
          const response = await axios.get(
            role === 'student' ? `https://novajobs.us/api/students/stats/231` : `https://novajobs.us/api/trainers/stats/231`
          );
          console.log(response);
          setStates(Array.isArray(response.data) ? response.data : []);
          console.log(states)
        } catch (error) {
          console.error('Error fetching states:', error);
        }
      };
      fetchStates();
    }
  }, [registerValues.countryId, role]);

  useEffect(() => {
    if (registerValues.stateId) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            role === 'student' ? `https://novajobs.us/api/students/cities/3919` : `https://novajobs.us/api/trainers/cities/3919`
          );
          setCities(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };
      fetchCities();
    }
  }, [registerValues.stateId, role]);
   console.log(cities,states);

  useEffect(() => {
    if (role === 'student') {
      const fetchQualifications = async () => {
        try {
          const response = await axios.get('https://novajobs.us/api/students/qualifications');
          setQualifications(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
          console.error('Error fetching qualifications:', error);
        }
      };
      fetchQualifications();
    }
  }, [role]);

  return (
    <div id='bgimage'>
      <div className='min-h-screen flex justify-end px-2 md:px-16 py-12'>
        <div className='p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg' id='bg'>
          <h2 className='text-2xl text-white font-bold text-center'>Welcome Back</h2>
          <h3 className='text-xl text-white font-semibold py-5 text-center'>Please Create Your Account Here</h3>
          <div className='flex justify-center mb-6'>
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

          <form onSubmit={handleSignup}>
            <div className='mb-4'>
              <label className='block text-white'>First Name</label>
              <input
                type='text'
                name='firstName'
                value={registerValues.firstName}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your First Name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white'>Last Name</label>
              <input
                type='text'
                name='lastName'
                value={registerValues.lastName}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your Last Name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white'>Email ID</label>
              <input
                type='email'
                name='email'
                value={registerValues.email}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your email ID'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white'>Phone</label>
              <input
                type='number'
                name='phone'
                value={registerValues.phone}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your phone number'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white'>Password</label>
              <input
                type='password'
                name='password'
                value={registerValues.password}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your password'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white'>Country</label>
              <select
                name='countryId'
                value={registerValues.countryId}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
              >
                <option value=''>Select Country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-white'>State</label>
              <select
                name='stateId'
                value={registerValues.stateId}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
              >
                <option value=''>Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-white'>City</label>
              <select
                name='cityId'
                value={registerValues.cityId}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
              >
                <option value=''>Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {role === 'student' && (
              <div className='mb-4'>
                <label className='block text-white'>Qualification</label>
                <select
                  name='qualificationId'
                  value={registerValues.qualificationId}
                  onChange={handleRegisterChange}
                  className='w-full px-3 py-2 border rounded-md'
                >
                  <option value=''>Select Qualification</option>
                  {qualifications.map((qualification) => (
                    <option key={qualification.id} value={qualification.id}>
                      {qualification.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button type='submit' className='w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

