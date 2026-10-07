import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '../services/language';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  language = inject(Language);
}
