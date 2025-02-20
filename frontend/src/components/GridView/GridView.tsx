import React, { useState, useEffect } from "react";
import "./GridView.css";
import { Employee } from "../../interfaces/common.interface";

const GridView: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: Employee[] = await response.json();
        setEmployees(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, []);
  if (!employees || employees.length === 0) {
    return <p></p>;
  }
  const headers = Object.keys(employees[0]);
  return (
    <div className="grid-container">
      <table className="grid-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="grid-header">
                <div>{header}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr className="grid-row" key={employee.id}>
              {headers.map((header) => (
                <td key={`${employee.id}-${header}`} className="grid-cell">
                  {typeof employee[header as keyof Employee] === "object" &&
                  employee[header as keyof Employee] !== null
                    ? JSON.stringify(employee[header as keyof Employee])
                    : employee[header as keyof Employee]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridView;
