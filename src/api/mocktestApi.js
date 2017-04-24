import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const answers = [
  {
    id: 'Not Started'
  },
  {
    id: 'Started'
  },
  {
    id: 'Complete'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (answer) => {
  return answer.id;
};

class answersApi {
  static getAllAnswers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], answers));
      }, delay);
    });
  }

  static saveAnswer(answer) {
    answer = Object.assign({}, answer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        

        if (answer.id) {
          const existingAnswerIndex = answers.findIndex(a => a.id == answer.id);
          answers.splice(existingAnswerIndex, 1, answer);
        } else {
          //Just simulating creation here.
          answer.id = generateId(answer);
          answers.push(answer);
        }

        resolve(answer);
      }, delay);
    });
  }

  static deleteAnswer(answerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAnswerToDelete = answers.findIndex(answer => {
          answer.answerId == answerId;
        });
        answers.splice(indexOfAnswerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default answersApi;
