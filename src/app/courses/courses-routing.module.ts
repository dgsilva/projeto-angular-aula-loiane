import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '', component: CoursesComponent  },
];

export const CoursesRoutingRoutes = RouterModule.forChild(routes);
