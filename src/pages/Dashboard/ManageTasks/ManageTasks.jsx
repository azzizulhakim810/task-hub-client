import { List, ListItem, Card } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TodoTasks from "./TodoTasks";
import OngoingTasks from "./OngoingTasks";
import CompletedTasks from "./CompletedTasks";
import { getFromDB } from "../../../localDB";
import ListsTasks from "./ListsTasks";

const ManageTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [allTasks, setAllTasks] = useState([]);

  const [tasks, setTasks] = useState([]);

  // set to local storage
  localStorage.setItem("tasks", JSON.stringify(allTasks));

  // get from local storage
/*   const tasksFromLS = getFromDB();
  console.log(tasksFromLS);
  setTasks(tasksFromLS) */
  useEffect(() => {
    const fetchAllTasks = async () => {
      const res = await axiosSecure.get(`/allTasks?email=${userEmail}`);
      // console.log(res.data);
      setAllTasks(res.data);
      setTasks(res.data);
    };

    fetchAllTasks();
  }, [userEmail, axiosSecure]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto py-5">
      <div>
        <Card
          className="text-white shadow-2xl"
          style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#4F46E5",
            // background: 'linear-gradient(#ff4032, #00d4ff)'
          }}
        >
          <List>
            <h1 className=" text-3xl font-poppins font-bold ps-3 mt-3">
              To-Do Tasks
            </h1>
            <div className="h-[2px] w-full bg-white my-2"></div>
            {/*  {
          tasksFromLS.map(singleT => <TodoTasks 
            key={singleT._id}
            task={singleT}
            ></TodoTasks>)
        } */}

            {<ListsTasks tasks={tasks} setTasks={setTasks}></ListsTasks>}
          </List>
        </Card>
      </div>

      {/*       <div>
      <Card className="text-white shadow-2xl" style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#EC4899'
            // background: 'linear-gradient(#ff4032, #00d4ff)'

          }}>
          
      <List>
      <h1 className=" text-3xl font-poppins font-bold ps-3 mt-3">Ongoing Tasks</h1>
      <div className="h-[2px] w-full bg-white my-2"></div> 
      {
          allTasks.map(singleT => <OngoingTasks
            key={singleT._id}
            task={singleT}
            ></OngoingTasks>)
        }
        
      </List>
    </Card>
      </div> */}

      {/*       <div>
      <Card className="text-white shadow-2xl" style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#4F46E5'
            // background: 'linear-gradient(#ff4032, #00d4ff)'

          }}>
          
      <List>
      <h1 className=" text-3xl font-poppins font-bold ps-3 mt-3">Completed</h1>
      <div className="h-[2px] w-full bg-white my-2"></div> 
      {
          allTasks.map(singleT => <CompletedTasks
            key={singleT._id}
            task={singleT}
            ></CompletedTasks>)
        }
        
      </List>
    </Card>
      </div> */}
    </div>
  );
};

export default ManageTasks;
