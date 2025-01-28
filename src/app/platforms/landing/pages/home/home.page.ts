import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonCard,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  peopleOutline, 
  calendarOutline, 
  chatbubblesOutline,
  logoFacebook,
  logoTwitter,
  logoInstagram
} from 'ionicons/icons';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonCard,
    IonIcon
  ],
})
export class HomePage {
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({ 
      peopleOutline, 
      calendarOutline, 
      chatbubblesOutline,
      logoFacebook,
      logoTwitter,
      logoInstagram
    });

    // Subscribe to authentication state
    this.authService.isAuthenticated().subscribe(
      isAuth => this.isAuthenticated = isAuth
    );
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
