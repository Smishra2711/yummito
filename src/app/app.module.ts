import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { PcardComponent } from './Components/pcard/pcard.component';
import { CartComponent } from './Pages/cart/cart.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ResturantComponent } from './Pages/resturant/resturant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    PcardComponent,
    CartComponent,
    LayoutComponent,
    ResturantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
