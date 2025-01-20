import { Component } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personOutline, logOutOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ProfilePopoverComponent {
  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) {
    addIcons({ personOutline, logOutOutline });
  }

  async navigateToProfile() {
    await this.popoverController.dismiss();
    this.router.navigate(['/tabs/profile']);
  }

  async logout() {
    await this.popoverController.dismiss();
    console.log('Logout clicked');
  }

  menuItems = [
    { 
      icon: 'person-outline', 
      text: 'Edit Profile', 
      action: () => this.navigateToProfile()
    },
    { 
      icon: 'log-out-outline', 
      text: 'Logout', 
      action: () => this.logout()
    }
  ];
}