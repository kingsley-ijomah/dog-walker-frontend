import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ProfilePopoverComponent {
  menuItems = [
    { icon: 'person-outline', text: 'Edit Profile', action: () => console.log('Edit Profile clicked') },
    { icon: 'log-out-outline', text: 'Logout', action: () => console.log('Logout clicked') }
  ];

  constructor() {
    addIcons({ personOutline, logOutOutline });
  }
}