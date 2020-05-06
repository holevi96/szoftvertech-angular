import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSemesterComponent } from '../add-semester/add-semester.component';

@Component({
  selector: 'app-edit-semester',
  templateUrl: './edit-semester.component.html',
  styleUrls: ['./edit-semester.component.scss']
})
export class EditSemesterComponent implements OnInit {

  semester= {
    megnevezes: '',
    kezdet: ''
  };

  constructor(public dialogRef: MatDialogRef<AddSemesterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.semester.megnevezes = this.data.name;
    this.semester.kezdet = this.data.startDate;
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

}
