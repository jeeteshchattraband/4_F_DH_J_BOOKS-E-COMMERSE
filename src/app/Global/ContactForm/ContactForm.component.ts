import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'embryo-ContactForm',
  templateUrl: './ContactForm.component.html',
  styleUrls: ['./ContactForm.component.scss']
})
export class ContactFormComponent implements OnInit {

   contactForm: FormGroup;
   emailPattern: any = /\S+@\S+\.\S+/;

   constructor(private formGroup: FormBuilder) { }

   ngOnInit() {
      this.contactForm = this.formGroup.group({
         first_name : ['', { validators: [Validators.required] }],
         last_name  : ['', { validators: [Validators.required] }],
         email      : ['', { validators: [Validators.required, Validators.pattern(this.emailPattern)] }],
         subject    : ['', { validators: [Validators.required] }],
         message    : ['', { validators: [Validators.required] }]
      });
   }

   public submitForm() {
      if (this.contactForm.valid) {
         console.log(this.contactForm.value);
      } else {
         // tslint:disable-next-line:forin
         for (const i in this.contactForm.controls) {
            this.contactForm.controls[i].markAsTouched();
         }
      }
   }

}
