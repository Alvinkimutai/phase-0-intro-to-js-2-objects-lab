// Write your solution in this file!
// Variable employee

const employee = {
    personName : 'Alvin',
    streetAddress : 'Westlands, Victorias plaza 5th Floor',
}

console.log(employee);

//returns an employee with the original key value pairs and the new key pair
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object};
    newEmployee[key] = value;
    return newEmployee;
}

updateEmployeeWithKeyAndValue();
console.log(updateEmployeeWithKeyAndValue(employee, 'personName', 'Sam'));

//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

destructivelyUpdateEmployeeWithKeyAndValue();
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Ngong lane plaza'));


//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)

function deleteFromEmployeeByKey(object, key){
    const newEmployee = {...object}
    delete newEmployee[key];
    return newEmployee;
}

console.log(deleteFromEmployeeByKey(employee, 'personName'));

//returns employee without the deleted key/value pair

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));