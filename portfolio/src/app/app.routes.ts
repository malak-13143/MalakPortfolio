import { Routes } from '@angular/router';
import { Home } from './home/home'
import { About } from './about/about';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';
import { Admin } from './admin/admin';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:Home},
  {path:'about', component:About},
  {path:'education', component:Education},
  {path:'skills', component:Skills},
  {path:'projects', component:Projects},
  {path:'services', component:Services},
  {path:'contact', component:Contact},
  {path:'admin', component:Admin},
  {path:'**', component:NotFound},
];
