import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  SignupForm: FormGroup;
  forbiddenUserNames=['viki','ani'];
  faCoffee = faCoffee;

  constructor() { 
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required]),
          'email':new FormControl(null,[Validators.required,Validators.email]),
          'msg': new FormControl(null)
      })
    });
    this.SignupForm.setValue({
      'userData':{
        'username':'',
        'email':'',
        'msg': ''
      }
    })
  }

  ngOnInit(){
    
  
  }

  onSubmit(){
    console.log(this.SignupForm);
  }

}
