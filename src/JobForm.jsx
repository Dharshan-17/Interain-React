
const JobForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow text-lg">
        <div className=" pl-6 pr-6 px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="text-blue-500 text-xl font-bold">←</button>
            <span className="text-blue-600 font-bold ">X Planet</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Jessy</span>
            <span className="text-gray-400">Student</span>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="bg-white mt-6 mx-4 rounded-lg shadow-md p-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Campus Recruitment' 2024 | Interain Intelligence Private Limited | Registration
        </h2>
        <p className="text-gray-500 mb-4">
          The form "Interain Intelligence Private Limited - Placement Cell - Certification Details" is no longer accepting responses.
        </p>
        <p className="text-gray-500">
          Try contacting the owner of the form if you think this is a mistake.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-8 bg-gray-50 p-4 text-center text-sm text-gray-500">
        <p>This content is neither created nor endorsed by Interain. Report Abuse - Terms of Service - Privacy Policy.</p>
        <p className="font-semibold mt-2">X Planet Form</p>
      </footer>
    </div>
  );
};

export default JobForm;
