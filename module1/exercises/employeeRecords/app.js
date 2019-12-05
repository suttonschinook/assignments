var employees = []

function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "full time";
    this.print = function(){
        console.log(`
            Name: ${this.name}
            Job Title: ${this.jobTitle}
            Salary: ${this.salary}
            Status: ${this.status}
        `)
    }
}

employees.push(new Employee ("Bob", "3rd Floor Failure", 50000))
employees.push(new Employee("susan", "Secretary", 30000))
employees.push(new Employee("Fred", "Foreman", 40000))
employees[2].status = "Part-time"
console.log(employees)