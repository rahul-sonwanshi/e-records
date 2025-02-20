import React, { useState, useEffect } from 'react';
import './TileView.css';
import Tile from '../Tile/Tile';
import { Employee } from '../../interfaces/common.interface';
import DetailedView from '../DetailedView/DetailedView';

const TileView: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null); // Type as number or null
    const [isDetailedViewOpen, setIsDetailedViewOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data: Employee[] = await response.json();
                setEmployees(data.slice(0, 10));
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        fetchEmployeeData();
    }, []);

    const handleTileClick = (employeeId: number) => {
        setSelectedEmployeeId(employeeId);
        setIsDetailedViewOpen(true);
    };

    const closeDetailedView = () => {
        setIsDetailedViewOpen(false);
        setSelectedEmployeeId(null);
    };

    const selectedEmployee = employees.find(emp => emp.id === selectedEmployeeId);

    return (
        <div className="tile-container">
            <div className="tile-view">
                {employees.map(employee => (
                    <Tile
                        key={employee.id}
                        employee={employee}
                        onTileClick={handleTileClick}
                    />
                ))}
            </div>

            {isDetailedViewOpen && selectedEmployee && (
                <DetailedView
                    employee={selectedEmployee}
                    onClose={closeDetailedView}
                />
            )}
        </div>
    );
};

export default TileView;