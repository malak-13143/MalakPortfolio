import { Component,inject } from '@angular/core';
import { Language } from '../services/language';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  language = inject(Language);
}
