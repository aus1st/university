#! /usr/bin/env node
import { university } from "../models/university.js";
let uni = new university();
let keepContinue = false;
await uni.indexTitle();

while (!keepContinue) {
    await uni.startProg();
}
// await uni.addStudent();
// await uni.getStudents();
// await uni.addTeacher();
// await uni.getTeachers();
