import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeycloakAngularModule } from 'keycloak-angular';

@Component({
  standalone: true,
  imports: [RouterModule, KeycloakAngularModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'demo-wks';
}
