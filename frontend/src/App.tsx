import React, { useEffect, useState } from "react";
import HorizontalMenu from "./components/HorizontalMenu/HorizontalMenu";
import GridView from "./components/GridView/GridView";
import TileView from "./components/TileView/TileView";
import tableViewIcon from "./assets/table-view.svg";
import tileViewIcon from "./assets/tile-view.svg";
import { Employee } from "./interfaces/common.interface";

function App() {
  const [viewMode, setViewMode] = useState<"grid" | "tile">("tile"); // Union type for viewMode state

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: Employee[] = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, []);

  const switchToGridView = (e: any) => {
    console.log(e);
    setViewMode("grid");
  };

  const switchToTileView = () => {
    setViewMode("tile");
  };

  const handleDeleteEmployee = (employeeId: number) => {
    setEmployees((currentEmployees) =>
      currentEmployees.filter((emp) => emp.id !== employeeId)
    );
    // delete API call
  };

  return (
    <div className="App">
      <HorizontalMenu />

      <div className="query-area">
        <div>E-Records</div>
        <div className="view-action-btns">
          <div
            className="view-action"
            style={
              viewMode === "grid"
                ? { padding: "4px", background: "#343434" }
                : { padding: "4px", background: "#000" }
            }
          >
            <img src={tableViewIcon} alt="" onClick={switchToGridView} />
          </div>
          <div
            className="view-action"
            style={
              viewMode === "tile"
                ? { background: "#343434" }
                : { background: "#000" }
            }
          >
            <img src={tileViewIcon} alt="" onClick={switchToTileView} />
          </div>
        </div>
      </div>
      {viewMode === "grid" ? (
        <GridView
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
        />
      ) : (
        <TileView
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
        />
      )}
    </div>
  );
}

export default App;
