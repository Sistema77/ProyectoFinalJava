import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BarraLateralComponeteComponent } from './barra-lateral-componete/barra-lateral-componete.component';
import { SimuladorCreditoComponent } from './simulador-credito/simulador-credito.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaComponent } from './lista/lista.component';
import { permisosGuard } from 'src/Servicios/Guard/permisos.guard';
import { authGuard } from 'src/Servicios/Guard/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: InicioSesionComponent
  },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'menu',
    component: BarraLateralComponeteComponent,
    
    children: [
      { path: 'simulador', component: SimuladorCreditoComponent},
      { path: '', redirectTo: 'simulador', pathMatch: 'full' }
    ]
  },
  // Carga Perezosa //
  {path: 'grafica', loadChildren: () => import('./grafica/grafica.component').then(x => x.GraficaComponent)},
  { path: 'lista', component: ListaComponent, },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: InicioSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
