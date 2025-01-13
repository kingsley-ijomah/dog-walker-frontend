import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class VerifyOtpPage implements OnInit, OnDestroy {
  otpForm: FormGroup;
  otpControls: number[] = [0, 1, 2, 3, 4]; // 5-digit OTP
  isSubmitting = false;
  showError = false;
  errorMessage = '';
  resendTimer = 0;
  resendDisabled = false;
  private timerSubscription?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.otpForm = this.createForm();
  }

  ngOnInit() {
    this.startResendTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private createForm(): FormGroup {
    const group: any = {};
    this.otpControls.forEach(i => {
      group['digit' + i] = ['', [
        Validators.required,
        Validators.pattern('[0-9]'),
        Validators.maxLength(1)
      ]];
    });
    return this.formBuilder.group(group);
  }

  onOtpInput(event: any, index: number) {
    // Get the input value from the Ionic event
    const value = event.detail.value?.toString() || '';
    
    // Ensure input is a number and only one character
    const sanitizedValue = value.replace(/[^0-9]/g, '').substring(0, 1);
    
    // Update form control value
    this.otpForm.get('digit' + index)?.setValue(sanitizedValue);

    // If we're on the last input and a valid number was entered, trigger submit
    if (sanitizedValue && index === this.otpControls.length - 1) {
      if (this.otpForm.valid) {
        this.onSubmit();
      }
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    // Handle backspace
    if (event.key === 'Backspace') {
      const currentValue = this.otpForm.get('digit' + index)?.value;
      
      // If current field is empty and not first field, move to previous field
      if (!currentValue && index > 0) {
        event.preventDefault(); // Prevent the default backspace behavior
        const prevInput = document.querySelector(
          `ion-input[formcontrolname="digit${index - 1}"] input`
        ) as HTMLInputElement;
        if (prevInput) {
          prevInput.focus();
          // Optional: Select the content of the previous input
          prevInput.select();
        }
      }
      // If current field has a value, clear it but stay in the same field
      else if (currentValue) {
        this.otpForm.get('digit' + index)?.setValue('');
      }
    }
    // Handle left arrow
    else if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      const prevInput = document.querySelector(
        `ion-input[formcontrolname="digit${index - 1}"] input`
      ) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
    }
    // Handle right arrow
    else if (event.key === 'ArrowRight' && index < this.otpControls.length - 1) {
      event.preventDefault();
      const nextInput = document.querySelector(
        `ion-input[formcontrolname="digit${index + 1}"] input`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    if (!event.clipboardData) return;

    const pastedText = event.clipboardData.getData('text');
    const numbers = pastedText.replace(/[^0-9]/g, '').split('');

    this.otpControls.forEach((_, index) => {
      if (numbers[index]) {
        this.otpForm.get('digit' + index)?.setValue(numbers[index]);
      }
    });

    // Focus the next empty field or the last field if all are filled
    for (let i = 0; i < this.otpControls.length; i++) {
      if (!this.otpForm.get('digit' + i)?.value) {
        const input = document.querySelector(
          `ion-input[formcontrolname="digit${i}"] input`
        ) as HTMLInputElement;
        if (input) {
          input.focus();
          break;
        }
      }
    }

    // If all fields are filled and valid, submit the form
    if (this.otpForm.valid) {
      this.onSubmit();
    }
  }

  async onSubmit() {
    if (this.otpForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showError = false;

      try {
        const otp = this.otpControls
          .map(i => this.otpForm.get('digit' + i)?.value)
          .join('');

        // TODO: Implement OTP verification logic here
        console.log('Verifying OTP:', otp);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // For demo purposes, consider OTP '12345' as valid
        if (otp === '12345') {
          await this.router.navigate(['/auth/reset-password']);
        } else {
          this.showError = true;
          this.errorMessage = 'Invalid verification code. Please try again.';
        }
      } catch (error) {
        this.showError = true;
        this.errorMessage = 'An error occurred. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  resendOtp() {
    if (!this.resendDisabled) {
      // TODO: Implement resend OTP logic here
      console.log('Resending OTP...');
      this.startResendTimer();
    }
  }

  private startResendTimer() {
    this.resendTimer = 30; // 30 seconds cooldown
    this.resendDisabled = true;

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.resendTimer > 0) {
        this.resendTimer--;
      } else {
        this.resendDisabled = false;
        this.timerSubscription?.unsubscribe();
      }
    });
  }
} 