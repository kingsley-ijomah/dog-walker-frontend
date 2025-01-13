import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
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
  constructor() {
    addIcons({ 
      peopleOutline, 
      calendarOutline, 
      chatbubblesOutline,
      logoFacebook,
      logoTwitter,
      logoInstagram
    });
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
