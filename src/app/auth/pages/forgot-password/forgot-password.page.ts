import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonButtons,
  IonBackButton,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonText,
    IonButtons,
    IonBackButton
  ]
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  // Getter for easy access to form fields in the template
  get f() {
    return this.forgotPasswordForm.controls;
  }

  async onSubmit() {
    this.isSubmitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    }

    try {
      // TODO: Implement actual API call to send OTP
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success toast
      const toast = await this.toastController.create({
        message: 'A 5-digit verification code has been sent to your email!',
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();

      // Navigate to OTP verification page
      await this.router.navigate(['/verify-otp']);
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Failed to send verification code. Please try again.',
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
    }
  }

  // Helper method to get error message
  getErrorMessage(control: string): string {
    if (!this.isSubmitted) return '';

    const formControl = this.f[control];
    if (!formControl || !formControl.errors) return '';

    if (formControl.errors['required']) return `Email is required`;
    if (formControl.errors['email']) return 'Please enter a valid email';

    return '';
  }
} 