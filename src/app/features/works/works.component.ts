import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../shared/api.service';
import { AddWorkComponent } from '../dialog/add-works/add-work.component';
import { EditWorkComponent } from '../dialog/edit-works/edit-work.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Név', 'Munkakör', 'Leírás', 'Jelleg', 'Műveletek'];
  dataSource;
  loading = true;

  constructor(public dialog: MatDialog, private apiService: ApiService, private router: Router) {
    if (!apiService.isLoggedIn()){
      router.navigate(['/login']);
    }
  }

  ngOnInit(): void{
    this.getWorks();
  }

  getWorks(){
    this.apiService.getWorks().subscribe((resp: any) => {
      this.loading = true;
      this.dataSource = resp.items.map(x => {
        return {
          id: x.id,
          neve: x.neve,
          munkakor: x.munkakor,
          leiras: x.leiras,
          jelleg: x.jelleg
        };
      });
      this.loading = false;
    });
  }

  addNew(){
    const dialogRef = this.dialog.open(AddWorkComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.apiService.addWork(result).subscribe(resp => {
        this.getWorks();
        alert('Sikeres munka hozzáadás!');
      });
    });
  }

  delete(id){
    this.apiService.deleteWork(id).subscribe(resp => {
      this.getWorks();
      alert('Sikeres törlés!');
    });
  }

  edit(element){
    const dialogRef = this.dialog.open(EditWorkComponent, {
      width: '450px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.apiService.editWork(element.id, result).subscribe(resp => {
        this.getWorks();
        alert('Sikeres munka frissítés!');
      });
    });
  }
}
