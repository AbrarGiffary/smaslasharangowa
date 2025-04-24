'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
  <div className="sidebar-top-horizontal">
    <img src="/logo-smas.png" alt="Logo Sekolah" className="sidebar-logo" />
    <p className="sidebar-admin">Hi, Admin</p>
  </div>

  <nav className="sidebar-nav">
    <Link href="/dashboard/admin" className="sidebar-link">Dashboard</Link>

    <div className="dropdown-section">
      <button className="sidebar-link dropdown-toggle" onClick={toggleDropdown}>
        Data User {isDropdownOpen ? '▲' : '▼'}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <Link href="/dashboard/admin/users/teacher" className="dropdown-item">Teacher</Link>
          <Link href="/dashboard/admin/users/student" className="dropdown-item">Student</Link>
        </div>
      )}
    </div>

    <Link href="/dashboard/admin/class" className="sidebar-link">Class</Link>
    <Link href="/dashboard/admin/subjects" className="sidebar-link">Subjects</Link>
  </nav>

  <div className="sidebar-bottom">
    <Link href="/logout" className="sidebar-link logout">Logout</Link>
  </div>
</div>
  );
}
