import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/new-transfer/new-transfer.module').then(m => m.NewTransferModule) },
  { path: 'transferir', loadChildren: () => import('./components/make-transfer/make-transfer.module').then(m => m.MakeTransferModule) },
  { path: 'historial', loadChildren: () => import('./components/transfer-history/transfer-history.module').then(m => m.TransferHistoryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
