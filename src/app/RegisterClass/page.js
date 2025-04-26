'use client'
import { useState } from 'react';
import axios from 'axios';

export default function RegisterClass() {
  const [title, setTitle] = useState('');
  const [days, setDays] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [meetingLink, setMeetingLink] = useState('');

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('/class/create', {
        title,
        days,
        date,
        time,
        meetingLink,
        recurring: true
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Class registered');
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold text-center text-indigo-600">Register Class</h2>

      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        placeholder="Class Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        onChange={e => setDays(e.target.value.split(','))}
        placeholder="Days (comma separated, e.g. Monday,Wednesday)"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="date"
        onChange={e => setDate(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        onChange={e => setTime(e.target.value)}
        placeholder="Time (e.g., 10:00 AM - 11:00 AM)"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        onChange={e => setMeetingLink(e.target.value)}
        placeholder="Zoom Link"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
      >
        Create Class
      </button>
    </div>
  );
}
