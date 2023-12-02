
const employee1 = {
    name: "Jonny",
    lastName: "B",
    age: 30,
    companiesWorked: ["Esi", "Samsung", "Apple"]
};

const employee2 = {
    name: "Bonny",
    lastName: "M",
    age: 28,
    companiesWorked: ["Mest", "Lovely Home"]
};

function compareEmployees(employee1, employee2) {
    if (employee1.companiesWorked.length > employee2.companiesWorked.length) {
        console.log(`${employee1.name} ${employee1.lastName} has more companies worked.`);
        printCompanyList(employee1);
    } else if (employee1.companiesWorked.length < employee2.companiesWorked.length) {
        console.log(`${employee2.name} ${employee2.lastName} has more companies worked.`);
        printCompanyList(employee2);
    } else {
        console.log(`${employee1.name} ${employee1.lastName} and ${employee2.name} ${employee2.lastName} have worked for the same number of companies.`);
    }
}

function printCompanyList(employee) {
    console.log(`${employee.name} ${employee.lastName} worked for the following companies:`);
    for (const company of employee.companiesWorked) {
        console.log(`- ${company}`);
    }
}


compareEmployees(employee1, employee2)