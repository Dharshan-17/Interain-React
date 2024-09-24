const SearchBar = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex space-x-4">
          <input type="text" placeholder="Job title, Keyword..." className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          <select className="border border-gray-300 px-4 py-2 rounded-md">
            <option>Experience</option>
          </select>
          <input type="text" placeholder="Your Location" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">Find Job</button>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Suggestion: Programming, Designer, Digital Marketing, Animation, Editor
        </div>
      </div>
    </div>
  );

export default SearchBar;