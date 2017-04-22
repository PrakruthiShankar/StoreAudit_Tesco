 import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import TaskForm from './TaskForm';

export class ManageTaskPage extends React.Component {
  constructor(props, context) {
    super(props, context);

this.state = {
  task: Object.assign({}, this.props.task),
  errors: {}
};

this.updateTaskState=this.updateTaskState.bind(this);
}

updateTaskState(event) { 
    const field = event.target.name;
    let task = this.state.task;
    task[field] = event.target.value;
    return this.setState({task: task});
  }
    
  render() {
    return (
      <div>
      <h1> Manage tasks</h1>
      <TaskForm 
      allTasks={this.props.answers}
      onChange={this.updateTaskState}
      task={this.state.task}
      errors={this.state.errors}
      /> 
      </div>
    );
  }
}

ManageTaskPage.propTypes = {
  task: PropTypes.object.isRequired,
  answers:PropTypes.array.isRequired
};



function mapStateToProps(state, ownProps) {
let task = {id: '', taskname: '', Status: '', StartDate: '', EndDate: ''};

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
