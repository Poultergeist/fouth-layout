const courses = document.getElementById("courses");
const hours = document.getElementById("hours");
const students = document.getElementById("students");
const employed = document.getElementById("employed");

let letImagineGeneratedJson = {
  courses:25,
  hours: 836,
  students: 500,
  employed: 120
}

courses.textContent = letImagineGeneratedJson.courses;
hours.textContent = letImagineGeneratedJson.hours;
students.textContent = letImagineGeneratedJson.students;
employed.textContent = letImagineGeneratedJson.employed;
