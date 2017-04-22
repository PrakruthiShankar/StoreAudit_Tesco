import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TaskListRow = ({task}) => {
  return (
    <tr>
      <td><Link to={'/task/' + task.id}>{task.taskname}</Link></td>
      <td>{task.Status}</td>
      <td>{task.StartDate}</td>
      <td>{task.EndDate}</td>
    </tr>
  );
};

TaskListRow.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskListRow;
