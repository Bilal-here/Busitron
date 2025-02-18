// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Define the base URL for the API
// const API_BASE_URL = "http://localhost:5000";

// const AdminDashboard = ({isLoggedIn , setIsLoggedIn}) => {
//   console.log(isLoggedIn)
//   const [title, setTitle] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [experience, setExperience] = useState("");
//   const [salary, setSalary] = useState("");
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState("");  // For handling error messages

//   // Get token from localStorage
//   const token = localStorage.getItem("Token");


//   // Fetch jobs from the API
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/jobs`, {
//           headers: {
//             Authorization: token,
//           },
//         });
//         setJobs(response.data);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//         setError("Error fetching jobs. Please try again later.");
//       }
//     };

//     if (token) fetchJobs();  // Only fetch jobs if the token exists
//   }, [token]);

//   const handleAddJob = async (e) => {
//     e.preventDefault();
//     if (!title || !jobDescription || !experience || !salary) return;

//     const newJob = { title, jobDescription, experience, salary };

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/admin/createJob`,
//         newJob,
//         {
//           headers: { Authorization: token },
//         }
//       );

//       if (response.status === 201) {
//         setJobs([...jobs, response.data.newJob]); // Add the new job to the list
//         setTitle("");
//         setJobDescription("");
//         setExperience("");
//         setSalary("");
//       }
//     } catch (error) {
//       console.error("Error adding job:", error);
//       setError("Error adding job. Please try again later.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // Clear token on logout
//     alert("Logged out successfully!");
//     window.location.href = "/login"; // Redirect to login page
//   };

//   return (
//     <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
//       <div className="max-w-4xl w-full space-y-8">
//         {/* Dashboard Header */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-4xl font-extrabold border-l-8 border-blue-500 pl-6">
//             Admin Dashboard
//           </h1>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition duration-300"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Error message */}
//         {error && <p className="text-red-500">{error}</p>}

//         {/* Job Posting Form */}
//         <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold border-l-8 border-blue-500 pl-6 mb-4">
//             Add a New Job
//           </h2>
//           <form onSubmit={handleAddJob} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Job Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
//             />
//             <textarea
//               placeholder="Job Description"
//               value={jobDescription}
//               onChange={(e) => setJobDescription(e.target.value)}
//               className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
//               rows="3"
//             />
//             <input
//               type="text"
//               placeholder="Experience (e.g., 2+ years)"
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
//             />
//             <input
//               type="text"
//               placeholder="Salary (e.g., ₹50,000/month)"
//               value={salary}
//               onChange={(e) => setSalary(e.target.value)}
//               className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
//             >
//               Post Job
//             </button>
//           </form>
//         </div>

//         {/* Job List */}
//         {jobs.length > 0 && (
//           <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold border-l-8 border-blue-500 pl-6 mb-4">
//               Posted Jobs
//             </h2>
//             <ul className="space-y-3">
//               {jobs.map((job, index) => (
//                 <li
//                   key={index}
//                   className="p-3 bg-gray-900 border border-gray-700 rounded-lg"
//                 >
//                   <h3 className="text-lg font-semibold">{job.title}</h3>
//                   <p className="text-gray-400">{job.jobDescription}</p>
//                   <p className="text-gray-400">
//                     <strong>Experience:</strong> {job.experience}
//                   </p>
//                   <p className="text-gray-400">
//                     <strong>Salary:</strong> {job.salary}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
