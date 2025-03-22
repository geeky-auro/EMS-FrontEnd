import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees/all";
const REST_API_BASE_URL_ = "http://localhost:8080/api/employees";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveEmployees = (employees: any) => {
  return axios.post(REST_API_BASE_URL_, employees);
};

export const getEmployees = (id: number | undefined) => {
  console.log(`${REST_API_BASE_URL_}/${id}`);
  return axios.get(`${REST_API_BASE_URL_}/${id}`);
};

export const updateEmployee = (id: number | undefined, employee: any) => {
  return axios.put(`${REST_API_BASE_URL_}/${id}`, employee);
};
