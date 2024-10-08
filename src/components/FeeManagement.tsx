import React, { useState, useEffect } from 'react';
import { DollarSign, AlertCircle } from 'lucide-react';

interface Fee {
  id: number;
  name: string;
  lastPaymentDate: string;
  status: 'Paid' | 'Pending';
  dueDate: string;
}

const FeeManagement: React.FC = () => {
  const [fees, setFees] = useState<Fee[]>([]);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/fees');
      const data = await response.json();
      setFees(data);
    } catch (error) {
      console.error('Error fetching fees:', error);
    }
  };

  const handlePaymentUpdate = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/fees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'Paid',
          lastPaymentDate: new Date().toISOString().split('T')[0],
        }),
      });
      if (response.ok) {
        fetchFees(); // Refresh the fees list
      }
    } catch (error) {
      console.error('Error updating fee:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Fee Management</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Last Payment Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id} className="border-t">
                <td className="px-4 py-2">{fee.name}</td>
                <td className="px-4 py-2">{fee.lastPaymentDate}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {fee.status}
                  </span>
                </td>
                <td className="px-4 py-2">{fee.dueDate}</td>
                <td className="px-4 py-2">
                  {fee.status === 'Pending' && (
                    <button
                      onClick={() => handlePaymentUpdate(fee.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center"
                    >
                      <DollarSign size={16} className="mr-1" /> Mark as Paid
                    </button>
                  )}
                  {new Date(fee.dueDate) <= new Date(new Date().setDate(new Date().getDate() + 30)) && (
                    <span className="ml-2 text-red-500 flex items-center">
                      <AlertCircle size={16} className="mr-1" /> Due soon
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeManagement;