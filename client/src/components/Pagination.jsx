import React from 'react';

const Pagination = ({ ticketsPerPage, totalTickets, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center mt-6">
            <ul className="inline-flex items-center space-x-2">
                {/* Previous Button */}
                <li>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`${
                            currentPage === 1
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-black'
                        }`}
                    >
                       {'< Prev'}
                    </button>
                </li>

                {/* Page Numbers */}
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 ${
                                number === currentPage
                                    ? 'bg-transparent text-black rounded-md'
                                    : 'bg-transparent text-gray'
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                {/* Next Button */}
                <li>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === pageNumbers.length}
                        className={`${
                            currentPage === pageNumbers.length
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-black'
                        }`}
                    >
                        {'Next >'}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
