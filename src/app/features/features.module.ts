import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works/works.component';
import {FeaturesRoutingModule} from './features-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AddSemesterComponent } from './dialog/add-semester/add-semester.component';
import { EditSemesterComponent } from './dialog/edit-semester/edit-semester.component';
import { SemestersComponent } from './semesters/semesters.component';



@NgModule({
  declarations: [WorksComponent, AddSemesterComponent, EditSemesterComponent, SemestersComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
