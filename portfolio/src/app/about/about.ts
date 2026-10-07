import { Component,inject } from '@angular/core';
import { Language } from '../services/language';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  language = inject(Language);
}
