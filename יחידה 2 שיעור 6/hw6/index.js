let students = ["אסתר", "יעל","יהודית","רחל","חני"];

function addStudent(name) {
    students.push(name);
}

function removeStudent(name) {
    students = students.filter(s => s !== name);
}

addStudent("גילי");
removeStudent("יעל");

console.log(students);