import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, startWith, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = new FormControl('');
  user$ = this.search.valueChanges.pipe(
    switchMap((value) =>
      this.service.getUser(value).pipe(
        tap(console.log),
        catchError(() => of({}))
      )
    ),
    startWith('')
  );

  constructor(private service: GitHubService) {}
}
