import { Component, inject } from '@angular/core';
import { Language } from './language';

@Component({
  imports: [],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services {
  language = inject(Language);
}
