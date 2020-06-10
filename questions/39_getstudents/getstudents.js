const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (name) => {
  if (typeof name !== 'string') throw new Error('not a string');

  return axios.get('https://fullstack.com/api/cohort2004')
    .then(({
        data
      }) => {
        const students = Object.values(data);
        const count = Object.keys(data).length;

        let student = students.find(student => student.name === name);

        if (!student) {
          student = 'no student found'
        }


        return {
          count,
          student
        }
      }

    )
    .catch(err => {
      throw new Error('not a string')
    })
};

module.exports = {
  getStudent
};