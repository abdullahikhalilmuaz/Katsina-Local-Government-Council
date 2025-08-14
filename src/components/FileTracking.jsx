export default function FileTracking() {
  // Sample data - replace with actual data from your backend
  const fileRecords = [
    { 
      id: 1, 
      name: "Abdullahi Musa", 
      fileNumber: "KTLG/2025/001", 
      collected: true, 
      returned: false, 
      collectionDate: "2025-08-15 09:30", 
      returningDate: "", 
      collector: "Ibrahim Sani", 
      purpose: "Verification", 
      department: "Personnel" 
    },
    { 
      id: 2, 
      name: "Aisha Bello", 
      fileNumber: "KTLG/2025/002", 
      collected: true, 
      returned: true, 
      collectionDate: "2025-08-14 10:15", 
      returningDate: "2025-08-15 14:30", 
      collector: "Yusuf Adamu", 
      purpose: "Promotion Exercise", 
      department: "PHCC" 
    },
    { 
      id: 3, 
      name: "Yusuf Ibrahim", 
      fileNumber: "KTLG/2025/003", 
      collected: true, 
      returned: false, 
      collectionDate: "2025-08-13 14:20", 
      returningDate: "", 
      collector: "Amina Lawal", 
      purpose: "Annual Review", 
      department: "ESSD" 
    },
    { 
      id: 4, 
      name: "Fatima Ahmed", 
      fileNumber: "KTLG/2025/004", 
      collected: true, 
      returned: true, 
      collectionDate: "2025-08-12 11:45", 
      returningDate: "2025-08-13 16:10", 
      collector: "Mohammed Abba", 
      purpose: "Training Verification", 
      department: "Agric" 
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">File Tracking</h1>
        <button className="btn btn-primary">Track New File</button>
      </div>
      
      <div className="table-container">
        <div className="table-actions">
          <div className="search-box">
            <input type="text" placeholder="Search files..." className="form-control" />
          </div>
          <div className="filter-options">
            <select className="form-select">
              <option value="">All Status</option>
              <option value="collected">Collected</option>
              <option value="returned">Returned</option>
              <option value="pending">Pending Return</option>
            </select>
          </div>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Staff Name</th>
              <th>File Number</th>
              <th>Department</th>
              <th>Collected</th>
              <th>Returned</th>
              <th>Collection Date</th>
              <th>Returning Date</th>
              <th>Purpose</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fileRecords.map((file, index) => (
              <tr key={file.id}>
                <td>{index + 1}</td>
                <td>{file.name}</td>
                <td>{file.fileNumber}</td>
                <td>{file.department}</td>
                <td>
                  <span className="status-badge badge-collected">Yes</span>
                </td>
                <td>
                  {file.returned ? (
                    <span className="status-badge badge-returned">Yes</span>
                  ) : (
                    <span className="status-badge badge-pending">No</span>
                  )}
                </td>
                <td>{file.collectionDate}</td>
                <td>{file.returningDate || "-"}</td>
                <td>{file.purpose}</td>
                <td>
                  <button className="btn btn-primary">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}