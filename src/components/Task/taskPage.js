import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/taskActions';
import TaskList from './TaskList';
import {browserHistory} from 'react-router';

class taskPage extends React.Component {
constructor(props, context) {
    super(props, context);
    this.redirectToAddTaskPage = this.redirectToAddTaskPage.bind(this);
}


taskRow(task, index){
    return <div key={index}>{task.taskname}</div>;
}

redirectToAddTaskPage(){
browserHistory.push('/task');
}

	render() {
        const {tasks} =this.props;

		return (
      <div>
        <h1>Activities</h1>
        <input type="submit"
        value = "Add Task"
        className="btn btn-primary"
        onClick={this.redirectToAddTaskPage}/>
        <TaskList tasks={tasks}/>
        </div>
    );
  }
}

taskPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        tasks: state.tasks
    };
}

function mapDispatchToProps (dispatch) {
    return{
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(taskPage);