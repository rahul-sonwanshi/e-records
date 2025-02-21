import "./GridView.css";
import { Employee } from "../../interfaces/common.interface";
import BunButton from "../BunButton/BunButton";

interface GridViewProps {
  employees: Employee[]; // Expect 'employees' prop, type Employee array
  onDeleteEmployee: (employeeId: number) => void; // Expect 'onDeleteEmployee' prop, function
}

const GridView: React.FC<GridViewProps> = ({ employees, onDeleteEmployee }) => {
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
          {employees.map((employee, empIndex) => (
            <tr className="grid-row" key={employee.id}>
              {headers.map((header, index) => (
                <td key={`${employee.id}-${header}`} className="grid-cell">
                  {typeof employee[header as keyof Employee] === "object" &&
                  employee[header as keyof Employee] !== null
                    ? JSON.stringify(employee[header as keyof Employee])
                    : employee[header as keyof Employee]}
                  {index === 0 ? (
                    <BunButton
                      employeeId={employees[empIndex].id}
                      onDelete={onDeleteEmployee}
                    />
                  ) : (
                    ""
                  )}
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
