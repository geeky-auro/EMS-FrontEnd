import React from "react";
import { APP_NAME } from "../utils/constants";

const About = () => {
  return (
    <div className="max-w-max h-full">
      <a
        href="#"
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {APP_NAME} is a modern solution designed to streamline and optimize
          the management of employees within an organization. By leveraging
          Artificial Intelligence, this system automates routine tasks, enhances
          decision-making, and improves overall productivity and employee
          satisfaction.
        </p>
      </a>
    </div>
  );
};

export default About;
