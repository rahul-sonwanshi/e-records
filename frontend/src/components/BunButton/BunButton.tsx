import React, { useState } from "react";
import "./BunButton.css";

interface BunButtonProps {
  employeeId: number;
  onDelete?: (id: number) => void;
  children?: React.ReactNode;
}

const BunButton: React.FC<BunButtonProps> = ({ employeeId, onDelete }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  const toggleOptions = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleOptionClick = (option: string, event: React.MouseEvent) => {
    setIsOptionsOpen(false);
    event.stopPropagation();
    if (option === "edit") {
      console.log(`Edit employee with ID: ${employeeId}`);
      alert("Employee Edit coming soon...");
    } else if (option === "flag") {
      console.log(`Flag employee with ID: ${employeeId}`);
      alert("Employee flagged");
    } else if (option === "delete") {
      console.log(`Delete employee with ID: ${employeeId}`);
      if (onDelete) {
        onDelete(employeeId);
      }
    }
  };

  return (
    <div className="bun-button-container">
      <div className="bun-button" onClick={toggleOptions}>
        ...
      </div>
      {isOptionsOpen && (
        <div className="bun-options-menu">
          <button onClick={(event) => handleOptionClick("edit", event)}>
            Edit
          </button>
          <button onClick={(event) => handleOptionClick("flag", event)}>
            Flag
          </button>
          <button onClick={(event) => handleOptionClick("delete", event)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BunButton;
