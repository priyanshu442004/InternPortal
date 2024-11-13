import React, { useState } from 'react';
import { Search, Download, AlertCircle } from 'lucide-react';
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
    role: '',
    canDownloadCertificate: false,
    canDownloadLOR: false,
    position: '',
    department: '',
    projects: '',
  });
  const [documents, setDocuments] = useState({
    offerLetter: null,
    certificate: null,
    letterOfRecommendation: null
  });

  const roleOptions = [
    { value: 'web-developer', label: 'Web Developer' },
    { value: 'python-developer', label: 'Python Developer' },
    { value: 'app-developer', label: 'App Developer' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'hr', label: 'HR' },
    { value: 'ux-designer', label: 'UX Designer' }
  ];

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
        role: response.data.role || '',
        performance: response.data.performance || '',
        position: response.data.position || '',
        department: response.data.department || '',
        projects: response.data.projects || '',
        canDownloadCertificate: response.data.canDownloadCertificate,
        canDownloadLOR: response.data.canDownloadLOR,
  
        // here for add (position,department,project)
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

  const handleRoleChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, role: value }));
    if (!value) {
      setErrors(prev => ({ ...prev, role: 'Role selection is required' }));
    } else {
      setErrors(prev => ({ ...prev, role: '' }));
    }
  };

  const handleCertificateIdChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, certificateId: value }));
    if (!value) {
      setErrors(prev => ({ ...prev, certificateId: 'Certificate ID is required' }));
    } else {
      setErrors(prev => ({ ...prev, certificateId: '' }));
    }
  };

  const handleDownloadPermissionChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

  const handleDepartmentSelect = (department) => {
    setFormData(prev => ({
      ...prev,
      department
    }));
  };

  // Handler for saving form data
  const handleSubmit = async () => {
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
  const resetForm = () => {
    setInternId('');
    setFormData({
      forename: '',
      contactNo: '',
      email: '',
      gender: '',
      status: '',
      performance: '',
      role: '',
      position: '',
      department: '',
      projects: '',
      canDownloadCertificate: false,
      canDownloadLOR: false,
    });

  };



  return (
    <form className="w-[210mm] min-h-[297mm] mx-auto bg-white p-8 shadow-lg"  >
      {/* Header with Title and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Add New Intern</h1>
        <div className="space-x-2">
          <button
            type="button"
            className="px-4 py-2 border rounded hover:bg-gray-50"
            onClick={resetForm}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            onClick={handleSubmit}
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
              { label: 'Email', name: 'email', type: 'email' }, 
              { label: 'Position/Opportunity Pursuing', name: 'position', type: 'text' }
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

        {/* Role Selection */}
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium w-32">Role</label>
          <div className="flex-1">
            <select
              value={formData.role}
              onChange={handleRoleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              {roleOptions.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            {formData.role && (
              <div className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {formData.role}
              </div>
            )}
          </div>
        </div>

        {/* Download Permissions  */}
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium w-32">Certificate Download</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={formData.canDownloadCertificate}
                onChange={() => handleDownloadPermissionChange('canDownloadCertificate', true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!formData.canDownloadCertificate}
                onChange={() => handleDownloadPermissionChange('canDownloadCertificate', false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium w-32">LOR Download</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={formData.canDownloadLOR}
                onChange={() => handleDownloadPermissionChange('canDownloadLOR', true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!formData.canDownloadLOR}
                onChange={() => handleDownloadPermissionChange('canDownloadLOR', false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-48 text-sm">Working Department</label>
          <div className="flex gap-2">
            {['Web Development', 'Marketing', 'Business Development'].map((dept) => (
              <button
                type="button"
                key={dept}
                onClick={() => handleDepartmentSelect(dept.toLowerCase())}
                className={`px-4 py-1 rounded text-sm transition-colors
                      ${formData.department === dept.toLowerCase()
                    ? 'bg-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

          
        <div className="flex items-start">
          <label className="w-48 text-sm pt-2">Projects</label>
          <div className="flex-1 space-y-1">
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1 h-24 resize-none"
              placeholder="Enter projects separated by commas"
            />
            <p className="text-xs text-gray-500">Enter the projects done by intern, and separate them with a comma</p>
          </div>
        </div>

      </div>
    </form>
  );
};

export default EditIntern;