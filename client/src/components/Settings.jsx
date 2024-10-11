import React, { useState } from 'react';

const Settings = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    alerts: true,
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleToggle = (e) => {
    const { name } = e.target;
    setNotifications({
      ...notifications,
      [name]: !notifications[name],
    });
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    console.log('Password Data:', passwordData);
  };

  const handleNotificationsSave = (e) => {
    e.preventDefault();
    console.log('Notification Preferences:', notifications);
  };

  return (
    <>
    <div>
        <div>
            
        </div>
    </div>
    <div className="min-h-screen flex justify-center items-center bg-[#f7fbff] p-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-[7%]">
        {/* Change Password Section */}
        <div className="bg-[#76a2f8] p-6 rounded-[50px] shadow-lg">
          <h3 className="text-2xl  font-semibold text-center mb-4">Change Password</h3>
          <form onSubmit={handlePasswordSave} className="space-y-4 text-gray-600">
            <p>
            Current Password
            </p>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              placeholder=""
              className="w-full p-2 border border-gray-300 rounded-md"
            />
             <p>
             New Password            </p>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder=""
              className="w-full p-2 border border-gray-300 rounded-md"
            />
             <p>
             Re-Enter            </p>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder=""
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div className='w-full flex justify-center items-center'>
            <button
              type="submit"
              className="w-[30%] bg-gray-700 text-white p-1 rounded-md hover:bg-gray-900 border border-white "
            >
              Save
            </button>
            </div>
            
          </form>
        </div>

        {/* Notification Preferences Section */}
        <div className="bg-[#76a2f8] p-6 rounded-[50px] shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Notification Preferences</h3>
          <form onSubmit={handleNotificationsSave} className="space-y-6 font-bold text-lg">
            <div className="flex items-center justify-between mt-[3vw]">
              <label>Email Notifications</label>
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleToggle}
                className="toggle-checkbox"
              />
            </div>
            <div className="flex items-center justify-between">
              <label>SMS Notifications</label>
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleToggle}
                className="toggle-checkbox"
              />
            </div>
            <div className="flex items-center justify-between">
              <label>Alerts</label>
              <input
                type="checkbox"
                name="alerts"
                checked={notifications.alerts}
                onChange={handleToggle}
                className="toggle-checkbox"
              />
            </div>
            <p className="text-center text-gray-400 w-full text-sm mt-4">These preferences can be changed anytime</p>
            <div className='w-full flex justify-center items-center'>
            <button
              type="submit"
              className="w-[30%] bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 border border-black "
            >
              Save
            </button>
            </div>
          </form>
          
        </div>

        {/* Coming Soon Section */}
        <div className="bg-[#76a2f8] p-6 rounded-[50px] shadow-lg flex justify-center items-center">
          <h3 className="text-3xl font-bold text-center">COMING SOON</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Settings;
