import React from "react";
import "./DetailedView.css";
import { Employee } from "../../interfaces/common.interface";
import closeBtnIcon from "../../assets/close-btn.svg";
import profileIcon from "../../assets/profile-circle.svg";

interface DetailedViewProps {
  employee: Employee;
  onClose: () => void;
}

const DetailedView: React.FC<DetailedViewProps> = ({ employee, onClose }) => {
  const renderJSON = (obj: any, indentLevel: number = 0) => {
    const indent = "  ".repeat(indentLevel);

    return Object.entries(obj).map(([key, value]) => {
      if (key.toLowerCase().includes("name")) {
        return null;
      }

      return (
        <div key={key} className="json-line">
          <span className="json-key">
            {indent}
            {key}:{" "}
          </span>
          <span className="json-value">
            {typeof value === "object" && value !== null ? (
              <div className="json-nested">
                {renderJSON(value, indentLevel + 1)}
              </div>
            ) : (
              String(value)
            )}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="detailed-view-container">
      <div className="detailed-view">
        <div className="close-button" onClick={onClose}>
          <img src={closeBtnIcon} alt="" />
        </div>
        <div className="employee-heading">
          <img src={profileIcon} alt="profile-pic" />
          <div className="employee-name">{employee.name}</div>
        </div>

        {/* Adding the name here */}
        <div className="detailed-employee-info">{renderJSON(employee)}</div>
      </div>
    </div>
  );
};

export default DetailedView;
