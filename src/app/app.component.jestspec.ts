import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AppComponent } from './app.component';

it('should search on username', async () => {
  await render(AppComponent, {
    imports: [HttpClientModule, ReactiveFormsModule],
  });

  await userEvent.type(
    screen.getByPlaceholderText(/Username/i),
    'timdeschryver'
  );

  await screen.findByText(/mocked-timdeschryver/i);
});
