import React, { useState } from 'react';
import { Calendar, Mail } from 'lucide-react';

interface Birthday {
  id: number;
  name: string;
  birthDate: string;
  email: string;
}

const BirthdayManagement: React.FC = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>([
    { id: 1, name: 'John Doe', birthDate: '1990-04-15', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', birthDate: '1985-04-18', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', birthDate: '1992-04-22', email: 'mike@example.com' },
  ]);

  const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toISOString().slice(0, 7));

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  const filteredBirthdays = birthdays.filter((birthday) => 
    birthday.birthDate.startsWith(selectedMonth)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Birthday Management</h1>
      
      <div className="mb-4 flex items-center">
        <Calendar className="mr-2" size={24} />
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="border rounded-lg px-4 py-2"
        >
          <option value="2023-01">January</option>
          <option value="2023-02">February</option>
          <option value="2023-03">March</option>
          <option value="2023-04">April</option>
          <option value="2023-05">May</option>
          <option value="2023-06">June</option>
          <option value="2023-07">July</option>
          <option value="2023-08">August</option>
          <option value="2023-09">September</option>
          <option value="2023-10">October</option>
          <option value="2023-11">November</option>
          <option value="2023-12">December</option>
        </select>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Birth Date</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBirthdays.map((birthday) => (
              <tr key={birthday.id} className="border-t">
                <td className="px-4 py-2">{birthday.name}</td>
                <td className="px-4 py-2">{birthday.birthDate}</td>
                <td className="px-4 py-2">{birthday.email}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 flex items-center">
                    <Mail size={18} className="mr-1" /> Send Wishes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BirthdayManagement;