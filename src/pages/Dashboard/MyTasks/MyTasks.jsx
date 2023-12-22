import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

import Swal from "sweetalert2";
// import ViewAllMyPosts from "../ViewAllMyPosts/ViewAllMyPosts";
import ViewAllMyTasks from "../ViewAllMyTasks/ViewAllMyTasks";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [allTasks, setAllTasks] = useState([]);
  // const [allComments, setAllComments] = useState([]);
  const {user, loading} = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {

    const fetchAllTasks = async () => {
      const res = await axiosSecure.get(`/allTasks?email=${userEmail}`)
      // console.log(res.data);
      setAllTasks(res.data);
    };

    fetchAllTasks()
  }, [userEmail, axiosSecure]);

/*   const handleComment = (id) => {
    // console.log(id);
    axiosSecure.get(`/allComments/?id=${id}`)
    .then(res => setAllComments(res.data))
  } */

  const handleDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/tasks/delete/${id}`)
    .then(res => {
      if(res.data.deletedCount > 0 ) {
        const remaining = allTasks.filter(singlep => singlep._id !== id);
        setAllTasks(remaining);
      }
      console.log(res.data)});
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      
    });

     
  }

// console.log(allComments);

  return (
    <div>
      <div className="w-10/12 mx-auto pb-20">
      
        <div className="overflow-x-auto pt-5">
        {/* <SectionTitle heading={'See All Your Task'}></SectionTitle> */}
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-base text-left">Post Title</th>
                <th className="text-base text-center">Priority</th>
                <th className="text-base text-center">Deadline</th>
                <th className="text-base text-center">Comment Button</th>
                <th className="text-base text-center">Delete Button</th>
              </tr>
            </thead>
            <tbody>
              {allTasks?.map((singleTask) => (
                <ViewAllMyTasks
                  key={singleTask._id}
                  singleTask={singleTask}
                  // handleComment = {handleComment}
                  handleDelete={handleDelete}
                  // handleAssignmentConfirm={handleAssignmentConfirm}
                ></ViewAllMyTasks>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;