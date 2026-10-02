let empDetails1: {
    empId: number,
    empName: string,
    department?: string,
    isActive: boolean,
    salary: number,
    location?: string
} = {
    empId: 101,
    empName: "Vineeth",
    department: "QA",
    isActive: true,
    salary: 60000
}

console.log("Object Creation:");
console.log(empDetails1);

console.log("\nAccess properties using . notation:");
console.log("empId:", empDetails1.empId);
console.log("empName:", empDetails1.empName);
console.log("department:", empDetails1.department);
console.log("isActive:", empDetails1.isActive);
console.log("salary:", empDetails1.salary);

empDetails1.isActive = false;
empDetails1.salary = 75000;

console.log("\nUpdate salary and isActive:");
console.log("salary:", empDetails1.salary);
console.log("isActive:", empDetails1.isActive);

empDetails1.location = "Chennai";

console.log("\nAdd new property:");
console.log("location:", empDetails1.location);

delete empDetails1.department;

console.log("\nDelete property:");
console.log("department property removed");

console.log("\nFinal Object:");
console.log(empDetails1);