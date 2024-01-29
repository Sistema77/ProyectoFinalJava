import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BarraLateralComponeteComponent } from './barra-lateral-componete/barra-lateral-componete.component';
import { SimuladorCreditoComponent } from './simulador-credito/simulador-credito.component';
import { RegistroComponent } from './registro/registro.component';

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
      { path: 'simulador', component: SimuladorCreditoComponent },
      { path: '', redirectTo: 'simulador', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: InicioSesionComponent }
  // Carga Perezosa //

  // {path:'menu', 
  //  loadChildren: () => import('./menu/minimenu.module').then(m => m.StudentModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
