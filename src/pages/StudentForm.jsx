import { useState } from 'react';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        collegeName: '',
        departmentYear: '',
        percentageCGPA: '',
        tenthPercentage: '',
        twelfthPercentage: '',
        dob: '',
        educationLevel: '',
        address: '',
        resume: null, // For file upload
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: id === 'resume' ? e.target.files[0] : value, // Handle file upload
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src="logo.png" alt="X Planet Logo" className="w-8 h-8" />
                        <span className="text-xl font-semibold text-blue-600">X Planet</span>
                        <a href="admin-board.html" className="inline-flex items-center text-blue-600 hover:underline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="user-avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        <span className="text-sm">Jessy</span>
                        <span className="text-gray-500 text-sm">Student</span>
                    </div>
                </div>
            </nav>

            {/* Banner Section */}
            <div className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-semibold">Gratitude For Joining With Us</h1>
                        <p className="mt-4">Please Fill Your Details Below And Connect With Us.</p>
                        <button className="mt-6 bg-yellow-500 text-blue-900 px-6 py-2 rounded-md">Contact us</button>
                    </div>
                    <div>
                        <img src="person-image.png" alt="Person Image" className="w-48 h-auto" />
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-xl font-semibold mb-6 text-center">Kindly Fill This Form To Reach Out You</h2>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-lg py-2 font-thin text-black">Full Name (As Per Aadhar)</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Email Id */}
                            <div>
                                <label htmlFor="email" className="block text-lg py-2 font-thin text-black">Email Id</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* College Name */}
                            <div>
                                <label htmlFor="collegeName" className="block text-lg py-2 font-thin text-black">College Name</label>
                                <input
                                    type="text"
                                    id="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    placeholder="Enter your college name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Department & Year */}
                            <div>
                                <label htmlFor="departmentYear" className="block text-lg py-2 font-thin text-black">Department & Year</label>
                                <input
                                    type="text"
                                    id="departmentYear"
                                    value={formData.departmentYear}
                                    onChange={handleChange}
                                    placeholder="Enter your department and year"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Percentage/CGPA */}
                            <div>
                                <label htmlFor="percentageCGPA" className="block text-lg py-2 font-thin text-black">Percentage/CGPA</label>
                                <input
                                    type="number"
                                    id="percentageCGPA"
                                    value={formData.percentageCGPA}
                                    onChange={handleChange}
                                    placeholder="Enter your percentage/CGPA"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* 10th Percentage */}
                            <div>
                                <label htmlFor="tenthPercentage" className="block text-lg py-2 font-thin text-black">10th Percentage</label>
                                <input
                                    type="number"
                                    id="tenthPercentage"
                                    value={formData.tenthPercentage}
                                    onChange={handleChange}
                                    placeholder="Enter your 10th percentage"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* 12th Percentage */}
                            <div>
                                <label htmlFor="twelfthPercentage" className="block text-lg py-2 font-thin text-black">12th Percentage</label>
                                <input
                                    type="number"
                                    id="twelfthPercentage"
                                    value={formData.twelfthPercentage}
                                    onChange={handleChange}
                                    placeholder="Enter your 12th percentage"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label htmlFor="dob" className="block text-lg py-2 font-thin text-black">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Education Level */}
                            <div>
                                <label htmlFor="educationLevel" className="block text-lg py-2 font-thin text-black">Education Level</label>
                                <input
                                    type="text"
                                    id="educationLevel"
                                    value={formData.educationLevel}
                                    onChange={handleChange}
                                    placeholder="Enter your education level"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Address and Upload Your Resume in the same row */}
                            <div className="col-span-1 md:col-span-1">
                                <label htmlFor="address" className="block text-lg py-2 font-thin text-black">Address</label>
                                <textarea
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="col-span-1 md:col-span-1">
                                <label htmlFor="resume" className="block text-lg py-2 font-thin text-black">Upload Your Resume</label>
                                <input
                                    type="file"
                                    id="resume"
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 "
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-1 md:col-span-3 text-center">
                                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;