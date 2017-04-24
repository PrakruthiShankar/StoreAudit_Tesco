import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TaskForm = ({task, allTasks, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Task list</h1>

     <TextInput
     name ="taskname"
     label = "TaskName"
     value = {task.taskname}
     onChange={onChange}
     error={errors.taskname}/>

      <SelectInput
        name="Status"
        label="Status"
        value={task.Status}
        defaultOption="Select Option"
        options={allTasks}
       onChange={onChange} error={errors.Status}/>

      <TextInput
     name ="StartDate"
     label = "StartDate"
     value = {task.StartDate}
     onChange={onChange}
     error={errors.StartDate}/>
     
     <TextInput
     name ="EndDate"
     label = "EndDate"
     value = {task.EndDate}
     onChange={onChange}
     error={errors.EndDate}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TaskForm.propTypes = {
  task: React.PropTypes.object.isRequired,
  allTasks: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default TaskForm;
