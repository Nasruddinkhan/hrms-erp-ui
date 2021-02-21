import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  constructor(private dilogRef: MatDialogRef<AddressDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any) { }
    ngOnInit(): void {
  }

}
