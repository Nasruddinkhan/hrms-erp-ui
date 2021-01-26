import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PrimaryDetailsComponent } from './primary-details/primary-details.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openPrimaryDetails(){
   const dialogRef= this.dialog.open(PrimaryDetailsComponent,{
     backdropClass:'backdrop',
      data:{
        name:"Nasruddin khan"
      },
      disableClose:true
    })
    dialogRef.afterClosed().subscribe(result=> console.log(result));
  }

  

  openContactDetails(){
    const dialogRef= this.dialog.open(ContactDetailsComponent,{
      backdropClass:'backdrop',
       data:{
         name:"Nasruddin khan"
       },
       disableClose:true
     })
     dialogRef.afterClosed().subscribe(result=> console.log(result));
   }
   
}
