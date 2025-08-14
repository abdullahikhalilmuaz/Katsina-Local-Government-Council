export default function Reports() {
  // Sample data - replace with actual data from your backend
  const departmentStats = [
    { department: "Personnel", totalStaff: 320, filesCollected: 85, filesReturned: 72 },
    { department: "PHCC", totalStaff: 280, filesCollected: 68, filesReturned: 60 },
    { department: "ESSD", totalStaff: 195, filesCollected: 52, filesReturned: 45 },
    { department: "Agric", totalStaff: 150, filesCollected: 40, filesReturned: 35 },
    { department: "WATSAN", totalStaff: 180, filesCollected: 48, filesReturned: 42 },
    { department: "Works", totalStaff: 120, filesCollected: 35, filesReturned: 21 },
  ];

  return (
    <div>
      <h1 className="page-title">Reports</h1>
      
      <div className="dashboard-container" style={{ marginBottom: '30px' }}>
        <div className="dashboard-card">
          <span className="card-icon">📊</span>
          <h3 className="card-title">Files Collected</h3>
          <p className="card-value">328</p>
        </div>
        <div className="dashboard-card">
          <span className="card-icon">✅</span>
          <h3 className="card-title">Files Returned</h3>
          <p className="card-value">275 (84%)</p>
        </div>
        <div className="dashboard-card">
          <span className="card-icon">⌛</span>
          <h3 className="card-title">Pending Returns</h3>
          <p className="card-value">53 (16%)</p>
        </div>
      </div>
      
      <div className="section-title">Department-wise Statistics</div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Total Staff</th>
              <th>Files Collected</th>
              <th>Files Returned</th>
              <th>Return Rate</th>
            </tr>
          </thead>
          <tbody>
            {departmentStats.map((dept, index) => (
              <tr key={index}>
                <td>{dept.department}</td>
                <td>{dept.totalStaff}</td>
                <td>{dept.filesCollected}</td>
                <td>{dept.filesReturned}</td>
                <td>{Math.round((dept.filesReturned / dept.filesCollected) * 100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}