import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';

const ViewAllMyTasks = ({singleTask, handleComment, handleDelete}) => {
  // const {user} = useContext(AuthContext);
  const { _id } = singleTask || {};
  const { title, deadline, priority } = singleTask.taskInfo || {};

  // console.log(singleTask.taskInfo);



  return (
    
      
      <tr>
        
        <td>
          {title}
        </td>
        
        
        
        <td className='text-center font-semibold'>
          {priority}
        </td>
        <td className='text-center'>{deadline}</td>
      
        <th className='text-center'>
          
          <Link to={`/dashboard/comment/${_id}`}>
          <button onClick={()=> handleComment(_id)}  className="btn btn-ghost btn-sm bg-pink-500 text-white">Edit</button>
          </Link>
          
        </th>

        <th className='text-center'>
          
          <button onClick={()=> handleDelete(_id)} className="btn btn-ghost btn-sm bg-pink-500 text-white">Delete</button>

          
          
        </th>
      </tr>
    
  );
};

ViewAllMyTasks.propTypes = {
  singleTask:PropTypes.object,
  taskInfo:PropTypes.object,
  handleDelete:PropTypes.func,
};

export default ViewAllMyTasks;

