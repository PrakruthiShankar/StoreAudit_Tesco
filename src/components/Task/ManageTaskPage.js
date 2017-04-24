import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import TaskForm from './TaskForm';
import toastr from 'toastr';

export class ManageTaskPage extends React.Component {
  constructor(props, context) {
    super(props, context);

this.state = {
  task: Object.assign({}, props.task),
  errors: {},
  saving : false
};

this.updateTaskState=this.updateTaskState.bind(this);
this.saveTask = this.saveTask.bind(this);
}

componentWillReceiveProps(nextProps) {
  if (this.props.task.id != nextProps.task.id) {
    this.setState({task: Object.assign({}, nextProps.task)});
  }
}

updateTaskState(event) { 
    const field = event.target.name;
    let task = this.state.task;
    task[field] = event.target.value;
    return this.setState({task : task});
  }
    
  saveTask(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveTask(this.state.task)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
    }
  

  redirect() {
    this.setState({saving: false});
    toastr.success('Task Saved');
    this.context.router.push('/tasks');
  }
  render() {
    return (
      <div>
      <TaskForm 
      allTasks={this.props.answers}
      onChange={this.updateTaskState}
      onSave={this.saveTask}
      task={this.state.task}
      errors={this.state.errors}
      saving={this.state.saving}
      /> 
      </div>
    );
  }
}

ManageTaskPage.propTypes = {
  task: PropTypes.object.isRequired,
  answers:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

ManageTaskPage.contextTypes = {
  router: PropTypes.object
};

function getTaskById (tasks, id) {
 const task = tasks.filter(task => task.id == id);
 if(task) return task[0];
 return null;
}


function mapStateToProps(state, ownProps) {
  const taskId = ownProps.params.id;
let task = {id: '', taskname: '', Status: '', StartDate: '', EndDate: ''};

if(taskId && state.tasks.length > 0){
  task =getTaskById(state.tasks, taskId);
}

const answersFormattedForDropDown = state.answers.map(answer => {
  return {
    value: answer.id,
    text: answer.id
  };
});
  return {
    task:task,
    answers : answersFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
