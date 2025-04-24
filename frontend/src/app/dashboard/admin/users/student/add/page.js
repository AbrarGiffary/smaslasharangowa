'use client'
import React from 'react'
import '@/styles/student.css';

// export default function AddStudentPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     designation: '',
//     fullName: '',
//     email: '',
//     password: '',
//     subject: '',
//     phone: '',
//     gender: '',
//     class: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Data Murid:', form);
//     router.push('/dashboard/admin/users/student');
//   };
export default function AddStudent() {
  return (
    <div className="student-form-container">
      <h2 className="form-title">Add New Student</h2>

      <form className="student-form">
        <div className="section-header">
          <h3>Student Details</h3>
          <div className="form-buttons">
            <button type="button" className="btn-cancel">cancel</button>
            <button type="reset" className="btn-reset">reset</button>
            <button type="submit" className="btn-save">save</button>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="Enter last name" />
          </div>
          <div className="form-group">
            <label>Photo *</label>
            <div className="photo-upload">Drag and drop or click here to select file</div>
          </div>
          <div className="form-group">
            <label>Date & Place of Birth *</label>
            <div className="dob-place">
              <input type="text" placeholder="3 Februari 1997" />
              <input type="text" placeholder="Jakarta" />
            </div>
          </div>
          <div className="form-group">
            <label>NISN *</label>
            <input type="text" placeholder="231964023" />
          </div>
          <div className="form-group address">
            <label>Address *</label>
            <textarea rows="3" placeholder="Enter student address"></textarea>
          </div>
          <div className="form-group">
            <label>Class *</label>
            <select>
              <option>Class</option>
              <option>10-A</option>
              <option>10-B</option>
              <option>11-A</option>
            </select>
          </div>
        </div>

        <h3 className="login-title">Login/Account Details</h3>
        <div className="form-grid">
          <div className="form-group full">
            <label>User Name *</label>
            <input type="text" placeholder="Enter username" />
          </div>
          <div className="form-group full">
            <label>Password *</label>
            <input type="password" placeholder="********" />
          </div>
        </div>
      </form>
    </div>
  )
}
