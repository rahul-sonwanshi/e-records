import React, { useState } from "react";
import "./BunButton.css";

interface BunButtonProps {
  employeeId: number;
  onDelete?: (id: number) => void;
  children?: React.ReactNode;
}

const BunButton: React.FC<BunButtonProps> = ({
  employeeId,
  onDelete,
  children,
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  const toggleOptions = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleOptionClick = (option: string) => {
    setIsOptionsOpen(false);
    if (option === "edit") {
      console.log(`Edit employee with ID: ${employeeId}`);
    } else if (option === "flag") {
      console.log(`Flag employee with ID: ${employeeId}`);
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
          <button onClick={() => handleOptionClick("edit")}>Edit</button>
          <button onClick={() => handleOptionClick("flag")}>Flag</button>
          <button onClick={() => handleOptionClick("delete")}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BunButton;
