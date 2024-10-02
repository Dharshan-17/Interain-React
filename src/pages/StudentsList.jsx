// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt, faUserGraduate, faCog, faSignOutAlt, faMoon, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

// // Sample student data
// const studentsData = [
//     {
//         id: 1,
//         registerNumber: 'ANCS001',
//         name: 'Aishwarya',
//         department: 'Computer Science',
//         graduationYear: 2023,
//         contactNo: '864545465',
//         status: 'Passed',
//     },
//     {
//         id: 2,
//         registerNumber: 'ANCS002',
//         name: 'Pooja',
//         department: 'B.Com',
//         graduationYear: 2023,
//         contactNo: '864545465',
//         status: 'Failed',
//     },
//     {
//         id: 3,
//         registerNumber: 'ANCS003',
//         name: 'Meera',
//         department: 'Journalism',
//         graduationYear: 2023,
//         contactNo: '864545465',
//         status: 'Passed',
//     },
//     {
//         id: 4,
//         registerNumber: 'ANCS004',
//         name: 'Divya',
//         department: 'Viscom',
//         graduationYear: 2024,
//         contactNo: '864545465',
//         status: 'Failed',
//     },
//     {
//         id: 5,
//         registerNumber: 'ANCS005',
//         name: 'Priya',
//         department: 'Corporate Secretaryship',
//         graduationYear: 2023,
//         contactNo: '864545465',
//         status: 'Passed',
//     },
//     {
//         id: 6,
//         registerNumber: 'ANCS006',
//         name: 'Shreya',
//         department: 'Journalism',
//         graduationYear: 2023,
//         contactNo: '864545465',
//         status: 'Failed',
//     },
//     {
//         id: 7,
//         registerNumber: 'ANCS007',
//         name: 'Adhitya',
//         department: 'Electrical',
//         graduationYear: 2024,
//         contactNo: '864545465',
//         status: 'Passed',
//     },
// ];

// // ToggleSwitch component
// const ToggleSwitch = ({ isToggled, onToggle }) => {
//     return (
//         <label className="flex items-center cursor-pointer">
//             <div className="relative">
//                 <input
//                     type="checkbox"
//                     className="sr-only"
//                     checked={isToggled}
//                     onChange={onToggle}
//                 />
//                 <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
//                 <div
//                     className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isToggled ? 'translate-x-full bg-blue-500' : ''
//                         }`}
//                 ></div>
//             </div>
//             <span className="ml-3 text-gray-600">{isToggled ? 'Light Mode' : 'Dark Mode'}</span>
//         </label>
//     );
// }

// // Sidebar component
// const Sidebar = () => {
//     const [isToggled, setIsToggled] = useState(false);

//     const handleToggle = () => {
//         setIsToggled(!isToggled);
//     };

//     return (
//         <div className="w-64 bg-white p-6 shadow-md">
//             <div className="flex items-center mb-6">
//                 <img src="/logo.jpg" alt="X Planet Logo" className="w-16 h-16" />
//                 <h1 className="text-xl font-bold ml-2">X Planet</h1>
//             </div>
//             <ul className="space-y-4">
//                 <SidebarItem label="Overview" icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
//                 <SidebarItem label="Students" icon={<FontAwesomeIcon icon={faUserGraduate} />} />
//                 <SidebarItem label="Settings" icon={<FontAwesomeIcon icon={faCog} />} />
//                 <SidebarItem label="Log Out" icon={<FontAwesomeIcon icon={faSignOutAlt} />} />
//                 <li>
//                     <ToggleSwitch isToggled={isToggled} onToggle={handleToggle} />
//                 </li>
//             </ul>
//         </div>
//     );
// };

// // SidebarItem component
// const SidebarItem = ({ label, icon }) => {
//     return (
//         <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
//             {icon}
//             <span className="ml-3">{label}</span>
//         </li>
//     );
// };

// // StudentRow component
// const StudentRow = ({ student }) => {
//     const statusStyles =
//         student.status === 'Passed'
//             ? 'bg-green-100 text-green-700'
//             : 'bg-red-100 text-red-700';

//     return (
//         <tr className="border-b">
//             <td className="px-4 py-3">{student.id}</td>
//             <td className="px-4 py-3">{student.registerNumber}</td>
//             <td className="px-4 py-3 capitalize">{student.name}</td>
//             <td className="px-4 py-3">{student.department}</td>
//             <td className="px-4 py-3">{student.graduationYear}</td>
//             <td className="px-4 py-3">{student.contactNo}</td>
//             <td className="px-4 py-3">
//                 <span className={`px-2 py-1 rounded-md ${statusStyles}`}>
//                     {student.status}
//                 </span>
//             </td>
//             <td className="px-4 py-3 flex space-x-2">
//                 <FontAwesomeIcon icon={faEye} className="cursor-pointer text-gray-600 hover:text-blue-500" title="View" />
//                 <FontAwesomeIcon icon={faPen} className="cursor-pointer text-gray-600 hover:text-blue-500" title="Edit" />
//                 <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-gray-600 hover:text-blue-500" title="Delete" />
//             </td>
//         </tr>
//     );
// };

// // StudentsList component
// const StudentsList = () => {
//     return (
//         <div className="flex bg-gray-100 font-sans min-h-screen">
//             <Sidebar />
//             <div className="flex-1 px-6 py-8">
//                 <h2 className="text-2xl font-bold mb-6">Students List</h2>
//                 <div className="flex justify-end mb-6">
//                     <select className="rounded-md border-gray-300 px-3 py-2">
//                         <option value="2024">2024</option>
//                         <option value="2023">2023</option>
//                         <option value="2022">2022</option>
//                         <option value="2021">2021</option>
//                     </select>
//                 </div>
//                 <div className="overflow-x-auto">
//                     <table className="table-auto w-full bg-white rounded-lg shadow-md">
//                         <thead>
//                             <tr className="bg-blue-500 text-gray-700">
//                                 <th className="px-4 py-3 text-left">#</th>
//                                 <th className="px-4 py-3 text-left">Register Number</th>
//                                 <th className="px-4 py-3 text-left">Name</th>
//                                 <th className="px-4 py-3 text-left">Department</th>
//                                 <th className="px-4 py-3 text-left">Year of Graduation</th>
//                                 <th className="px-4 py-3 text-left">Contact No</th>
//                                 <th className="px-4 py-3 text-left">Status</th>
//                                 <th className="px-4 py-3 text-left">More Info</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {studentsData.map((student) => (
//                                 <StudentRow key={student.id} student={student} />
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentsList;




import Sidebar from "../components/StudenstList/Sidebar";
import StudentRow from "../components/StudenstList/StudentRow";

// Sample student data
const studentsData = [
    {
        id: 1,
        registerNumber: 'ANCS001',
        name: 'Aishwarya',
        department: 'Computer Science',
        graduationYear: 2023,
        contactNo: '864545465',
        status: 'Passed',
    },
    {
        id: 2,
        registerNumber: 'ANCS002',
        name: 'Pooja',
        department: 'B.Com',
        graduationYear: 2023,
        contactNo: '864545465',
        status: 'Failed',
    },
    {
        id: 3,
        registerNumber: 'ANCS003',
        name: 'Meera',
        department: 'Journalism',
        graduationYear: 2023,
        contactNo: '864545465',
        status: 'Passed',
    },
    {
        id: 4,
        registerNumber: 'ANCS004',
        name: 'Divya',
        department: 'Viscom',
        graduationYear: 2024,
        contactNo: '864545465',
        status: 'Failed',
    },
    {
        id: 5,
        registerNumber: 'ANCS005',
        name: 'Priya',
        department: 'Corporate Secretaryship',
        graduationYear: 2023,
        contactNo: '864545465',
        status: 'Passed',
    },
    {
        id: 6,
        registerNumber: 'ANCS006',
        name: 'Shreya',
        department: 'Journalism',
        graduationYear: 2023,
        contactNo: '864545465',
        status: 'Failed',
    },
    {
        id: 7,
        registerNumber: 'ANCS007',
        name: 'Adhitya',
        department: 'Electrical',
        graduationYear: 2024,
        contactNo: '864545465',
        status: 'Passed',
    },
];

// ToggleSwitch component
// const ToggleSwitch = ({ isToggled, onToggle }) => {
//     return (
//         <label className="flex items-center cursor-pointer">
//             <div className="relative">
//                 <input
//                     type="checkbox"
//                     className="sr-only"
//                     checked={isToggled}
//                     onChange={onToggle}
//                 />
//                 <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
//                 <div
//                     className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isToggled ? 'translate-x-full bg-blue-500' : ''
//                         }`}
//                 ></div>
//             </div>
//             <span className="ml-3 text-gray-600">
//                 {isToggled ? (
//                     <FontAwesomeIcon icon={faSun} className="mr-1" />
//                 ) : (
//                     <FontAwesomeIcon icon={faMoon} className="mr-1" />
//                 )}
//                 {isToggled ? 'Light Mode' : 'Dark Mode'}
//             </span>
//         </label>
//     );
// }

// Sidebar component
// const Sidebar = () => {
//     const [isToggled, setIsToggled] = useState(false);

//     const handleToggle = () => {
//         setIsToggled(!isToggled);
//     };

//     return (
//         <div className="w-64 bg-white p-6 shadow-md">
//             <div className="flex items-center mb-6">
//                 <img src="/logo.jpg" alt="X Planet Logo" className="w-16 h-16" />
//                 <h1 className="text-xl font-bold ml-2">X Planet</h1>
//             </div>
//             <ul className="space-y-4">
//                 <SidebarItem label="Overview" icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
//                 <SidebarItem label="Students" icon={<FontAwesomeIcon icon={faUserGraduate} />} />
//                 <SidebarItem label="Settings" icon={<FontAwesomeIcon icon={faCog} />} />
//                 <SidebarItem label="Log Out" icon={<FontAwesomeIcon icon={faSignOutAlt} />} />
//                 <li>
//                     <ToggleSwitch isToggled={isToggled} onToggle={handleToggle} />
//                 </li>
//             </ul>
//         </div>
//     );
// };

// SidebarItem component
// const SidebarItem = ({ label, icon }) => {
//     return (
//         <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
//             {icon}
//             <span className="ml-3">{label}</span>
//         </li>
//     );
// };

// StudentRow component
// const StudentRow = ({ student }) => {
//     const statusStyles =
//         student.status === 'Passed'
//             ? 'bg-green-100 text-green-700'
//             : 'bg-red-100 text-red-700';

//     return (
//         <tr className="border-b">
//             <td className="px-4 py-3">{student.id}</td>
//             <td className="px-4 py-3">{student.registerNumber}</td>
//             <td className="px-4 py-3 capitalize">{student.name}</td>
//             <td className="px-4 py-3">{student.department}</td>
//             <td className="px-4 py-3">{student.graduationYear}</td>
//             <td className="px-4 py-3">{student.contactNo}</td>
//             <td className="px-4 py-3">
//                 <span className={`px-2 py-1 rounded-md ${statusStyles}`}>
//                     {student.status}
//                 </span>
//             </td>
//             <td className="px-4 py-3 flex space-x-2">
//                 <FontAwesomeIcon icon={faEye} className="cursor-pointer text-gray-600 hover:text-blue-500" title="View" />
//                 <FontAwesomeIcon icon={faPen} className="cursor-pointer text-gray-600 hover:text-blue-500" title="Edit" />
//                 <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-gray-600 hover:text-blue-500" title="Delete" />
//             </td>
//         </tr>
//     );
// };

// StudentsList component
const StudentsList = () => {
    return (
        <div className="flex bg-gray-100 font-sans min-h-screen">
            <Sidebar />
            <div className="flex-1 px-6 py-8">
                <h2 className="text-2xl font-bold mb-6">Students List</h2>
                <div className="flex justify-end mb-6">
                    <select className="rounded-md border-gray-300 px-3 py-2">
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-blue-500 text-gray-700">
                                <th className="px-4 py-3 text-left">#</th>
                                <th className="px-4 py-3 text-left">Register Number</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Department</th>
                                <th className="px-4 py-3 text-left">Year of Graduation</th>
                                <th className="px-4 py-3 text-left">Contact No</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-left">More Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student) => (
                                <StudentRow key={student.id} student={student} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentsList;
