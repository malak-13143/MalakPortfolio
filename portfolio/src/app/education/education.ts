import { Component, inject } from '@angular/core';
import { Language } from '../services/language';

@Component({
  imports: [],
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  language = inject(Language);
}
