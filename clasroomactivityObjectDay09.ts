let empDetails: {
    empId: number,
    empName: string,
    department: string,
    isActive: boolean,
    salary: number
} = {
    empId: 101,
    empName: "Vineeth",
    department: "QA",
    isActive: true,
    salary: 60000
};

console.log("Object Creation:");
console.log(empDetails);

console.log("\nAccess properties using . notation:");
console.log("empId:", empDetails.empId);
console.log("empName:", empDetails.empName);
console.log("department:", empDetails.department);
console.log("isActive:", empDetails.isActive);
console.log("salary:", empDetails.salary);

//updating - updating existing values by .notation
empDetails.salary = 75000;
empDetails.isActive = false;

console.log("\nUpdate salary and isActive:");
console.log("salary:", empDetails.salary);
console.log("isActive:", empDetails.isActive);

//adding - done with optional property
(empDetails as any).location = "Chennai";

console.log("\nAdd new property:");
console.log("location:", (empDetails as any).location);

//deleting - done with optional property
delete (empDetails as any).department;

console.log("\nDelete property:");
console.log("department property removed");

console.log("\nFinal Object:");
console.log(empDetails);