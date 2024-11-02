

import { Calendar, X, Upload, Check, AlertCircle } from 'lucide-react';
import React, { useState, useRef } from 'react';

const AddNewIntern = () => {
  const [formData, setFormData] = useState({
    internId: '',
    password: '',
    forename: '',
    contactNo: '',
    email: '',
    dateOfJoining: '',
    gender: '',
    documents: {
      offerLetter: null,
      certificate: null,
      recommendation: null
    }
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [passwordStrength, setPasswordStrength] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const offerLetterRef = useRef(null);
  const certificateRef = useRef(null);
  const recommendationRef = useRef(null);

  const [uploadedFiles, setUploadedFiles] = useState({
    offerLetter: '',
    certificate: '',
    recommendation: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      return false;
    }
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: '' }));
    return true;
  };

  const checkPasswordStrength = (password) => {
    const strength = {
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    setPasswordStrength(strength);

    const isStrong = Object.values(strength).every(Boolean);
    if (!isStrong) {
      setErrors(prev => ({ ...prev, password: 'Password does not meet all requirements' }));
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const handleFileUpload = (type, e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [type]: file
        }
      }));
      setUploadedFiles(prev => ({
        ...prev,
        [type]: file.name
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = Object.values(passwordStrength).every(Boolean);
    
    if (isEmailValid && isPasswordValid) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors');
    }
  };

  const triggerFileInput = (ref) => {
    ref.current.click();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Add New Intern</h1>
        <div className="space-x-2">
          <button type="button" className="px-4 py-2 border rounded hover:bg-gray-50">
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

      <form className="space-y-6 bg-white rounded-lg p-6 shadow-sm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Intern ID</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={formData.internId}
              onChange={(e) => setFormData({...formData, internId: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className={`w-full border rounded p-2 ${errors.password ? 'border-red-500' : ''}`}
              value={formData.password}
              onChange={(e) => {
                setFormData({...formData, password: e.target.value});
                checkPasswordStrength(e.target.value);
              }}
            />
            <div className="mt-2 space-y-1">
              <p className="text-sm font-medium">Password must contain:</p>
              <ul className="text-sm space-y-1">
                {[
                  { label: 'At least 8 characters', check: 'hasMinLength' },
                  { label: 'One uppercase letter', check: 'hasUpperCase' },
                  { label: 'One lowercase letter', check: 'hasLowerCase' },
                  { label: 'One number', check: 'hasNumber' },
                  { label: 'One special character (!@#$%^&*(),.?":{}|<>)', check: 'hasSpecialChar' }
                ].map((requirement) => (
                  <li key={requirement.check} className={`flex items-center ${passwordStrength[requirement.check] ? 'text-green-600' : 'text-gray-500'}`}>
                    {passwordStrength[requirement.check] ? 
                      <Check className="mr-1" size={16} /> : 
                      <AlertCircle className="mr-1" size={16} />
                    }
                    {requirement.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Forename</label>
          <div className="relative">
            <input
              type="text"
              className="w-full border rounded p-2 pr-8"
              value={formData.forename}
              onChange={(e) => setFormData({...formData, forename: e.target.value})}
            />
            {formData.forename && (
              <button 
                type="button"
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => setFormData({...formData, forename: ''})}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Contact No</label>
          <div className="relative">
            <input
              type="tel"
              className="w-full border rounded p-2 pr-8"
              value={formData.contactNo}
              onChange={(e) => setFormData({...formData, contactNo: e.target.value})}
            />
            {formData.contactNo && (
              <button 
                type="button"
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => setFormData({...formData, contactNo: ''})}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <div className="relative">
            <input
              type="email"
              className={`w-full border rounded p-2 ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
                validateEmail(e.target.value);
              }}
              onBlur={(e) => validateEmail(e.target.value)}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Date of Joining</label>
          <div className="relative">
            <input
              type="date"
              className="w-full border rounded p-2 cursor-pointer"
              value={formData.dateOfJoining}
              onChange={(e) => setFormData({...formData, dateOfJoining: e.target.value})}
            />
            <Calendar className="absolute right-2 top-2.5 text-gray-400 pointer-events-none" size={20} />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Gender</label>
          <div className="space-x-2">
            {['male', 'female'].map((gender) => (
              <button
                key={gender}
                type="button"
                className={`px-4 py-2 rounded ${
                  formData.gender === gender 
                    ? 'bg-gray-200' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setFormData({...formData, gender})}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Upload Documents</h3>
          
          <div className="space-y-3">
            <input
              type="file"
              ref={offerLetterRef}
              className="hidden"
              onChange={(e) => handleFileUpload('offerLetter', e)}
              accept=".pdf,.doc,.docx"
            />
            <input
              type="file"
              ref={certificateRef}
              className="hidden"
              onChange={(e) => handleFileUpload('certificate', e)}
              accept=".pdf,.doc,.docx"
            />
            <input
              type="file"
              ref={recommendationRef}
              className="hidden"
              onChange={(e) => handleFileUpload('recommendation', e)}
              accept=".pdf,.doc,.docx"
            />

            {[
              { label: 'Offer Letter', ref: offerLetterRef, key: 'offerLetter' },
              { label: 'Certificate', ref: certificateRef, key: 'certificate' },
              { label: 'Letter Of Recommendation', ref: recommendationRef, key: 'recommendation' }
            ].map((doc) => (
              <div key={doc.key} className="flex items-center space-x-2">
                <span className="w-48 text-sm">{doc.label}</span>
                <div className="flex-1">
                  <button
                    type="button"
                    onClick={() => triggerFileInput(doc.ref)}
                    className="flex items-center space-x-2 px-4 py-2 border rounded text-sm hover:bg-gray-50"
                  >
                    <span>{uploadedFiles[doc.key] || 'Upload Documents'}</span>
                    <Upload size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewIntern;