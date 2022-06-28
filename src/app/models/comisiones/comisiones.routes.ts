import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearComisionComponent } from "./pages/crear-comision/crear-comision.component";
import { VerComisionComponent } from "./pages/ver-comision/ver-comision.component";

export const routes: Routes= [

    {
        path: 'crear-comision',
        component: CrearComisionComponent
    },

    {
        path: 'ver-comision',
        component: VerComisionComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ComisionesRoutingModule {}