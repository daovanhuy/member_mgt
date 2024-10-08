import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Gift, DollarSign, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">User Management System</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200"><Home className="inline-block mr-1" size={18} />Home</Link>
          <Link to="/users" className="hover:text-blue-200"><Users className="inline-block mr-1" size={18} />Users</Link>
          <Link to="/birthdays" className="hover:text-blue-200"><Gift className="inline-block mr-1" size={18} />Birthdays</Link>
          <Link to="/fees" className="hover:text-blue-200"><DollarSign className="inline-block mr-1" size={18} />Fees</Link>
          <Link to="/settings" className="hover:text-blue-200"><Settings className="inline-block mr-1" size={18} />Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;