function CreateEmployee(id, firstName, lastName){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  return this;
}

export const employees = [
  new CreateEmployee(1, "Gaurav", "Goyal"),
  new CreateEmployee(2, "Divya", "Jain"),
]

// function CreateEmployee(id, firstName, lastName) {
//   return { id, firstName, lastName };
// }

// export const employees = [
//   CreateEmployee(1, "Gaurav", "Goyal"),
//   CreateEmployee(2, "Divya", "Jain")
// ];
