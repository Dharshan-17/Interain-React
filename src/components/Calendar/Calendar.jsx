import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default calendar styles
import '../Calendar/calendar.css';

import notif from "../../../public/bell.png";
import settings from "../../../public/setting.png";
import user from "../../../public/image.png";
import logo from "../../../public/Logo.png";
import dropdown from "../../../public/Vector 1.png";

function App() {
  const [date, setDate] = useState(new Date());

  // Calendar event data
  const eventList = [
    { date: new Date(2024, 7, 1), label: "Global Warming" },
    { date: new Date(2024, 7, 5), label: "Global Warming" },
    { date: new Date(2024, 7, 6), label: "Mental Health" },
    { date: new Date(2024, 7, 9), label: "Gender Equality" },
    { date: new Date(2024, 7, 25), label: "Global Warming" },
    { date: new Date(2024, 7, 27), label: "Mental Health" },
    { date: new Date(2024, 7, 28), label: "Digital Literacy" },
  ];

  // User Meeting History data
  const meetingHistory = [
    { date: "01-01-2020", topic: "Developer GD meet", time: "10:00 AM", scored: 2.5 },
    { date: "02-01-2020", topic: "Interview GD meet", time: "10:30 AM", scored: 1.5 },
    { date: "03-01-2020", topic: "Developer GD meet", time: "11:00 AM", scored: 0.5 },
  ];

  // GD Details
  const gdDetails = [
    "Respect All Opinions",
    "Stay on Topic",
    "Listen Actively",
    "Be Concise and Clear",
    "Encourage Participation",
  ];

  // Upcoming Meetings data
  const upcomingMeetings = [
    { topic: "Environment GD Topic" },
    { topic: "Leadership GD Topic" },
    { topic: "Gadgets GD Topic" },
    { topic: "Parenting GD Topic" },
  ];

  // Check if there's an event on a particular date
  const renderTileContent = ({ date, view }) => {
    if (view === "month") {
      const event = eventList.find(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear()
      );
      return event ? (
        <div className="bg-green-100 text-sm text-green-700 p-1 mt-1 rounded">
          {event.label}
        </div>
      ) : null;
    }
    return null;
  };

  // Custom weekdays array
  const customWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-50 px-4 py-1 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-2 ml-14">
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

      {/* Main content */}
      <div className="flex">
        {/* Calendar section */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold ml-20 -mt-4">August 2024</h2>
            <div className="relative">
              <button className="bg-gray-200 font-bold px-8 text-2xl py-2 rounded-md">Month</button>
              <img
                src={dropdown}
                alt="Dropdown"
                className="absolute right-2 top-5 text-gray-500"
              />
            </div>
          </div>
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={renderTileContent}
            className="p-4 border border-gray-200 rounded-md"
            // Pass custom weekdays
            formatShortWeekday={(locale, date) => customWeekdays[date.getDay()]}
          />
        </div>

        {/* Sidebar section */}
        <div className="w-80 bg-white p-6 border-l border-gray-200">
          <div className="flex items-right space-x-2 mb-4">
            <img
              alt="User Avatar"
              className="h-12 w-12 rounded-full"
              src={user}
              width="50"
              height="50"
            />
            <div>
              <div className="text-lg font-semibold">JESSI</div>
              <div className="text-sm text-gray-500">GD Meeting Details</div>
            </div>
          </div>

          {/* User Meeting History */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">User Meeting History</h3>
            <table className="text-xs table-auto w-full mt-1">
              <thead>
                <tr>
                  <th className="px-5 py-2">Date</th>
                  <th className="px-5 py-2">GD meet</th>
                  <th className="px-5 py-2">Time</th>
                  <th className="px-5 py-2">Scored</th>
                </tr>
              </thead>
              <tbody>
                {meetingHistory.map((meeting, index) => (
                  <tr key={index}>
                    <td className="px-1 py-1">{meeting.date}</td>
                    <td className="px-1 py-1">{meeting.topic}</td>
                    <td className="px-5 py-2">{meeting.time}</td>
                    <td className="px-5 py-2">{meeting.scored}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GD Details */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">GD Details</h3>
            <ul className="text-xs text-gray-500 list-disc list-inside">
              {gdDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Performance */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Performance</h3>
            <div className="flex items-center space-x-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
              <span className="text-xs text-gray-500">60%</span>
            </div>
          </div>

          {/* Register button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4">Register</button>

          {/* Upcoming Meetings */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Upcoming Meetings</h3>
            <div className="text-xs text-gray-500 space-y-2">
              {upcomingMeetings.map((meeting, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{meeting.topic}</span>
                  <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">See Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
