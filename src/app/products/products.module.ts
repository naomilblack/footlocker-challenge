import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material/material.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent} from './product-list/product-list.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent],
  imports: [CommonModule, MaterialModule, RouterModule,]
})
export class ProductsModule {}
