/**
 * Created by arnau on 14/6/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes propios
import { EmpleadosComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import {ContactoComponent} from './contacto/contacto.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleado', component: EmpleadosComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);