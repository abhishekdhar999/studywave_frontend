'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token in dashboard",token)
    axios.get('http://localhost:3001/class/today', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setClasses(res.data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">All My Classes</h2>

  {classes.length === 0 ? (
    <p className="text-gray-500">No classes available.</p>
  ) : (
    classes.map((cls, i) => (
      <div
        key={i}
        className="border rounded-lg shadow-sm p-4 my-4 bg-white hover:shadow-md transition duration-200"
      >
        <h3 className="text-xl font-semibold text-indigo-600">{cls.title}</h3>
        <p className="text-gray-700 mt-1">📅 Date: {cls.date}</p>
        <p className="text-gray-700">⏰ Time: {cls.time}</p>
        <p className="text-gray-700">👨‍🏫 Teacher: {cls.teacher?.name || 'N/A'}</p>
      </div>
    ))
  )}
</div>

  );
}
