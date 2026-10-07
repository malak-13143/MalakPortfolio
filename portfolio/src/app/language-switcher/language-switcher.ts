import { Component, inject } from '@angular/core';
import { Language } from '../services/language';

@Component({
  imports: [],
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  language = inject(Language);
}
