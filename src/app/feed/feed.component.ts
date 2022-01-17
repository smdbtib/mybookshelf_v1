import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  user = {userName: 'Samuel Dias', icon: 'remember_me'}
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'The best book of the week', img: '../../assets/img/1.png', cols: 1, rows: 1 },
          { title: 'Reader Tips', img: '../../assets/img/2.png', cols: 1, rows: 1 },
          { title: 'The most commented of the week', img: '../../assets/img/3.png', cols: 1, rows: 1 },
          { title: 'Indication of the team BookShelf', img: '../../assets/img/1.png', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'The best book of the week', img: '../../assets/img/1.png', cols: 2, rows: 1 },
        { title: 'Reader Tips', img: '../../assets/img/2.png', cols: 1, rows: 1 },
        { title: 'The most commented of the week', img: '../../assets/img/3.png', cols: 1, rows: 2 },
        { title: 'Indication of the team BookShelf', img: '../../assets/img/1.png', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
