import { Component, inject } from '@angular/core';
import { Language } from '../services/language';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found',
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {
  language = inject(Language);
}
