import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SolicitudesTableComponent } from "./solicitudes-table/solicitudes-table.component";

const routes: Routes = [
    {
        path:'tabla-solicitudes',
        component:SolicitudesTableComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class HomeRoutingModule {}