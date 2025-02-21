import React from "react";
import "./Tile.css";
import BunButton from "../BunButton/BunButton";
import { Employee } from "../../interfaces/common.interface";

interface TileProps {
  employee: Employee;
  onTileClick: (employeeId: number) => void;
  onDelete: (employeeId: number) => void;
}

const Tile: React.FC<TileProps> = ({ employee, onTileClick, onDelete }) => {
  return (
    <div className="tile" onClick={() => onTileClick(employee.id)}>
      <div className="tile-header">{employee.name}</div>
      <div className="tile-details">
        <p>
          <strong>ID:</strong> {employee.id}
        </p>
        <p>
          <strong>Username:</strong> {employee.username}
        </p>
      </div>
      <BunButton employeeId={employee.id} onDelete={onDelete} />
    </div>
  );
};

export default Tile;
