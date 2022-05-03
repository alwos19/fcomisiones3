
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComisionesTablaComponent } from './components/comisiones-tabla/comisiones-tabla.component'

  const routes: Routes = [
  {
    path: 'comisiones',
    component: ComisionesTablaComponent,
  },
  { path: '**', redirectTo: 'comisiones', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComisionesRoutingModule {}
