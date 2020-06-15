import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AppComponent } from './app.component';
import { GitHubService } from './github.service';
import { of } from 'rxjs';

it('should search on username', async () => {
  await render(AppComponent, {
    imports: [HttpClientModule, ReactiveFormsModule],
    providers: [
      {
        provide: GitHubService,
        useValue: {
          getUser: () => of({ user: 'provided-user' }),
        },
      },
    ],
  });

  await userEvent.type(screen.getByRole('searchbox'), 'timdeschryver');

  await screen.findByText(/provided-user/i);
});

it('should search on username', async () => {
  await render(AppComponent, {
    imports: [HttpClientModule, ReactiveFormsModule],
  });

  await userEvent.type(screen.getByRole('searchbox'), 'timdeschryver');

  await screen.findByText(/mocked-timdeschryver/i);
});
