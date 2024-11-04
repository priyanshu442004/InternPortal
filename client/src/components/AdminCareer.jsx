
import React, { useState, useEffect } from "react";

const AdminCareer = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(8); // Number of jobs per page
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json"); // Assuming the JSON is served from the public folder
        const data = await response.json();
        setJobs(data.jobs);
        setLoading(false); // Data is loaded
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  // Get current Jobs for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const renderPagination = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <h1
          key={i}
          className={`page-number font-mukta py-2 px-3 hover:cursor-pointer ${currentPage === i ? "font-bold" : ""}`}
          onClick={() => paginate(i)}
        >
          {i}
        </h1>
      );
    }
    return paginationButtons;
  };

  if (loading) return <div>Loading job data...</div>;

  return (
    <div className="w-full p-6 bg-slate-50 rounded-lg shadow-md">
      <div className="flex md:flex-row flex-col h-auto md:h-16 justify-between bg-white items-center mb-4">
        <h1 className="font-mukta text-xl font-medium ml-5 md:mt-0 mt-5">
          Jobs <span className="font-mukta text-slate-500">({jobs.length})</span>
        </h1>
        <div className="md:mt-0 mt-4 md:mb-0 mb-4 flex space-x-4 mr-5">
          <button><img src="/doctor/plusicon.png" alt="Add Icon" /></button>
          <button><img src="/doctor/searchicon.png" alt="Search Icon" /></button>
          <button><img src="/doctor/filtericon.png" alt="Filter Icon" /></button>
          <button><img src="/doctor/questionicon.png" alt="More Info" /></button>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="overflow-x-auto md:mt-0 mt-10">
        <table className="min-w-full table-auto border-collapse bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2 border-r text-lg">Status</th>
              <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2 border-r text-lg">Campaigns</th>
              <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2 border-r text-lg">Applicants</th>
              <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2 border-r text-lg">Date</th>
              <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2 border-r text-lg text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 font-mukta font-normal text-black py-2 flex items-center">
                  <span
                    className={`h-3 w-3 rounded-full mr-2 ${job.status === "Live" ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  {job.status}
                </td>
                <td className="px-4 font-mukta py-2">{job.campaign}</td>
                <td className="px-4 font-mukta py-2">{job.applicants}</td>
                <td className="px-4 font-mukta py-2">{job.date}</td>
                <td className="px-4 font-mukta py-2 text-center">
                  <button className="bg-blue-200 text-white  px-3 py-1 rounded-md">View Applications</button>
                  <button className="ml-[4vw] px-2 py-1 font-mukta text-lg rounded-lg">...</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <div className="pagination flex items-center">
          <button
            className="prev font-mukta py-2 px-3 hover:cursor-pointer"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt; Prev
          </button>
          {renderPagination()}
          <button
            className="next font-mukta py-2 px-3 hover:cursor-pointer"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCareer;