import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data={
    to:"",
    subject:"",
    message:""
  }

  flag=true;

  constructor(private email:EmailService, private snak:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm()
  {
    console.log("try to submit form")
    console.log("DATA",this.data)

    if(this.data.to==''|| this.data.subject==''|| this.data.message)
    {
      this.snak.open("Fileds can not be empty ", "ok")
      return;
    }

    this.flag=true;


    this.email.sendEmail(this.data).subscribe(
      Response=>{
              console.log(Response) 
              this.flag=false;
              this.snak.open("Send Successfull","ok") 
      },
  errror=>{
    console.log(errror);
    this.flag=false;
    this.snak.open("EORROR","OK")
  }
     
    
    ) 
  }

}
