
import { AppRegisterComponent } from './app-register/app-register.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const sendWithoutLogin = () => redirectUnauthorizedTo(['/app-app-register']);


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-app-register' },
  { path: 'app-app-register', component: AppRegisterComponent },
  { path: 'feed', component: FeedComponent, ...canActivate(sendWithoutLogin) },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then((m) => m.CddModule),
    ...canActivate(sendWithoutLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

