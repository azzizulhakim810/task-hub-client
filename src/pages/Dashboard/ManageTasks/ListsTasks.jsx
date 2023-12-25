import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ListsTasks = ({ tasks, setTasks }) => {
  // console.log(tasks);
  const axiosSecure = useAxiosSecure();
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const filterTodos = tasks?.filter((task) => task.status === "to-do");
    const filterOngoing = tasks?.filter((task) => task.status === "on-going");
    const filterCompleted = tasks?.filter((task) => task.status === "completed");

    setTodos(filterTodos);
    setOngoing(filterOngoing);
    setCompleted(filterCompleted);
  }, [tasks]);

  const statuses = ["to-do", "on-going", "completed"];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {statuses?.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          ongoing={ongoing}
          completed={completed}
          axiosSecure={axiosSecure}
        />
      ))}
    </div>
  );
};
ListsTasks.propTypes = {
  tasks: PropTypes.array,
  todos: PropTypes.array,
  ongoing: PropTypes.array,
  completed: PropTypes.array,
  setTasks: PropTypes.func,
  setTodos: PropTypes.func,
  setOngoing: PropTypes.func,
  setCompleted: PropTypes.func,
};

export default ListsTasks;

const Section = ({ status, tasks, setTasks, todos, ongoing, completed, axiosSecure }) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item._id, axiosSecure),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  let text = "Todo";
  let bg = "bg-pink-500";
  let tasksToMap = todos;

  if(status === "on-going") {
    text = "Ongoing"
    bg = "bg-indigo-500"
    tasksToMap = ongoing
  }

  if(status === "completed") {
    text = "Completed"
    bg = "bg-blue-500"
    tasksToMap = completed
  }
  const addItemToSection = (_id) => {
    console.log('droped', _id, status);
    setTasks(prev => {
      console.log("prev", prev);
      const mapTasks = prev?.map(t => {
        if(t._id === _id) {
          return {...t, status}
        }
        return t;
      });

      // Update Status on backend 
      axiosSecure.patch(`/updateStatus/${_id}`, {status: status} )
      .then(res => {
        if(res.data.modifiedCount >= 1 ) {
          // setUpdateRole("admin")
          Swal.fire(
            'Great!',
            "Task Status Changed",
            'success'
          )
          console.log(res.data)
        }
        });


      

      return mapTasks;
    })
  }
  return (
    <div ref={drop} className={`w-full rounded-lg p-2 ${isOver ? "bg-gray-400" : "" }`}>
      <Header text={text} bg={bg} count={tasksToMap?.length} /> 
      {tasksToMap?.length > 0 && tasksToMap.map((task) =>(
         <Task key={task._id} task={task} tasks={tasks} setTasks={setTasks}/>
      ) )}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div className={`${bg} flex items-center h-14 pl-4 font-poppins md:text-lg text-base font-bold tracking-wider rounded-md uppercase text-white`}>
      {text} 
      <div className="ms-1">({count})</div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {_id: task._id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  // console.log(isDragging);

  return (
    <div ref={drag} className={`${isDragging ? "opacity-25" : "opacity-100"} shadow-2xl rounded-xl border-2 border-gray-100 py-3 px-3 flex justify-start my-4 text-base font-roboto cursor-grabbing items-center`}>
      <p>{task?.taskInfo.title}</p>
    </div>
  );
};
