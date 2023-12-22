import { ListItem } from '@material-tailwind/react';

const OngoingTasks = ({task}) => {
  const {title} = task?.taskInfo;
  // console.log(task?.taskInfo.title);
  return (
    <div>
    <ListItem className="hover:bg-indigo-800">{title}</ListItem>
    </div>
  );
};

export default OngoingTasks;