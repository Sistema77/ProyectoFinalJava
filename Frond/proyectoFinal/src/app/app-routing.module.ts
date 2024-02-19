import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BarraLateralComponeteComponent } from './barra-lateral-componete/barra-lateral-componete.component';
import { SimuladorCreditoComponent } from './simulador-credito/simulador-credito.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaComponent } from './lista/lista.component';
import { nuevoGuardianGuard } from './nuevo-guardian.guard';



const routes: Routes = [
  {
    path: 'login',
    component: InicioSesionComponent
  },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'menu',
    component: BarraLateralComponeteComponent, canActivate: [nuevoGuardianGuard],
    
    children: [
      { path: 'simulador', component: SimuladorCreditoComponent},
     
      { path: 'lista', component: ListaComponent},
      { path: 'grafica', loadChildren: () => import('./grafica/grafica.module').then(m => m.GraficaModule) },
      { path: '', redirectTo: 'simulador', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: '**', component: InicioSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
