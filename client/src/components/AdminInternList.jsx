import React, { useState, useEffect } from "react";
import plusicon from "@/assets/plusicon.png"
import searchicon from "@/assets/searchicon.png"
import filtericon from "@/assets/filtericon.png"
import questionicon from "@/assets/questionicon.png"


const InternsDashboard = () => {
  const [interns, setInterns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [internsPerPage] = useState(8); // Number of interns per page
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const response = await fetch("/interns.json"); // Assuming the JSON is served from the public folder
        const data = await response.json();
        setInterns(data.interns);
        setLoading(false); // Data is loaded
      } catch (error) {
        console.error("Error fetching intern data:", error);
      }
    };

    fetchInterns();
  }, []);

  // Get current interns for the current page
  const indexOfLastIntern = currentPage * internsPerPage;
  const indexOfFirstIntern = indexOfLastIntern - internsPerPage;
  const currentInterns = interns.slice(indexOfFirstIntern, indexOfLastIntern);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(interns.length / internsPerPage);

  const isCurrentOne=() => {
    if(currentPage===1){
        return "font-bold";
    }
  };

  // Create pagination buttons
  const renderPagination = () => {
    const paginationButtons = [];
  
    // Always show the first page
    paginationButtons.push(
      <h1 key={1} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer ${isCurrentOne()}  `} onClick={() => paginate(1)}>
        1
      </h1>
    );
  
    // Determine how many pages to show around the current page
    if (currentPage === 1) {
      // On the first page, show the next two pages
      for (let i = 2; i <= Math.min(3, totalPages); i++) {
        paginationButtons.push(
          <h1 key={i} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer`} onClick={() => paginate(i)}>
            {i}
          </h1>
        );
      }
      if (totalPages > 3) paginationButtons.push(<span key="dots1" className="mx-2">...</span>);
      if (totalPages > 3) {
        paginationButtons.push(
          <h1 key={totalPages} className="page-font-mukta number py-2 px-3 hover:cursor-pointer" onClick={() => paginate(totalPages)}>
            {totalPages}
          </h1>
        );
      }
    } else if (currentPage === 2) {
      // On the second page, show pages 1, 2 (bold), and 3
      paginationButtons.push(
        <h1 key={2} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer font-bold`} onClick={() => paginate(2)}>
          2
        </h1>
      );
      paginationButtons.push(<span key="dots1" className="mx-2">...</span>);
      if (totalPages > 3) {
        paginationButtons.push(
          <h1 key={totalPages} className="page-number font-mukta py-2 px-3 hover:cursor-pointer" onClick={() => paginate(totalPages)}>
            {totalPages}
          </h1>
        );
      }
    } else if (currentPage === 3) {
      // On the third page, show pages 1, 2, 3 (bold), and ellipsis
      paginationButtons.push(
        <h1 key={3} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer font-bold`} onClick={() => paginate(3)}>
          3
        </h1>
      );
      paginationButtons.push(<span key="dots1" className="mx-2">...</span>);
      if (totalPages > 3) {
        paginationButtons.push(
          <h1 key={totalPages} className="page-number font-mukta py-2 px-3 hover:cursor-pointer" onClick={() => paginate(totalPages)}>
            {totalPages}
          </h1>
        );
      }
    } else if (currentPage >= 4 && currentPage <= totalPages - 3) {
      // For pages 4 to (totalPages - 3), show: 1, ..., current (bold), next, ..., totalPages
      paginationButtons.push(<span key="dots1" className="mx-2">...</span>);
      paginationButtons.push(
        <h1 key={currentPage} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer font-bold`} onClick={() => paginate(currentPage)}>
          {currentPage}
        </h1>
      );
      // Show the next page
      if (currentPage + 1 <= totalPages) {
        paginationButtons.push(
          <h1 key={currentPage + 1} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer`} onClick={() => paginate(currentPage + 1)}>
            {currentPage + 1}
          </h1>
        );
      }
      // Show last page
      paginationButtons.push(<span key="dots2" className="mx-2">...</span>);
      if (totalPages > 3) {
        paginationButtons.push(
          <h1 key={totalPages} className="page-number font-mukta py-2 px-3 hover:cursor-pointer" onClick={() => paginate(totalPages)}>
            {totalPages}
          </h1>
        );
      }
    } else {
      // Last few pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        if (i === currentPage) {
          paginationButtons.push(
            <h1 key={i} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer font-bold`} onClick={() => paginate(i)}>
              {i}
            </h1>
          );
        } else {
          paginationButtons.push(
            <h1 key={i} className={`page-number font-mukta py-2 px-3 hover:cursor-pointer`} onClick={() => paginate(i)}>
              {i}
            </h1>
          );
        }
      }
    }
  
    return paginationButtons;
  };  

  if (loading) return <div>Loading interns data...</div>;

  return (
    <div className="w-full p-6 bg-slate-50 rounded-lg shadow-md">
      <h2 className="font-mukta text-xl font-normal mb-4">Interns Data</h2>

      <div className="flex md:flex-row flex-col h-auto md:h-16 justify-between bg-white items-center mb-4">
        <h2 className="font-mukta text-xl font-medium ml-5 md:mt-0 mt-5">
          Total Interns <span className="font-mukta text-slate-500">({interns.length})</span>
        </h2>
        <div className="md:mt-0 mt-4 md:mb-0 mb-4 flex space-x-4 mr-5">
          <button>
          <img src={plusicon} alt="Add Icon" className="" />
          </button>
          <button>
          <img src={searchicon} alt="Search Icon" className="" />
          </button>
          <button>
          <img src={filtericon} alt="Filter Icon" className="" />
          </button>
          <button>
          <img src={questionicon} alt="More Info" className="" />
          </button>
        </div>
      </div>

      {/* Interns Table */}
      <div className="overflow-x-auto md:mt-0 mt-10">
    <table className="min-w-full table-auto border-collapse bg-white">
      <thead>
        <tr>
          <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2">Name</th>
          <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2">Role</th>
          <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2">Status</th>
          <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2">Year Of Joining</th>
          <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2">Completion Date</th>
          <th className="text-left font-mukta font-normal text-gray-500 px-4 py-2">Options</th>
        </tr>
      </thead>
      <tbody>
        {currentInterns.map((intern, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 font-mukta font-normal text-black py-2">{intern.name}</td>
            <td className="px-4 font-mukta py-2">{intern.role}</td>
            <td className="px-4 font-mukta py-2">
              <span
                className={`w-[90px] font-mukta inline-flex items-center justify-center px-3 py-1 rounded-full text-sm ${getStatusClass(
                  intern.status
                )}`}
              >
                {intern.status}
              </span>
            </td>
            <td className="px-4 font-mukta py-2">{intern.joiningDate}</td>
            <td className="px-4 font-mukta py-2">{intern.completionDate}</td>
            <td className="px-4 font-mukta py-2">
              <button className="px-2 py-1 font-mukta text-lg rounded-lg">...</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <div className="pagination flex items-center">
          <button className="prev font-mukta py-2 px-3 hover:cursor-pointer" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}> &lt; Prev </button>
          {renderPagination()}
          <button className="next font-mukta py-2 px-3 hover:cursor-pointer" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next &gt; </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the Tailwind class for status with exact styling
const getStatusClass = (status) => {
  switch (status) {
    case "Working":
      return "bg-green-100 text-green-500";
    case "Left":
      return "bg-blue-100 text-blue-400";
    case "Terminated":
      return "bg-red-100 text-red-500";
    case "On Leave":
      return "bg-yellow-100 text-yellow-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
};

export default InternsDashboard;