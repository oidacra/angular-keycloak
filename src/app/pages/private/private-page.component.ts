import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-protected-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivatePageComponent implements OnInit {
  readonly #authService: AuthService = inject(AuthService);
  $profile = signal<KeycloakProfile | undefined>(undefined);

  ngOnInit(): void {
    this.#authService.loadUserProfile().then((profile) => {
      this.$profile.set(profile);
    });
  }

  logout() {
    this.#authService.logout();
  }
}
