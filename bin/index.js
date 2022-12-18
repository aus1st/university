// oop
// university contains students Teachers, sections collections
// human class
// student & teacher will extend human
// section (props)>= timing, teacher students
// teachers kon c classes parharahy hain, students kon c classes le rahy hain
import { university } from "../models/university.js";
let uni = new university();
let keepContinue = false;
while (!keepContinue) {
    await uni.startProg();
}
// await uni.addStudent();
// await uni.getStudents();
// await uni.addTeacher();
// await uni.getTeachers();
