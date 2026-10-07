import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Language } from './services/language';
import { Project } from './services/project';
import { Skill } from './services/skill';
import { Service } from './services/service';
import { Education } from './services/education';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    Language,
    Project,
    Skill,
    Service,
    Education
  ]
};
