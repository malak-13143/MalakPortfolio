import { Component, inject } from '@angular/core';
import { Language } from '../services/language';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  language = inject(Language);
}
