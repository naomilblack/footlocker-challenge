import { AboutComponent } from './pages/about/about.component';
import { AccesoriesComponent} from './pages/accesories/accesories.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { PantsComponent } from './pages/pants/pants.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    AccesoriesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PantsComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    ProductsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
