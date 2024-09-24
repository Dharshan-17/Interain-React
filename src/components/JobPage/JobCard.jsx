const JobCard = ({ job }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{job.company}</span>
        <span className={`bg-green-100 text-green-600 text-xs px-2 py-1 rounded`}>{job.type}</span>
      </div>
      <h3 className="text-lg font-semibold mt-2">{job.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{job.location}</p>
      <p className="text-sm text-gray-500 mt-1">{job.salary}</p>
      <p className="text-sm text-gray-500 mt-1">{job.duration}</p>
      <div className="mt-4 flex space-x-2">
        {job.tags.map((tag, idx) => (
          <button key={idx} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">{tag}</button>
        ))}
        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">View Details</button>
      </div>
    </div>  
  );

export default JobCard;  