import React, { useState } from 'react';
import profile from '../assets/profile.png'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    alternateNumber: '',
    role: '',
    language: '',
    houseNo: '',
    street: '',
    state: '',
    city: '',
    pincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      alternateNumber: '',
      role: '',
      language: '',
      houseNo: '',
      street: '',
      state: '',
      city: '',
      pincode: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f7fbff] mt-[6%] mb-[10%]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-8">Edit Profile</h2>

        {/* Profile Image and Change Button */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 flex-row relative w-[90%] bg-gray-200 p-3 rounded-[25px]">
            <img
              src={profile}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover hover:cursor-pointer"
            />
            <p>
                <span className='font-bold'>
                Jhon Doe
                </span>
                <br />
                <span>
                    <span className='text-blue-400 hover:underline hover:cursor-pointer'>
                    Click here 
                    </span>{' '}
                 to change your Profile Picture
                </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[15%]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20%]">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Value"
              />
            </div>

            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Value"
              />
            </div>

            <div>
              <label className="block text-gray-600">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Value"
              />
            </div>

            <div>
              <label className="block text-gray-600">Alternate Number</label>
              <input
                type="text"
                name="alternateNumber"
                value={formData.alternateNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Value"
              />
            </div>

            <div>
              <label className="block text-gray-600">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600">Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3"
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>

          {/* Address Section */}
          <div className="">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20%]">
              <div>
                <label className="block text-gray-600">House No. / Street Name / Area</label>
                <input
                  type="text"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Value"
                />
              </div>

              <div>
                <label className="block text-gray-600">Colony / Street / Locality</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Value"
                />
              </div>

              <div>
                <label className="block text-gray-600">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Value"
                />
              </div>

              <div>
                <label className="block text-gray-600">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Value"
                />
              </div>

              <div>
                <label className="block text-gray-600">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Value"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="bg-transparent text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
