import React, { useState } from "react";
import { saveEmployees } from "../services/EmployeeService";
import Dialog from "./Dialog";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lasName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const saveEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lasName,
      email: email,
    };
    saveEmployees(employee);
    setOpenDialog(true);
  };

  console.log("rendered");

  return (
    <>
      (
      <div className="flex items-center justify-center m-4 px-4">
        <Dialog isOpen={openDialog} onClose={() => setOpenDialog(false)}>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Employee Saved
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Employee Saved Successfully
          </p>
          <button
            onClick={() => setOpenDialog(false)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </Dialog>
        <div className="w-full max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <form className="w-full">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="employee@emplyai.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={saveEmployee}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      )
    </>
  );
};

export default AddEmployee;
