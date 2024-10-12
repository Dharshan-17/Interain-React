import { useState } from "react";
import Navbar from "../JobPage/Navbar";

function DescEligib() {
    const [jobDescription, setJobDescription] = useState("");
    const [eligibilityCriteria, setEligibilityCriteria] = useState("");
    const [jobDescError, setJobDescError] = useState("");
    const [eligibilityError, setEligibilityError] = useState("");

    const handleSubmit = () => {
        let hasError = false;

        if (!jobDescription) {
            setJobDescError("Please fill in the Job Description.");
            hasError = true;
        } else {
            setJobDescError(""); // Clear the error if the field is filled
        }

        if (!eligibilityCriteria) {
            setEligibilityError("Please fill in the Eligibility Criteria.");
            hasError = true;
        } else {
            setEligibilityError(""); // Clear the error if the field is filled
        }

        // No alert for successful submission, only handle errors
        if (!hasError) {
            // Logic for successful submission can be added here
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white rounded-lg shadow-md p-10 w-full max-w-7xl">
                    {/* Job Description */}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-semibold text-black">Job Description</h2>
                            {jobDescError && <span className="text-red-600 text-sm ml-2">{jobDescError}</span>}
                        </div>
                        <textarea
                            className="w-full p-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
                            rows="6"
                            placeholder="Enter the job description here"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Eligibility Criteria / Academic Requirement */}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-semibold text-black">Eligibility Criteria / Academic Requirement</h2>
                            {eligibilityError && <span className="text-red-600 text-sm ml-2">{eligibilityError}</span>}
                        </div>
                        <textarea
                            className="w-full p-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
                            rows="6"
                            placeholder="Enter the eligibility criteria here"
                            value={eligibilityCriteria}
                            onChange={(e) => setEligibilityCriteria(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescEligib;  
