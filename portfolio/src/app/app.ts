import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar'
import { Footer } from './footer/footer';
import { LanguageSwitcher } from './language-switcher/language-switcher';
import { Language } from './services/language';

@Component({
  imports: [RouterOutlet,Navbar, Footer, LanguageSwitcher],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
  language = inject(Language)
}
