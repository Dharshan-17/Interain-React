import { useState } from 'react';

const FacultyForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        jobType: '',
        location: '',
        salary: '',
        duration: '',
        deadline: '',
        description: '',
        eligibility: '',
        about: '',
        benefit: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here (e.g., API call)
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
                        <span className="text-gray-500 text-sm">Faculty</span>
                    </div>
                </div>
            </nav>

            {/* Banner Section */}
            <div className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-semibold">Post a Faculty Position</h1>
                        <p className="mt-4">Please fill in the details below to connect with potential candidates.</p>
                        <button className="mt-6 bg-yellow-500 text-blue-900 px-6 py-2 rounded-md">Learn More</button>
                    </div>
                    <div>
                        <img src="person-image.png" alt="Person Image" className="w-48 h-auto" />
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-xl font-semibold mb-6 text-center">Post a New Faculty Position</h2>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Company Name */}
                            <div>
                                <label htmlFor="company" className="block text-lg py-2 font-thin text-black">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Enter the company name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Position */}
                            <div>
                                <label htmlFor="position" className="block text-lg py-2 font-thin text-black">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    placeholder="Enter the position title"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Job Type */}
                            <div>
                                <label className="block text-lg py-2 font-thin text-black">Job Type</label>
                                <div className="mt-1 flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            id="jobType"
                                            name="jobType"
                                            value="Internship"
                                            checked={formData.jobType === 'Internship'}
                                            onChange={handleChange}
                                            className="form-radio h-5 w-5 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2">Internship</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            id="jobType"
                                            name="jobType"
                                            value="Job"
                                            checked={formData.jobType === 'Job'}
                                            onChange={handleChange}
                                            className="form-radio h-5 w-5 text-blue-600"
                                        />
                                        <span className="ml-2">Job</span>
                                    </label>
                                </div>
                            </div>

                            {/* Work Location */}
                            <div>
                                <label htmlFor="location" className="block text-lg py-2 font-thin text-black">Work Location</label>
                                <select
                                    id="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                >
                                    <option value="">Select Location</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                </select>
                            </div>

                            {/* Expected Package/Stipend */}
                            <div>
                                <label htmlFor="salary" className="block text-lg py-2 font-thin text-black">Expected Package/Stipend</label>
                                <input
                                    type="text"
                                    id="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    placeholder="Enter the expected package or stipend"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label htmlFor="duration" className="block text-lg py-2 font-thin text-black">Duration</label>
                                <input
                                    type="text"
                                    id="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    placeholder="Enter the duration (e.g., 6 months)"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Apply By Deadline */}
                            <div>
                                <label htmlFor="deadline" className="block text-lg py-2 font-thin text-black">Apply By Deadline</label>
                                <input
                                    type="date"
                                    id="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Job Description */}
                            <div className="md:col-span-1">
                                <label htmlFor="description" className="block text-lg py-2 font-thin text-black">Job Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Provide a detailed job description"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Perks / Benefits */}
                            <div className="md:col-span-1">
                                <label htmlFor="benefit" className="block text-lg py-2 font-thin text-black">Perks / Benefits</label>
                                <input
                                    type="text"
                                    id="benefit"
                                    value={formData.benefit}
                                    onChange={handleChange}
                                    placeholder="List the perks and benefits"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* About Company */}
                            <div className="md:col-span-1">
                                <label htmlFor="about" className="block text-lg py-2 font-thin text-black">About Company</label>
                                <input
                                    type="text"
                                    id="about"
                                    value={formData.about}
                                    onChange={handleChange}
                                    placeholder="Describe your company"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Eligibility Criteria */}
                            <div className="md:col-span-1">
                                <label htmlFor="eligibility" className="block text-lg py-2 font-thin text-black">Eligibility Criteria</label>
                                <input
                                    type="text"
                                    id="eligibility"
                                    value={formData.eligibility}
                                    onChange={handleChange}
                                    placeholder="List the eligibility criteria"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-3 text-center">
                                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FacultyForm;
