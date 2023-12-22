import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const ListsTasks = ({tasks, setTasks}) => {
  console.log(tasks);
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const filterTodos = tasks.filter((task) => task.status === 'to-do')
  }, [tasks])

  return (
    <div>
      
    </div>
  );
};
ListsTasks.propTypes = {
  tasks:PropTypes.array,
  todos:PropTypes.array,
  ongoing:PropTypes.array,
  completed:PropTypes.array,
  setTasks:PropTypes.func,
  setTodos:PropTypes.func,
  setOngoing:PropTypes.func,
  setCompleted:PropTypes.func,
  
};

export default ListsTasks;