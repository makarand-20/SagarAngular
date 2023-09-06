import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {
  formData: any = {}; // Initialize an empty object to store form data.
  userForm: any;

  onSubmit() {
    // Handle form submission logic here, e.g., send data to a server or perform actions.
    if (this.userForm.valid) {
      console.log('Form submitted with data:', this.formData);
      // Here, you can make an HTTP request to send the data to a server.
    }
  }

  // Expose user information through an API
  getUserInfo() {
    return this.formData;
  }
}
