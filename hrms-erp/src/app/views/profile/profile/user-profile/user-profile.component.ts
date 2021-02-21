import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PrimaryDetailsComponent } from './primary-details/primary-details.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  panelOpenState = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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

   openAddreessDetails(){
    const dialogRef= this.dialog.open(AddressDetailsComponent,{
      backdropClass:'backdrop',
       data:{
         name:"Nasruddin khan"
       },
       disableClose:true
     })
     dialogRef.afterClosed().subscribe(result=> console.log(result));
   }

}
