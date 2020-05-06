import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../shared/api.service';
import { AddSemesterComponent } from '../dialog/add-semester/add-semester.component';
import { EditSemesterComponent } from '../dialog/edit-semester/edit-semester.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Név', 'Munkakör', 'Leírás', 'Jelleg', 'Műveletek'];
  dataSource;
  loading = true;

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void{
    this.getWorks();
  }

  getWorks(){
    this.apiService.getWorks().subscribe((resp: any) => {
      this.loading = true;
      this.dataSource = resp.items.map(x => {
        return {
          id: x.id,
          name: x.neve,
          munkakor: x.munkakor,
          leiras: x.leiras,
          jelleg: x.jelleg
        };
      });
      this.loading = false;
    });
  }

  addNew(){
    const dialogRef = this.dialog.open(AddSemesterComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apiService.addWork(result).subscribe(resp => {
        this.getWorks();
        alert('Sikeres munka hozzáadás!');
      });
    });
  }

  delete(id){
    this.apiService.deleteSemester(id).subscribe(resp => {
      this.getWorks();
      alert('Sikeres törlés!');
    });
  }

  edit(element){
    const dialogRef = this.dialog.open(EditSemesterComponent, {
      width: '450px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apiService.editSemester(element.id, result).subscribe(resp => {
        this.getWorks();
        alert('Sikeres munka frissítés!');
      });
    });
  }
}
