const CategoryButtons = ({ categories }) => (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Latest internships on X planet</h2>
      <div className="flex space-x-2 mb-6">
        {categories.map((category, index) => (
          <button key={index} className={`border px-4 py-2 rounded-md ${index === 0 ? 'bg-blue-100 text-blue-600' : 'border-gray-300'}`}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );

export default CategoryButtons;  