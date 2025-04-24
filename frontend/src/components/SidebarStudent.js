'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaBook, FaClock, FaSignOutAlt } from 'react-icons/fa';

export default function SidebarStudent() {
  return (
    <aside className="sidebar">
      <div className="school-logo">
        <img src="/logo-smas.png" alt="logo" />
        <h3>Hi, Stud</h3>
      </div>
      <nav>
        <ul>
          <li className="active"><FaHome /> Dashboard</li>
          <li><FaBook /> Subjects</li>
          <li><FaClock /> History</li>
        </ul>
      </nav>
      <div className="logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </aside>
  );
}
