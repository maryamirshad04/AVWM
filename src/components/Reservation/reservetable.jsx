import React from 'react';
import './ReserveTable.css';

const ReserveTable = () => {
  return (
    <div className="reservation-container">
      <div className="reservation-header">
        <h1 className="reservation-title">Reserve Your Table</h1>
      </div>

      <div className="reservation-form">
        {/* Left Column */}
        <div className="form-group">
          <label>First name</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" required />
        </div>

        {/* Right Column */}
        <div className="form-group">
          <label>Phone number</label>
          <input type="tel" required />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" required />
        </div>

        <div className="form-group time-input">
          <label>Time</label>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <input type="time" required style={{ flex: 1 }} />
            <span className="time-separator">-</span>
            <input type="time" required style={{ flex: 1 }} />
          </div>
        </div>

        <div className="form-group">
          <label>Number of guests</label>
          <input type="number" min="1" required />
        </div>

        <div className="form-group">
          <label>Table preference</label>
          <select required>
            <option value="">Select...</option>
            <option value="window">Window</option>
            <option value="outdoor">Outdoor</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-btn">
            Reserve Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;