import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const QuestionForm = ({question, allTasks, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Questions</h1>

     <TextInput
     name ="question1"
     label = "Question1"
     value = {question.question1}
     onChange={onChange}
     error={errors.Status}/>
<SelectInput
        name="question2"
        label="Question2"
        value={question.question2}
        defaultOption="Select Option"
        options={allTasks}
       onChange={onChange} error={errors.questionname}/>
<SelectInput
        name="question3"
        label="Question3"
        value={question.question3}
        defaultOption="Select Option"
        options={allTasks}
       onChange={onChange} error={errors.questionname}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

QuestionForm.propTypes = {
  question: React.PropTypes.object.isRequired,
  allTasks: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors:React.PropTypes.object
};

export default QuestionForm;
