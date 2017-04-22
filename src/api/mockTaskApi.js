import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tasks = [
  {
    id: "Day1",
    taskname: "Day1 Activities",
    Status: "Not Started",
    StartDate: "Day1-Morning",
    EndDate: "Day1-Night"
  },
  {
    id: "Day2",
    taskname: "Day2 Activities",
    Status: "Not Started",
    StartDate: "Day2-Morning",
    EndDate: "Day2-Night"
  },
  {
    id: "Day3",
    taskname: "Day3 Activities",
    Status: "Not Started",
    StartDate: "Day3-Morning",
    EndDate: "Day3-Night"
  }
  
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (task) => {
  return replaceAll(task.taskname, ' ', '-');
};

class taskApi {
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static saveTask(task) {
    task = Object.assign({}, task); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTaskNameLength = 1;
        if (task.taskname.length < minTaskNameLength) {
          reject(`Task must be at least ${minTaskNameLength} characters.`);
        }

        if (task.id) {
          const existingTaskIndex = tasks.findIndex(a => a.id == task.id);
          tasks.splice(existingTaskIndex, 1, task);
        } else {
          //Just simulating creation here.
          task.id = generateId(task);
          tasks.push(task);
        }

        resolve(task);
      }, delay);
    });
  }

  static deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTaskToDelete = tasks.findIndex(task => {
          task.taskId == taskId;
        });
        tasks.splice(indexOfTaskToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default taskApi;
