import delay from './delay';

const questions = [
  {
    id: "Task1",
    question1: "Task1",
    question2: "Task2",
    question3: "Task3"
  }
  
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (question) => {
  return replaceAll(question.questionname, ' ', '-');
};

class questionApi {
  static getAllQuestions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], questions));
      }, delay);
    });
  }

  static saveQuestion(question) {
    question = Object.assign({}, question); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        //const minQustionNameLength = 1;
       //if (question.questionname.length < minQuetionNameLength) {
        // reject(`Question must be at least ${minQuestionNameLength} characters.`);
       // }

        if (question.id) {
          const existingQuestionIndex = questions.findIndex(a => a.id == question.id);
          questions.splice(existingQuestionIndex, 1, question);
        } else {
          //Just simulating creation here.
          question.id = generateId(question);
          questions.push(question);
        }

        resolve(question);
      }, delay);
    });
  }

  static deleteQuestion(questionId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfQuestionToDelete = questions.findIndex(question => {
          question.questionId == questionId;
        });
        questions.splice(indexOfQuestionToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default questionApi;
