import CategoryButtons from "./components/JobPage/CategoryButons";
import JobCard from "./components/JobPage/JobCard";
import Navbar from "./components/JobPage/Navbar";
import PostJobCard from "./components/JobPage/PostJobCard";
import SearchBar from "./components/JobPage/SearchBar";

const App = () => {
    const categories = ['Commerce', 'Service Based', 'Marketing', 'Media', 'Business', 'Data Science'];
  
    const jobs = [
      {
        company: 'X PLANET',
        type: 'FULL-TIME',
        title: 'UX/UI Designer Intern',
        location: 'Chennai',
        salary: '₹ 20,000 / Month',
        duration: '3 Months',
        tags: ['Internship'],
      },
      {
        company: 'TCS',
        type: 'INTERNSHIP',
        title: 'Project Manager',
        location: 'Chennai',
        salary: '₹ 18,000 / Month',
        duration: '3 Months',
        tags: ['Internship'],
      },
      {
        company: 'ZOHO',
        type: 'FULL-TIME',
        title: 'Software Engineer',
        location: 'Dhaka, Bangladesh',
        salary: '₹ 30,000 / Month',
        duration: '8 Months',
        tags: ['Internship'],
      },
      {
        company: 'INFOSYS',
        type: 'INTERNSHIP',
        title: 'Front End Developer',
        location: 'Hyderabad',
        salary: '₹ 25,000 / Month',
        duration: '6 Months',
        tags: ['Internship'],
      },
      {
        company: 'X PLANET',
        type: 'PART-TIME',
        title: 'Junior Graphic Designer',
        location: 'Pune',
        salary: '₹ 25,000 / Month',
        duration: '6 Months',
        tags: ['Internship'],
      },
      {
        company: 'X PLANET',
        type: 'PART-TIME',
        title: 'Junior Graphic Designer',
        location: 'Pune',
        salary: '₹ 25,000 / Month',
        duration: '6 Months',
        tags: ['Internship'],
      },
      {
        company: 'X PLANET',
        type: 'PART-TIME',
        title: 'Junior Graphic Designer',
        location: 'Pune',
        salary: '₹ 25,000 / Month',
        duration: '6 Months',
        tags: ['Internship'],
      },
      
      
    ];
  
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <SearchBar />
        <CategoryButtons categories={categories} />
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
          <PostJobCard />
        </div>
      </div>
    );
  };
  
  export default App;