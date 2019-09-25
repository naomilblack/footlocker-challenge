import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent} from './product-list/product-list.component'
import { RouterModule, Routes } from '@angular/router';

export const productsRoutes: Routes = [
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-list', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
