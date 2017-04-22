import React, {PropTypes} from 'react';
import TaskListRow from './TaskListRow';

const TaskList = ({tasks}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>TaskName</th>
        <th>Status</th>
        <th>StartDate</th>
        <th>EndDate</th>
      </tr>
      </thead>
      <tbody>
      {tasks.map(task =>
        <TaskListRow key={task.id} task={task}/>
      )}
      </tbody>
    </table>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;
