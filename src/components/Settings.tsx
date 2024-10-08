import React from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        
        <div className="mb-4">
          <label className="block mb-2">Birthday Reminder</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option value="1">1 day before</option>
            <option value="3">3 days before</option>
            <option value="7">1 week before</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Fee Payment Reminder</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option value="7">1 week before</option>
            <option value="14">2 weeks before</option>
            <option value="30">1 month before</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Send email notifications
          </label>
        </div>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Send in-app notifications
          </label>
        </div>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Save size={20} className="mr-2" /> Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;