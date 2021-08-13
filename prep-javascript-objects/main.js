var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing',
  job: 'Jerk',
  previousJob: 'amigo'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

console.log("The person's current job is:", person.job);

console.log("The person's previous job is:", person.previousJob);

console.log('The complete preson object:', person);
