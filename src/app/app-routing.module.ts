import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Pages/login/login.component";
import { RegisterComponent } from "./Pages/register/register.component";
import { DashboardComponent } from "./Pages/dashboard/dashboard.component";
import { HomeComponent } from "./Pages/home/home.component";
import { ProfileComponent } from "./Pages/profile/profile.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { ResturantComponent } from "./Pages/resturant/resturant.component";
import { AuthGuard } from "./Service/auth/auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "store/:type",
    component: ResturantComponent
  },
  {
    path: "profile/:type",
    component: ProfileComponent
  },
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  ProfileComponent,
  HomeComponent
];
