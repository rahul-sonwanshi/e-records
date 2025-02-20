import React from "react";
import "./DetailedView.css";
import { Employee } from "../../interfaces/common.interface";

interface DetailedViewProps {
  employee: Employee;
  onClose: () => void;
}

const DetailedView: React.FC<DetailedViewProps> = ({ employee, onClose }) => {
  return (
    <div className="detailed-view-container">
      <div className="detailed-view">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="detailed-employee-info">
          <h2>{employee.name}</h2>
          <p>
            <strong>ID:</strong> {employee.id}
          </p>
          <p>
            <strong>Username:</strong> {employee.username}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Full Details from API:</strong> {/* for testing */}
          </p>
          <pre>{JSON.stringify(employee, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
