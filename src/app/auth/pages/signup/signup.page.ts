import { Component, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { ErrorService } from '../../../services/errors/error.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonText,
  IonButtons,
  IonBackButton,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
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
    IonCheckbox,
    IonItem,
    IonLabel,
    IonText,
    IonButtons,
    IonBackButton
  ]
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;
  backendErrors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private authService: AuthService,
    private errorService: ErrorService,
    private destroyRef: DestroyRef,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      fullName: ['King Ijomah', [Validators.required, Validators.minLength(2)]],
      email: ['king@email.com', [Validators.required, Validators.email]],
      password: ['password&123', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)
      ]],
      confirmPassword: ['password&123', [Validators.required]],
      telephone: ['08033333333', [Validators.required, Validators.pattern('^[0-9]+$')]],
      acceptTerms: [false, [Validators.requiredTrue]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit() {}

  // Custom validator for password match
  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  // Getter for easy access to form fields in the template
  get f() {
    return this.signupForm.controls;
  }

  async onSubmit() {
    this.isSubmitted = true;
    this.backendErrors = [];

    if (this.signupForm.valid) {
      const { confirmPassword, ...signupData } = this.signupForm.value;
      
      this.authService
        .signUp(signupData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: async (response) => {
            const toast = await this.toastController.create({
              message: 'Sign up successful! Please check your email for verification.',
              duration: 3000,
              position: 'bottom',
              color: 'success'
            });
            await toast.present();
            this.router.navigate(['/login']);
          },
          error: (error) => {
            this.backendErrors = this.errorService.errors;
          }
        });
    }
  }

  // Helper method to get error message
  getErrorMessage(control: string): string {
    if (!this.isSubmitted) return '';

    const formControl = this.f[control];
    if (!formControl || !formControl.errors) return '';

    if (formControl.errors['required']) return `${control} is required`;
    if (formControl.errors['email']) return 'Please enter a valid email';
    if (formControl.errors['minlength']) {
      const minLength = formControl.errors['minlength'].requiredLength;
      return `${control} must be at least ${minLength} characters`;
    }
    if (formControl.errors['pattern']) return 'Please enter a valid phone number';
    if (formControl.errors['passwordMismatch']) return 'Passwords do not match';

    return '';
  }
} 