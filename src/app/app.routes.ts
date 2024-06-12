import { MainPageComponent } from './pages/main/main-page.component';
import { Route } from '@angular/router';
import { PublicPageComponent } from './pages/public/public-page.component';
import { authGuard } from './guards/auth.guard';
import { PrivatePageComponent } from './pages/private/private-page.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
  },
  {
    path: 'public',
    component: PublicPageComponent,
  },
  {
    path: 'private',
    canActivate: [authGuard], // <-- only logged users
    component: PrivatePageComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
