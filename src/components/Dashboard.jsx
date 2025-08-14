export default function Dashboard() {
  // Sample data - replace with actual data from your backend
  const stats = [
    { title: "Total Staff", value: "1,245", icon: "👥" },
    { title: "Files Collected", value: "328", icon: "📥" },
    { title: "Files Returned", value: "275", icon: "📤" },
    { title: "Pending Returns", value: "53", icon: "⏳" },
  ];

  const recentActivities = [
    { name: "Abdullahi Musa", action: "File collected", date: "2025-08-15 09:30", status: "collected" },
    { name: "Aisha Bello", action: "File returned", date: "2025-08-15 10:15", status: "returned" },
    { name: "Yusuf Ibrahim", action: "File transferred to ESSD", date: "2025-08-14 14:20", status: "transferred" },
    { name: "Fatima Ahmed", action: "File collected", date: "2025-08-14 11:45", status: "collected" },
    { name: "Mohammed Abubakar", action: "File pending return", date: "2025-08-13 16:10", status: "pending" },
  ];

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      
      <div className="dashboard-container">
        {stats.map((stat, index) => (
          <div key={index} className="dashboard-card">
            <span className="card-icon">{stat.icon}</span>
            <h3 className="card-title">{stat.title}</h3>
            <p className="card-value">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="section-title">Recent Activities</div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Action</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.name}</td>
                <td>{activity.action}</td>
                <td>{activity.date}</td>
                <td>
                  <span className={`status-badge badge-${activity.status}`}>
                    {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}