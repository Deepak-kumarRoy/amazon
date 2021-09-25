import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddElectronicsComponent } from './add-electronics/add-electronics.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditElectronicsComponent } from './edit-electronics/edit-electronics.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: "", component: HeaderComponent, children: [
      {
        path:"add-products",
        component: AddProductsComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "update/:id",
        component: UpdateComponent
      },
      {
        path: "edit-electronics/:id",
        component: EditElectronicsComponent
      },
      {
        path:"add-electronics",
        component:AddElectronicsComponent
      },
      {
        path:"electronics",
        component:ElectronicsComponent
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
