


import notif from "../../public/bell.png";
import settings from "../../public/setting.png";
import user from "../../public/image.png";
import logo from "../../public/Logo.png";
import interainImg from "../../public/tcs_building.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock as faSolidClock,
    faPlayCircle,
    faMoneyBill,
    faSuitcase,
    faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faClock as faRegularClock, faBookmark } from "@fortawesome/free-regular-svg-icons";

const jobDetails = [
    {
        id: 1,
        title: "UI/UX DESIGN INTERN ",
        company: "Interain Company",
        logo: interainImg,
        tags: ["Placement Drive", "Actively Hiring", "Full Time"],
        overview: {
            startDate: "Immediately",
            salary: "₹ 10,000/month",
            duration: "6 Months",
            postedDate: "26 Aug 2024",
        },
        description: [
            "Strong knowledge of UI principles including color theory, typography, layouts, style guides, and heuristic rules.",
            "Skilled in user research methods such as conducting surveys and interviews.",
            "Portfolio showcasing previous work and personal projects.",
            "Prior internship or work experience in similar fields is advantageous.",
            "Proficiency in Figma, presentation slides, forms, and unrelated tools.",
            "Strong communication and presentation skills.",
            "Graduate or certified from a design school.",
            "Ready to join immediately or within a 30-day notice.",
            "Proficiency in data analysis is a plus.",
            "Must own a laptop with a reliable internet connection.",
        ],
        benefits: [
            "5K INR monthly for 4 month period.",
            "Job offer with the salary of 3.5 LPA + 50K INR performance bonus.",
        ],
        keySkills: [
            "Web Design",
            "UX Research",
            "UI Development",
            "User Testing",
            "User Flow",
            "Prototyping",
            "Wireframing",
        ],
        about: "Online networks have become indispensable for students and professionals seeking internships and job opportunities. Websites like [Website names] provide a large database of chances, which users can sort by region, industry, and experience level. These sites frequently offer additional tools, such as career guidance, resume development seminars, and practice interviews, to help people stand out in a competitive employment market. These websites provide a wide range of options, including entry-level work and advanced training programs. You can look into options in a variety of industries, including technology, marketing, and design. Many platforms also offer services such as resume creation, interview preparation, and career coaching to help you stand out in a competitive employment market. These online platforms can help students, recent graduates, and others wishing to improve their skills."
    },
];

function CompanyPage() {
    const job = jobDetails[0]; // Assuming you want to display the first job detail

    return (
        <div>
            <header className="bg-white px-4 py-1 flex justify-between items-center border-b border-gray-200 mx-6">
                <div className="flex items-center space-x-2 ">
                    <img src={logo} alt="Logo" className="w-14 h-14" />
                    <span className="text-3xl font-bold ml-6 text-blue-600">X planet</span>
                </div>
                <div className="flex items-center space-x-4 ml-14">
                    <div className="flex items-center space-x-2 ml-14">
                        <img src={user} alt="Profile" height="50" width="50" className="ml-80 " />
                        <div>
                            <h1 className="text-xl font-bold mt-2">JESSI</h1>
                            <p className="text-sm font-semibold mb-4 ">Student</p>
                        </div>
                    </div>
                    <img src={settings} alt="Settings" height="40px" width="40px" className="ml-20" />
                    <img src={notif} alt="Notifications" height="40px" width="40px" className="ml-20" />
                </div>
            </header>

            <div className="bg-gray-100 h-full pt-10 pb-28">
                <div className="bg-white h-[368px] mx-10 border-0 rounded-2xl ">
                    <div className="font-semibold text-xl pl-6 pt-5">JOB DETAILS</div>
                    <div className="mt-6">
                        <div className="flex">
                            <img src={job.logo} alt={job.company} className="w-[75px] h-[75px] ml-6 rounded-full border-0 mr-6" />
                            <div>
                                <div className="text-lg font-semibold">{job.title}</div>
                                <div className="text-lg mt-1 text-gray-600">{job.company}</div>
                                <div className="flex gap-4 mt-2">
                                    {job.tags.map((tag, index) => (
                                        <div key={index} className="p-1 px-3 border border-gray-300 text-gray-700 rounded-2xl">{tag}</div>
                                    ))}
                                    <div className="bg-green-600 text-white p-1 border-0 rounded-lg px-2">Full Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 mt-3 pb-3 border-b ">
                        <div className="text-lg font-semibold">Job Overview</div>
                        <div className="flex gap-12 mt-2">
                            <div className="text-gray-600 ">
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faPlayCircle} className="mt-1" />
                                    <div>Start Date</div>
                                </div>
                                <div className="mt-2 font-semibold">{job.overview.startDate}</div>
                            </div>
                            <div className="text-gray-600 ">
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faMoneyBill} className="mt-1" />
                                    <div>Salary</div>
                                </div>
                                <div className="mt-2 font-semibold">{job.overview.salary}</div>
                            </div>
                            <div className="text-gray-600 ">
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faCalendar} className="mt-1" />
                                    <div>Duration</div>
                                </div>
                                <div className="mt-2 font-semibold">{job.overview.duration}</div>
                            </div>
                            <div className="text-gray-600 ">
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faSuitcase} className="mt-1" />
                                    <div>Posted Date</div>
                                </div>
                                <div className="mt-2 font-semibold">{job.overview.postedDate}</div>
                            </div>
                            <div className="text-gray-600 ">
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faSolidClock} className="mt-1" />
                                    <div>Posted Time</div>
                                </div>
                                <div className="mt-2 font-semibold">Posted few hours ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mr-10 ml-6 mt-4 ">
                        <div className="flex gap-20">
                            <div className="bg-gray-100 shadow-md font-semibold text-gray-700 p-2 border-0 rounded-lg px-6 flex gap-2">
                                <FontAwesomeIcon icon={faRegularClock} size="lg" className="mt-1" />
                                <div>Posted few hours ago</div>
                            </div>
                            <div className="bg-gray-200 font-semibold text-gray-700 p-2 border-0 rounded-lg px-6">Internship with Job Offer</div>
                        </div>
                        <div className="flex gap-10">
                            <div className="p-2 px-4 bg-blue-200 border-0 rounded-lg">
                                <FontAwesomeIcon icon={faBookmark} style={{ color: "#2563eb" }} />
                            </div>
                            <div className="bg-blue-600 text-white p-2 border-0 rounded-lg px-12">Apply Now</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white mt-8 px-4 mx-10 border-0 rounded-3xl">
                    <div className="pt-7 pb-10 mx-4 flex flex-col gap-6">
                        <div className="font-sans">
                            <h1 className="text-xl font-semibold">Job Description</h1>
                            <ul className="list-disc ml-6 mt-3 flex flex-col gap-1">
                                {job.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="font-sans">
                            <h1 className="text-xl font-semibold">Benefits Compensation</h1>
                            <ul className="list-disc ml-6 mt-3 flex flex-col gap-1">
                                {job.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="font-sans">
                            <h2 className="text-lg font-semibold mt-2">Key Skills</h2>
                            <div className="flex flex-wrap gap-3 mt-5">
                                {job.keySkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 text-slate-800 font-sans rounded-full text-sm border border-slate-500"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>


                        {/* <div className="font-sans">
                            <h1 className="text-xl font-semibold">About the Company</h1>
                            <p className="mt-3">{job.about}</p>
                        </div> */}
                    </div>
                </div>

                <div className="bg-white mx-10 mt-8 px-8 py-6 pb-8 border-0 rounded-3xl font-sans">
                    <h1 className="text-xl font-semibold mb-3">About the Company</h1>
                    <p className="mt-3">{job.about}</p>
                </div>

                <div className="flex justify-center mt-14 ">
                    <button className="py-3 px-6 bg-blue-600 text-white rounded-xl">Apply Now</button>
                </div>

            </div>
        </div>
    );
}

export default CompanyPage;
