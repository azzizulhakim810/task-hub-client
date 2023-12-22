import { ListItem } from '@material-tailwind/react';

const CompletedTasks = ({task}) => {
  const {title} = task?.taskInfo;

  return (
    <div>
    <ListItem className="hover:bg-indigo-800">{title}</ListItem>
    </div>
  );
};

export default CompletedTasks;