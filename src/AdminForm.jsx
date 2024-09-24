import { useState } from 'react';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    location: '',
    package: '',
    duration: '',
    deadline: '',
    jobDescription: '',
    eligibility: '',
    aboutCompany: '',
    perks: '',
    positionType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Eg. ABC company"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  id="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Eg. Developer"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Work Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Work Location</label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Eg. Chennai"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Expected Package */}
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700">Expected Package / Stipend</label>
                <input
                  type="number"
                  id="package"
                  value={formData.package}
                  onChange={handleChange}
                  placeholder="Eg. 200000"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  id="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Eg. 3 Months"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Apply By Deadline */}
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Apply By Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Job Description */}
              <div>
                <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
                <textarea
                  id="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  // onClick={() => window.location.href = 'admin-form-16.html'}
                  placeholder="Click to enter Job Description"
                  className="w-full p-2 border border-gray-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Eligibility Criteria */}
              <div>
                <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700">Eligibility Criteria</label>
                <input
                  type="text"
                  id="eligibility"
                  value={formData.eligibility}
                  onChange={handleChange}
                  placeholder="Write eligibility requirements"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* About Company */}
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="aboutCompany" className="block text-sm font-medium text-gray-700">About Company</label>
                <input
                  type="text"
                  id="aboutCompany"
                  value={formData.aboutCompany}
                  onChange={handleChange}
                  placeholder="Write about the company"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Perks / Benefits */}
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="perks" className="block text-sm font-medium text-gray-700">Perks / Benefits</label>
                <input
                  type="text"
                  id="perks"
                  value={formData.perks}
                  onChange={handleChange}
                  placeholder="Mention perks or benefits"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Internship or Job */}
              <div className="col-span-1 md:col-span-2">
                <span className="text-sm font-medium text-gray-700">Position Type:</span>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="positionType"
                    value="Internship"
                    checked={formData.positionType === 'Internship'}
                    onChange={() => setFormData({ ...formData, positionType: 'Internship' })}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">Internship</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="positionType"
                    value="Job"
                    checked={formData.positionType === 'Job'}
                    onChange={() => setFormData({ ...formData, positionType: 'Job' })}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">Job</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 text-center">
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

export default AdminForm;
