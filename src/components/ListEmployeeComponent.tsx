import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { EMP_TABLE_COLS, LIST_EMP_TITLE } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { store } from "../utils/store";

const ListEmployeeComponent = () => {
  const [employee, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees", error);
      });
  }, []);

  const addEmployee = () => {
    // Navigate to the Add Employee Page ;)
    store.dispatch({ type: "ADD_EMPLOYEE" });
    console.log(
      "Current Store State in ADD Employee: " + store.getState().isEditable
    ); // Access the state directly.

    navigate("/add-employee");
  };

  const editEmployee = (id: any) => {
    // Edit the employee ;)
    // Navigate to the Edit Employee Page ;)
    store.dispatch({ type: "EDIT_EMPLOYEE" });
    console.log(
      "Cuurent Store State in Edit Employee:" + store.getState().isEditable
    );
    navigate(`/edit-employee/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div>
          <h2 className="absolute left-1/2 transform -translate-x-1/2">
            {LIST_EMP_TITLE}
          </h2>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-row "
            onClick={addEmployee}
          >
            <div>ADD EMPLOYEE</div>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-white">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              {EMP_TABLE_COLS.map((_field, index) => {
                return (
                  <th key={index} scope="col" className="px-6 py-3">
                    {_field}
                  </th>
                );
              })}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={employee.id}
              >
                <td className="px-6 py-3">{employee.id}</td>
                <td className="px-6 py-3">{employee.firstName}</td>
                <td className="px-6 py-3">{employee.lastName}</td>
                <td className="px-6 py-3">{employee.email}</td>
                <td>
                  <button
                    className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    onClick={() => editEmployee(employee.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
