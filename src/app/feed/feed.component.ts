import { AuthFirebaseService } from './../servicosInterface/auth-firebase.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Dashboard } from './../modelsInterface/dashboard';
import { DashboardService } from './../servicosInterface/dashboard.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  user$ = this.authFirebaseService.userLogged$;
  cards$: Observable<Dashboard[]>;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [];
      }

      return this.cards$;
    })
  );

  constructor(
    private dashboardService: DashboardService,
    private breakpointObserver: BreakpointObserver,
    private authFirebaseService: AuthFirebaseService,   ) {
      this.cards$ = dashboardService.listDash()
      .pipe(
        catchError(error => {
          return of([])
        }
      ))
    }
}
