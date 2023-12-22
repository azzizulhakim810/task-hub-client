import { ListItem } from '@material-tailwind/react';


const TodoTasks = ({task}) => {
  const {title} = task?.taskInfo;

  return (
    <div>
    <ListItem className="hover:bg-indigo-800">{title}</ListItem>
    </div>
  );
};

export default TodoTasks;