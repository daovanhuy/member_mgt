import React from 'react';
import { Users, Gift, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <Users className="text-blue-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <Gift className="text-green-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Birthdays This Month</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <DollarSign className="text-yellow-500 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Pending Fees</h2>
          <p className="text-3xl font-bold">10</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Birthdays</h2>
        <ul className="space-y-2">
          <li>John Doe - April 15</li>
          <li>Jane Smith - April 18</li>
          <li>Mike Johnson - April 22</li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Fees Due Soon</h2>
        <ul className="space-y-2">
          <li>Alice Brown - Due in 5 days</li>
          <li>Bob Wilson - Due in 7 days</li>
          <li>Carol Davis - Due in 10 days</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;