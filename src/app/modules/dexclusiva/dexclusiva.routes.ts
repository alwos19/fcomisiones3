import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartaInicioComponent } from "./pages/carta-inicio/carta-inicio.component";
import { FEvalucionPropuestaComponent } from "./pages/f-evalucion-propuesta/f-evalucion-propuesta.component";

export const routes: Routes = [
{
    path: "f-evaluacion-propuesta",
    component: FEvalucionPropuestaComponent
},

{
    path: "carta-de-iniciacion",
    component: CartaInicioComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    })
export class DexclusivaRoutingModule {}