import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Mail, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedApplications, setSelectedApplications] = useState(new Set());
    const [rejectedApplications, setRejectedApplications] = useState(new Set());
    const [expandedApplications, setExpandedApplications] = useState(new Set());
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState('newest');
    const [searchTerm, setSearchTerm] = useState('');
    const [applicationStatus, setApplicationStatus] = useState('all');

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch('/applicationslist.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                const data = await response.json();
                setApplications(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApplications();
    }, []);

    // ... (keep all existing handler functions)

    const getFilteredApplications = () => {
        let filtered = applications.filter(app =>
            app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        switch (applicationStatus) {
            case 'selected':
                filtered = filtered.filter(app => selectedApplications.has(app.name));
                break;
            case 'rejected':
                filtered = filtered.filter(app => rejectedApplications.has(app.name));
                break;
            case 'pending':
                filtered = filtered.filter(app =>
                    !selectedApplications.has(app.name) && !rejectedApplications.has(app.name)
                );
                break;
            default:
                break;
        }

        return filtered.sort((a, b) => {
            if (sortOrder === 'newest') {
                return -1;
            }
            return 1;
        });
    };

    const statusOptions = [
        { value: 'all', label: 'All Applications' },
        { value: 'pending', label: 'Pending' },
        { value: 'selected', label: 'Selected' },
        { value: 'rejected', label: 'Rejected' }
    ];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive" className="m-6">
                <AlertDescription>
                    Error loading applications: {error}
                </AlertDescription>
            </Alert>
        );
    }

    const filteredApplications = getFilteredApplications();

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="relative w-full md:w-64">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-2 text-left bg-white border rounded-lg flex justify-between items-center"
                    >
                        <span className="text-gray-600">
                            {statusOptions.find(opt => opt.value === applicationStatus)?.label}
                        </span>
                        <ChevronDown
                            className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            size={20}
                        />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-20">
                            {statusOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setApplicationStatus(option.value);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className={`px-4 py-2 rounded-full flex items-center gap-2 border transition-colors
              ${selectedApplications.size > 0 ? 'bg-emerald-100 border-emerald-200' : 'bg-gray-100 border-gray-200'}`}
                    >
                        <div className="w-4 h-4 border border-current rounded" />
                        Selected ({selectedApplications.size})
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full flex items-center gap-2 border transition-colors
              ${rejectedApplications.size > 0 ? 'bg-red-100 border-red-200' : 'bg-gray-100 border-gray-200'}`}
                    >
                        <div className="w-4 h-4 border border-current rounded" />
                        Rejected ({rejectedApplications.size})
                    </button>
                    <button
                        onClick={handleSendMail}
                        disabled={selectedApplications.size === 0}
                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Mail size={16} />
                        Send Mail
                    </button>
                </div>
            </div>

            <div className="relative mb-6">
                <button
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                    className="w-full px-4 py-2 text-left bg-white border rounded-lg flex justify-between items-center"
                >
                    <span className="text-gray-600">
                        {sortOrder === 'newest' ? 'Newest first' : 'Oldest first'}
                    </span>
                    <ChevronDown
                        className={`transform transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`}
                        size={20}
                    />
                </button>

                {isSortDropdownOpen && (
                    <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                        <button
                            onClick={() => {
                                setSortOrder('newest');
                                setIsSortDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-t-lg"
                        >
                            Newest first
                        </button>
                        <button
                            onClick={() => {
                                setSortOrder('oldest');
                                setIsSortDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-b-lg"
                        >
                            Oldest first
                        </button>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                {filteredApplications.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No applications found matching your search.
                    </div>
                ) : (
                    filteredApplications.map((application) => {
                        const status = getApplicationStatus(application.name);

                        return (
                            <div
                                key={application.email}
                                className={`border rounded-lg overflow-hidden bg-white transition-colors
                  ${status === 'selected' ? 'bg-emerald-50' : ''}
                  ${status === 'rejected' ? 'bg-red-50' : ''}`}
                            >
                                {/* Rest of the application card content remains the same */}
                                {/* ... */}
                                <div className="flex items-start p-4">
                                    <div className="flex flex-col gap-2 mr-4 mt-1">
                                        <button
                                            onClick={() => handleSelection(application.name)}
                                            className={`w-4 h-4 border rounded transition-colors
        ${status === 'selected' ? 'bg-emerald-100 border-emerald-200' : 'border-gray-300'}`}
                                        />
                                        <button
                                            onClick={() => handleRejection(application.name)}
                                            className={`w-4 h-4 border rounded transition-colors
        ${status === 'rejected' ? 'bg-red-100 border-red-200' : 'border-gray-300'}`}
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-lg font-semibold">{application.name}</h2>
                                            <button
                                                onClick={() => toggleExpanded(application.name)}
                                                className="text-gray-500"
                                            >
                                                {expandedApplications.has(application.name) ? (
                                                    <ChevronUp size={20} />
                                                ) : (
                                                    <ChevronDown size={20} />
                                                )}
                                            </button>
                                        </div>

                                        {/* Basic Information */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                            <div>
                                                <div className="text-gray-600">Email</div>
                                                <div className="break-all">{application.email}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-600">Contact No.</div>
                                                <div>{application.contact_no}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-600">Education</div>
                                                <div>{application.education}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-600">Profession</div>
                                                <div>{application.profession}</div>
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        {expandedApplications.has(application.name) && (
                                            <div className="mt-4">
                                                <div className="text-gray-600">Skills</div>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {application.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="bg-gray-100 px-2 py-1 rounded text-sm"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                    <div>
                                                        <div className="text-gray-600">Cover Letter</div>
                                                        <div>{application.cover_letter}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-gray-600">Availability</div>
                                                        <div>{application.availability}</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-4 mt-4">
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 hover:underline"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(application.resume_link, '_blank');
                                                        }}
                                                    >
                                                        View Resume →
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-blue-600 hover:underline"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(application.cv_link, '_blank');
                                                        }}
                                                    >
                                                        Download CV →
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>


                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ApplicationList;