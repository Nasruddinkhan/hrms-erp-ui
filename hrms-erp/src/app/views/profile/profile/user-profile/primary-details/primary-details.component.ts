import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-primary-details',
  templateUrl: './primary-details.component.html',
  styleUrls: ['./primary-details.component.scss']
})
export class PrimaryDetailsComponent implements OnInit {


  constructor(private dilogRef: MatDialogRef<PrimaryDetailsComponent>, @Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit() {
    console.log(this.data);
  }
}
