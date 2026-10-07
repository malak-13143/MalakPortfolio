import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {
  selectedSection = 'projects';
  projectName='';
  projectDesc='';
  technologyName = '';
  skillName = '';
  skillDesc='';
  categorySName = '';
  serviceName = '';
  serviceDesc='';
  trainingName = '';
  trainingDesc='';
  categoryEName = '';


  addProject() {
const project = {
    name: this.projectName,
    desc: this.projectDesc,
    technologies: this.technologyName
  }}

addSkill() {
const skill = {
    name: this.skillName,
    category: this.categorySName,
  }};


addService() {
const service = {
    name: this.serviceName,
    desc: this.serviceDesc,
  }};


addTraining() {
const training = {
    name: this.trainingName,
    desc: this.trainingDesc,
  }};


}
