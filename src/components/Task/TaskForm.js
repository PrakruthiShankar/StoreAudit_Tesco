import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TaskForm = ({task, allTasks, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Task list</h1>

      <SelectInput
        name="Task1"
        label="Task1"
        value={task.taskname}
        defaultOption="Select Option"
        options={allTasks}
        onChange={onChange} error={errors.taskname}/>

      <SelectInput
        name="Task2"
        label="Task2"
        value={task.Status}
        defaultOption="Select Option"
        options={allTasks}
        onChange={onChange} error={errors.Status}/>

      <SelectInput
        name="Task3"
        label="Task3"
        value={task.StartDate}
        defaultOption="Select Option"
        options={allTasks}
        onChange={onChange} error={errors.StartDate}/>

      <SelectInput
        name="Task4"
        label="Task4"
        value={task.EndDate}
        defaultOption="Select Option"
        options={allTasks}
        onChange={onChange} error={errors.EndDate}/>

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
