import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http
      .get(`https://api.github.com/users/${username}`)
      .pipe(tap((x) => console.log(x)));
  }
}
