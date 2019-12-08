// function Employee(id, firstName, lastName){
//   this.id = id;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   return this;
// }

// export let employees = [
//   new Employee(1, "Gaurav", "Goyal"),
//   new Employee(2, "Divya", "Jain"),
// ]

function CreateEmployee(id, firstName, lastName) {
  return { id, firstName, lastName };
}

export var employees = [
  CreateEmployee(1, "Gaurav", "Goyal"),
  CreateEmployee(2, "Divya", "Jain")
];
