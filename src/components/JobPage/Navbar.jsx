const Navbar = () => (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="X Planet Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold text-blue-600">X planet</span>
        </div>
        <div>
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md mr-4">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Post A Job</button>
        </div>
      </div>
    </nav>
  );

  export default Navbar;