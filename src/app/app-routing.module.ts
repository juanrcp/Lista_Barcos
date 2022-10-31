import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path: '', redirectTo: '/lista-barcos', pathMatch: 'full'},
  {path: 'lista-barcos', component: ListaBarcosComponent},
  {path: 'detalles/:id', component: DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
