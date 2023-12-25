import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://task-hub-server-tau.vercel.app/'
})

const useAxiosSecure = () => {

  return axiosSecure;
};

export default useAxiosSecure;