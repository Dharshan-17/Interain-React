import { useState } from "react";
import Navbar from "../JobPage/Navbar";

function AbutPerk() {
    const [aboutCompany, setAboutCompany] = useState("");
    const [perksBenefits, setPerksBenefits] = useState("");
    const [aboutCompanyError, setAboutCompanyError] = useState("");
    const [perksBenefitsError, setPerksBenefitsError] = useState("");

    const handleSubmit = () => {
        let hasError = false;

        if (!aboutCompany) {
            setAboutCompanyError("Please fill in the About Company section.");
            hasError = true;
        } else {
            setAboutCompanyError(""); // Clear the error if the field is filled
        }

        if (!perksBenefits) {
            setPerksBenefitsError("Please fill in the Perks / Benefits section.");
            hasError = true;
        } else {
            setPerksBenefitsError(""); // Clear the error if the field is filled
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
                    {/* About Company */}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-semibold text-black">About Company</h2>
                            {aboutCompanyError && <span className="text-red-600 text-sm ml-2">{aboutCompanyError}</span>}
                        </div>
                        <textarea
                            className="w-full p-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
                            rows="6"
                            placeholder="Enter details about the company here"
                            value={aboutCompany}
                            onChange={(e) => setAboutCompany(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Perks / Benefits */}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-semibold text-black">Perks / Benefits</h2>
                            {perksBenefitsError && <span className="text-red-600 text-sm ml-2">{perksBenefitsError}</span>}
                        </div>
                        <textarea
                            className="w-full p-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
                            rows="6"
                            placeholder="Enter the perks and benefits here"
                            value={perksBenefits}
                            onChange={(e) => setPerksBenefits(e.target.value)}
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

export default AbutPerk;
