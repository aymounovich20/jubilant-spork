import { CoursesService } from './course/courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
    <h2>Courses: {{ title }}</h2>
    <ul>
        <li *ngFor = "let course of courses">{{ course }}</li>
    </ul>
    `
})
export class CoursesComponent{
    title = "list of courses";
    courses;
    constructor(service : CoursesService){

        this.courses = service.getCourses();
    }
}