import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductServiceService} from './product-service.service';
import { UpdateComponent } from './update/update.component';
import { AddElectronicsComponent } from './add-electronics/add-electronics.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EditElectronicsComponent } from './edit-electronics/edit-electronics.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddProductsComponent,
    HeaderComponent,
    UpdateComponent,
    AddElectronicsComponent,
    ElectronicsComponent,
    EditElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
