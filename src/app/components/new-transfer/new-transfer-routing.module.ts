import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTransferComponent } from './new-transfer.component';


const routes: Routes = [
  {
    path: '',
    component: NewTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTransferRoutingModule { }