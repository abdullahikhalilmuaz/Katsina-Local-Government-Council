export default function StaffRecords() {
  // Sample data - replace with actual data from your backend
  const staffRecords = [
    { id: 1, name: "Abdullahi Musa", fileNumber: "KTLG/2025/001", staffId: "EMP001", department: "Personnel", gradeLevel: "GL08", status: "active" },
    { id: 2, name: "Aisha Bello", fileNumber: "KTLG/2025/002", staffId: "EMP002", department: "PHCC", gradeLevel: "GL07", status: "active" },
    { id: 3, name: "Yusuf Ibrahim", fileNumber: "KTLG/2025/003", staffId: "EMP003", department: "ESSD", gradeLevel: "GL09", status: "active" },
    { id: 4, name: "Fatima Ahmed", fileNumber: "KTLG/2025/004", staffId: "EMP004", department: "Agric", gradeLevel: "GL06", status: "active" },
    { id: 5, name: "Mohammed Abubakar", fileNumber: "KTLG/2025/005", staffId: "EMP005", department: "WATSAN", gradeLevel: "GL10", status: "inactive" },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Staff Records</h1>
        <button className="btn btn-primary">Add New Staff</button>
      </div>
      
      <div className="table-container">
        <div className="table-actions">
          <div className="search-box">
            <input type="text" placeholder="Search staff..." className="form-control" />
          </div>
          <div className="filter-options">
            <select className="form-select">
              <option value="">All Departments</option>
              <option value="Personnel">Personnel</option>
              <option value="PHCC">PHCC</option>
              <option value="ESSD">ESSD</option>
              <option value="Agric">Agric</option>
              <option value="WATSAN">WATSAN</option>
              <option value="Works">Works</option>
            </select>
          </div>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Staff Name</th>
              <th>File Number</th>
              <th>Staff ID</th>
              <th>Department</th>
              <th>Grade Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffRecords.map((staff, index) => (
              <tr key={staff.id}>
                <td>{index + 1}</td>
                <td>{staff.name}</td>
                <td>{staff.fileNumber}</td>
                <td>{staff.staffId}</td>
                <td>{staff.department}</td>
                <td>{staff.gradeLevel}</td>
                <td>
                  <span className={`status-badge ${staff.status === 'active' ? 'badge-collected' : 'badge-pending'}`}>
                    {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
                  </span>
                </td>
                <td>
                  <button className="btn btn-secondary" style={{ marginRight: '5px' }}>Edit</button>
                  <button className="btn btn-primary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}