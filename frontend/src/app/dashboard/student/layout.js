'use client';
import SidebarStudent from '@/components/SidebarStudent';
import '@/styles/dashboardStudent.css';
import { FaHome, FaBook, FaClock, FaSignOutAlt } from 'react-icons/fa';

export default function StudentLayout({ children }) {
  return (
    <div className="dashboard-container">
      <SidebarStudent/>
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}
