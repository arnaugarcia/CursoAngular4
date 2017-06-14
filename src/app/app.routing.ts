/**
 * Created by arnau on 14/6/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes propios
import { EmpleadosComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

const appRoutes: Routes = [
  {path: '', component: EmpleadosComponent},
  {path: 'empleado', component: EmpleadosComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: '**', component: EmpleadosComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
