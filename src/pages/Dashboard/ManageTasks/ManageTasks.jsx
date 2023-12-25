import { List, Card } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ListsTasks from "./ListsTasks";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ManageTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const [tasks, setTasks] = useState([]);
  // console.log(tasks);
  useEffect(() => {
    const fetchAllTasks = async () => {
      const res = await axiosSecure.get(`/allTasks?email=${userEmail}`);
      setTasks(res.data);
    };
    fetchAllTasks();
  }, [userEmail, axiosSecure]);

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="w-11/12 mx-auto py-5">
      <div>
        <Card
          className="text-white shadow-2xl"
          style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#4F46E5",

          }}
        >
          <List>
            <h1 className=" lg:text-3xl md:text-2xl font-poppins font-semibold ps-3 mt-3">
              To-Do Tasks [Drag & Drop]
            </h1>
            <div className="h-[2px] w-full bg-white my-2"></div>
     
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
    </DndProvider>
  );
};

export default ManageTasks;
