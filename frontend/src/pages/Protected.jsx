import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Protected = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');  
    } else {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Protected;
