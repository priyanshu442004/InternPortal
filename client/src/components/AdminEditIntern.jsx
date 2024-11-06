import React, { useState } from 'react';
import { Search, Download } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';


const EditIntern = () => {
  const [internID, setInternId] = useState('');
  const [formData, setFormData] = useState({
    forename: '',
    contactNo: '',
    email: '',
    gender: '',
    status: '',
    performance: '',
  });
  const [documents, setDocuments] = useState({
    offerLetter: null,
    certificate: null,
    letterOfRecommendation: null
  });

  // Handler for searching intern by ID

const handleSearch = async () => {
  try {
    if (!internID.trim()) {
      alert('Please enter an Intern ID');
      return;
    }

    // Use Axios to fetch intern data
    const response = await axios.get(`http://localhost:8080/api/v1/interns/${internID}`);
    
    // Update form data with the received intern data
    setFormData({
      forename: response.data.forename || '',
      contactNo: response.data.contactNo || '',
      email: response.data.email || '',
      gender: response.data.gender || '',
      status: response.data.status || '',
      performance: response.data.performance || '',
    });
    
    // Update documents if they exist
    if (response.data.documents) {
      setDocuments(response.data.documents);
    }
  } catch (error) {
    console.error('Error fetching intern data:', error);
    alert('Failed to fetch intern data. Please try again.');
  }
};


  // Handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler for gender selection
  const handleGenderSelect = (gender) => {
    setFormData(prev => ({
      ...prev,
      gender
    }));
  };

  // Handler for status selection
  const handleStatusSelect = (status) => {
    setFormData(prev => ({
      ...prev,
      status
    }));
  };

  // Handler for performance selection
  const handlePerformanceSelect = (performance) => {
    setFormData(prev => ({
      ...prev,
      performance
    }));
  };

  // Handler for file uploads
  const handleFileUpload = (documentType) => (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    
    if (!allowedTypes.includes(fileExtension)) {
      alert('Please upload only PDF or Word documents');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      alert('File size should not exceed 5MB');
      return;
    }

    setDocuments(prev => ({
      ...prev,
      [documentType]: file
    }));
  };

  // Handler for saving form data
  const handleSave = async () => {
    try {
      

      // Update the intern data via the editIntern endpoint
      const response = await axios.post(`http://localhost:8080/api/v1/editIntern/${internID}`, formData);

      if (response.status !== 200) {
        toast.error("Failed to update details")
      }

      toast.success("Intern edited successfully")
    } catch (error) {
      console.error('Error saving intern data:', error);
      toast.error("Internal error")
    }
  };


  // Handler for canceling/resetting form
  const handleCancel = () => {
    setInternId('');
    setFormData({
      forename: '',
      contactNo: '',
      email: '',
      gender: '',
      status: '',
      performance: '',
    });
    setDocuments({
      offerLetter: null,
      certificate: null,
      letterOfRecommendation: null
    });
  };

  return (
    <form className="w-[210mm] min-h-[297mm] mx-auto bg-white p-8 shadow-lg">
      {/* Header with Title and Buttons */}
      <div className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-xl font-medium">Add New Intern</h1>
        <div className="space-x-2">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border rounded text-sm hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex flex-col items-center mb-8">
        <p className="text-sm text-gray-600 mb-2">Enter Intern ID to Update Details</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="DTA38"
            className="w-48 border rounded px-2 py-1 text-sm"
            value={internID}
            onChange={(e) => setInternId(e.target.value)}
          />
          <button 
            type="button"
            onClick={handleSearch}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Personal Details Section */}
        <div>
          <h2 className="text-blue-800 text-sm font-medium mb-6">Personal Details:</h2>
          <div className="space-y-4">
            {[
              { label: 'Forename', name: 'forename', type: 'text' },
              { label: 'ContactNo', name: 'contactNo', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' }
            ].map(field => (
              <div key={field.name} className="flex items-center">
                <label className="w-48 text-sm">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="flex-1 border rounded px-2 py-1"
                />
              </div>
            ))}

            <div className="flex items-center">
              <label className="w-48 text-sm">Gender</label>
              <div className="flex gap-2">
                {['Male', 'Female'].map((gender) => (
                  <button 
                    type="button"
                    key={gender}
                    onClick={() => handleGenderSelect(gender.toLowerCase())}
                    className={`px-6 py-1 rounded text-sm transition-colors
                      ${formData.gender === gender.toLowerCase()
                        ? 'bg-gray-300' 
                        : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-48 text-sm">Status</label>
              <div className="flex gap-2">
                {[
                  { label: 'Working', value: 'working', bgColor: 'green' },
                  { label: 'Left', value: 'left', bgColor: 'blue' },
                  { label: 'Terminated', value: 'terminated', bgColor: 'red' },
                  { label: 'On Leave', value: 'onLeave', bgColor: 'yellow' }
                ].map(({ label, value, bgColor }) => (
                  <button 
                    type="button"
                    key={value}
                    onClick={() => handleStatusSelect(value)}
                    className={`px-4 py-1 rounded text-sm transition-colors
                      ${formData.status === value 
                        ? `bg-${bgColor}-200` 
                        : `bg-${bgColor}-100 hover:bg-${bgColor}-200`
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-48 text-sm">Performance</label>
              <div className="flex gap-2">
                {[
                  { label: 'NA', value: 'na', bgColor: 'gray' },
                  { label: 'Bad', value: 'bad', bgColor: 'red' },
                  { label: 'Average', value: 'average', bgColor: 'yellow' },
                  { label: 'Good', value: 'good', bgColor: 'blue' },
                  { label: 'Perfect', value: 'perfect', bgColor: 'green' }
                ].map(({ label, value, bgColor }) => (
                  <button 
                    type="button"
                    key={value}
                    onClick={() => handlePerformanceSelect(value)}
                    className={`px-4 py-1 rounded text-sm transition-colors
                      ${formData.performance === value 
                        ? `bg-${bgColor}-200` 
                        : `bg-${bgColor}-100 hover:bg-${bgColor}-200`
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upload Documents Section */}
        <div>
          <h2 className="text-blue-800 text-sm font-medium mb-6">Upload Documents</h2>
          <div className="space-y-4">
            {[
              { key: 'offerLetter', label: 'Offer Letter' },
              { key: 'certificate', label: 'Certificate' },
              { key: 'letterOfRecommendation', label: 'Letter Of Recommendation' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center">
                <label className="w-48 text-sm">{label}</label>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer">
                    <span className="px-4 py-1 border rounded text-sm text-gray-500 hover:bg-gray-50">
                      {documents[key] ? documents[key].name : 'Upload Documents'}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload(key)}
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                  <Download className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditIntern;