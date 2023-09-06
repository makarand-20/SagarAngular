import { Component } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {
  formData: any = {}; // Initialize an empty object to store form data.
  userForm: any;

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted with data:', this.formData);
      alert('Form submitted successfully!');
    } else {
      this.alertInvalidFields();
    }
  }

  alertInvalidFields() {
    const invalidFields = [];

    if (this.userForm.controls['name'].invalid) {
      invalidFields.push('Name');
    }

    if (this.userForm.controls['contactNo'].invalid) {
      invalidFields.push('Contact No');
    }

    if (this.userForm.controls['email'].invalid) {
      invalidFields.push('Email');
    }

    alert(`Please fill in or correct the following fields: ${invalidFields.join(', ')}`);
  }

  // Expose user information through an API
  getUserInfo() {
    return this.formData;
  }
}
