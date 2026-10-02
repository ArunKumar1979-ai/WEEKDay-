// 1. Numeric Enum - Days of the Week starting from 1
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// 2. String Enum - Browser types
enum Browsers {
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge"
}

// 3. Heterogeneous Enum - both number and string values
// Named ResponseStatus because "Response" clashes with the built-in DOM type
enum ResponseStatus {
    Success = 200,
    Error = "ERROR"
}

// 4. Const Enum - Environments
const enum Environments {
    QA = "https://qa.testleaf.com",
    PROD = "https://prod.testleaf.com"
}

// Loop through enum values (done once and reused below)
// Numeric enum has reverse mapping, so keep only the names (strings)
const allDays = Object.values(Days).filter(value => typeof value === "string");
// String enum - values are directly available
const allBrowsers = Object.values(Browsers);

// Numeric Enum
console.log("Numeric Enum (Days):");
console.log("Days.Monday:", Days.Monday);   // Enum name and member name
console.log("Days[1]:", Days[1]);           // Access by index (reverse mapping)
console.log("All days:", allDays.join(", "));

// String Enum
console.log("\nString Enum (Browsers):");
console.log("Browsers.Chrome:", Browsers.Chrome);
console.log("Browsers.Firefox:", Browsers.Firefox);
console.log("All browsers:", allBrowsers.join(", "));

// Heterogeneous Enum
console.log("\nHeterogeneous Enum (Response):");
console.log("Response.Success:", ResponseStatus.Success);
console.log("Response.Error:", ResponseStatus.Error);

// Const Enum
console.log("\nConst Enum (Environments):");
console.log("Environments.QA:", Environments.QA);
console.log("Environments.PROD:", Environments.PROD);

// Using enum values in a variable
let selectedDay: string = Days[Days.Monday];
let selectedBrowser: Browsers = Browsers.Chrome;
let currentEnvironment: Environments = Environments.QA;

console.log("\nUsing Enum in Variable:");
console.log("Selected Day:", selectedDay);
console.log("Selected Browser:", selectedBrowser);
console.log("Current Environment:", currentEnvironment);

// Loop through enum values
console.log("\nLoop through Enum values:");
console.log("Days:", allDays.join(", "));
console.log("Browsers:", allBrowsers.join(", "));