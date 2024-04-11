import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ButtonEditComponent } from './components/buttons/button-edit/button-edit.component';
import { ButtonDeleteComponent } from './components/buttons/button-delete/button-delete.component';
import { ButtonAddComponent } from './components/buttons/button-add/button-add.component';
import { ButtonSaveComponent } from './components/buttons/button-save/button-save.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormProductComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ButtonAddComponent,
    ButtonSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
