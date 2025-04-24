'use client';
import React from 'react';
import "@/styles/dashboardStudent.css";

export default function Dashboard() {
    return (
      <div className="dashboard-container">
        <main className="dashboard-content">
          <header className="dashboard-header">
          </header>
  
          <section className="welcome-card">
            <h2>Welcome, Student Higher Secondary School Team!</h2>
            <p>Lorem ipsum dolor sit amet...</p>
            <img src="/hero-illustration.png" alt="Hero" />
          </section>
  
          <section className="status-section">
            <div className="status-box">
              <h3>Attendance</h3>
              <div className="circle">
                <span>53%</span>
              </div>
              <p>Present 53% | Absent 47%</p>
            </div>
            <div className="status-box">
              <h3>Overall Task</h3>
              <div className="circle blue">
                <span>70%</span>
              </div>
              <p>Done 70% | Unfinished 30%</p>
            </div>
          </section>
  
          <section className="info-grid">
            <div className="notice-board">
              <h4>Notice Board</h4>
              <div className="notice yellow">
                <strong>Sports Day Announcement</strong>
                <p>The school’s Annual Sports Day...</p>
              </div>
              <div className="notice purple">
                <strong>Summer Break Start Date</strong>
                <p>Summer break begins...</p>
              </div>
            </div>
  
            <div className="documents">
              <h4>Documents</h4>
              <ul>
                <li>Class A 1st semester result</li>
                <li>Kelvin college application</li>
                <li>Class B attendance sheet</li>
              </ul>
            </div>
  
            <div className="activities">
              <h4>Upcoming Activities</h4>
              <ul>
                <li>Meeting with the VC - Zoom - Due Soon</li>
                <li>Meeting with the J... - Zoom - Upcoming</li>
                <li>Class B middle sess... - Lab</li>
                <li>Send Mr Ayo class... - Email</li>
              </ul>
            </div>
          </section>
  
          <section className="subject-result">
            <h4>Subject Result</h4>
            <table>
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Subject Name</th>
                  <th>Grade</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#969</td>
                  <td>Accounting</td>
                  <td>A+</td>
                  <td>22/02/2025</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    );
  }