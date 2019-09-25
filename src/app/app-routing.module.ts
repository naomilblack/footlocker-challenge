import { AboutComponent } from './pages/about/about.component';
import { AccesoriesComponent} from './pages/accesories/accesories.component'
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { PantsComponent } from './pages/pants/pants.component';
import { productsRoutes } from './products/products-routing.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'accesories', component: AccesoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pants', component: PantsComponent },
  { path: 'products', children: productsRoutes },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
