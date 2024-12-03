import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-50 to-teal-500">
      <div className="w-full max-w-5xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-teal-500">Data Table</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-teal-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 min-w-[150px]"> 
                  Date of Birth
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Alice Johnson
                </td>
                <td className="px-6 py-4">1990-05-12</td>
                <td className="px-6 py-4">alice@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Bob Smith
                </td>
                <td className="px-6 py-4">1985-09-23</td>
                <td className="px-6 py-4">bob@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Carol Lee
                </td>
                <td className="px-6 py-4">1992-11-30</td>
                <td className="px-6 py-4">carol@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Alice Johnson
                </td>
                <td className="px-6 py-4">1990-05-12</td>
                <td className="px-6 py-4">alice@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Bob Smith
                </td>
                <td className="px-6 py-4">1985-09-23</td>
                <td className="px-6 py-4">bob@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Carol Lee
                </td>
                <td className="px-6 py-4">1992-11-30</td>
                <td className="px-6 py-4">carol@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Alice Johnson
                </td>
                <td className="px-6 py-4">1990-05-12</td>
                <td className="px-6 py-4">alice@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Bob Smith
                </td>
                <td className="px-6 py-4">1985-09-23</td>
                <td className="px-6 py-4">bob@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              <tr className="bg-white border-b hover:bg-teal-50 cursor-pointer">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Carol Lee
                </td>
                <td className="px-6 py-4">1992-11-30</td>
                <td className="px-6 py-4">carol@example.com</td>
                <td className="px-6 py-4">199012</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Protected;
