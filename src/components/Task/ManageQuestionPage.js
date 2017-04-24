import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionAction from '../../actions/questionAction';
import QuestionForm from './QuestionForm';
import toastr from 'toastr';

export class ManageQuestionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

this.state = {
  question: Object.assign({}, props.question),
  errors: {},
  saving : false
};

this.updateQuestionState=this.updateQuestionState.bind(this);
this.saveQuestion = this.saveQuestion.bind(this);
}

componentWillReceiveProps(nextProps) {
  if (this.props.question.id != nextProps.question.id) {
    this.setState({question: Object.assign({}, nextProps.question)});
  }
}

updateQuestionState(event) { 
    const field = event.target.name;
    let question = this.state.question;
    question[field] = event.target.value;
    return this.setState({question : question});
  }
    
  saveQuestion(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveQuestion(this.state.question)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
    }
  

  redirect() {
    this.setState({saving: false});
    toastr.success('Answers Saved');
    this.context.router.push('/tasks');
  }
  render() {
    return (
      <div>
      <QuestionForm 
      allTasks={this.props.answers}
      onChange={this.updateQuestionState}
      onSave={this.saveQuestion}
      question={this.state.question}
      errors={this.state.errors}
      saving={this.state.saving}
      /> 
      </div>
    );
  }
}

ManageQuestionPage.propTypes = {
  question: PropTypes.object.isRequired,
  answers:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

ManageQuestionPage.contextTypes = {
  router: PropTypes.object
};

function getQuestionById (questions, id) {
 const question = questions.filter(question => question.id == id);
 if(question) return question[0];
 return null;
}


function mapStateToProps(state, ownProps) {
  const questionId = ownProps.params.id;
let question = {id: '', question1: '',question2: '',question3: ''};

if(questionId && state.questions.length > 0){
  question =getQuestionById(state.questions, questionId);
}

const answersFormattedForDropDown = state.answers.map(answer => {
  return {
    value: answer.id,
    text: answer.id
  };
});
  return {
    question:question,
    answers : answersFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageQuestionPage);
