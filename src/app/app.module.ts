import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CatalogComponent } from './catalog/catalog/catalog.component';

import { CreateProductComponent } from './catalog/create-product/create-product.component';
import { CatalogHeaderComponent } from './catalog/catalog-header/catalog-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CreateProductComponent,
    CatalogHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
