const PostJobCard = () => (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
      <button className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <a href="admin-form.html" className="text-blue-600 font-semibold mt-4">Post A Job</a>
    </div>
  );

export default PostJobCard;