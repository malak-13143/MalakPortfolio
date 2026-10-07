import { Component, inject } from '@angular/core';
import { Language } from '../services/language';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  language = inject(Language);
}
