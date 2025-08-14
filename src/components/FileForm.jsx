import { useParams } from "react-router-dom";

export default function FileForm() {
  const { id } = useParams();
  const isEditMode = !!id;

  // Sample departments
  const departments = ["Personnel", "PHCC", "ESSD", "Agric", "WATSAN", "Works"];

  return (
    <div className="form-container">
      <h2 className="form-title">{isEditMode ? "Edit File Record" : "Add New File Record"}</h2>
      
      <form>
        <div className="form-group">
          <label className="form-label">Staff Name</label>
          <input type="text" className="form-control" placeholder="Enter staff full name" />
        </div>
        
        <div className="form-group">
          <label className="form-label">File Number</label>
          <input type="text" className="form-control" placeholder="Auto-generated file number" readOnly />
        </div>
        
        <div className="form-group">
          <label className="form-label">Staff ID Number</label>
          <input type="text" className="form-control" placeholder="Enter staff ID number" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Department</label>
          <select className="form-select">
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">Grade Level</label>
          <input type="text" className="form-control" placeholder="Enter grade level (e.g., GL08)" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Transferred To (Optional)</label>
          <input type="text" className="form-control" placeholder="Enter location transferred to" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Purpose of Collection</label>
          <textarea className="form-control" rows="3" placeholder="Enter purpose (e.g., verification, exercise, etc.)"></textarea>
        </div>
        
        <div className="form-group">
          <label className="form-label">Collection Date & Time</label>
          <input type="datetime-local" className="form-control" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Collector's Name</label>
          <input type="text" className="form-control" placeholder="Enter collector's name" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Collector's Signature</label>
          <div style={{ border: '1px dashed #ccc', height: '100px', borderRadius: '4px' }}>
            {/* Signature pad would go here */}
            <p style={{ textAlign: 'center', color: '#999', lineHeight: '100px' }}>Signature Area</p>
          </div>
        </div>
        
        <div className="form-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button type="button" className="btn btn-secondary">Cancel</button>
          <button type="submit" className="btn btn-primary">{isEditMode ? "Update Record" : "Save Record"}</button>
        </div>
      </form>
    </div>
  );
}