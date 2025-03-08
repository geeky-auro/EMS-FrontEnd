import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employee, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees", error);
      });
  }, []);

  return (
    <div className="container mt-10">
      <>
        <h2>List of Employees</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-white">
          <table className="w-full text-sm text-left rtl:text-right text-white">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
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
                    <button className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default ListEmployeeComponent;
