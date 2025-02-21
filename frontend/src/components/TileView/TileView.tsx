import React, { useState, useEffect } from "react";
import "./TileView.css";
import Tile from "../Tile/Tile";
import { Employee } from "../../interfaces/common.interface";
import DetailedView from "../DetailedView/DetailedView";

interface TileViewProps {
  employees: Employee[];
  onDeleteEmployee: (employeeId: number) => void;
}

const TileView: React.FC<TileViewProps> = ({ employees, onDeleteEmployee }) => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  );
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState<boolean>(false);

  const handleTileClick = (employeeId: number) => {
    setSelectedEmployeeId(employeeId);
    setIsDetailedViewOpen(true);
  };

  const closeDetailedView = () => {
    setIsDetailedViewOpen(false);
    setSelectedEmployeeId(null);
  };

  const selectedEmployee = employees.find(
    (emp) => emp.id === selectedEmployeeId
  );

  return (
    <div className="tile-container">
      <div className="tile-view">
        {employees.map((employee) => (
          <Tile
            key={employee.id}
            employee={employee}
            onTileClick={handleTileClick}
            onDelete={onDeleteEmployee}
          />
        ))}
      </div>

      {isDetailedViewOpen && selectedEmployee && (
        <DetailedView employee={selectedEmployee} onClose={closeDetailedView} />
      )}
    </div>
  );
};

export default TileView;
