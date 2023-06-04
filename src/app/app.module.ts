import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './component/dashboard/portfolio/portfolio.component';
import { ProductComponent } from './component/ecommerce/product/product.component';
import { ProductDetailsComponent } from './component/ecommerce/product-details/product-details.component';
import { OrdersComponent } from './component/ecommerce/orders/orders.component';
import { SignInComponent } from './component/Authentcation/sign-in/sign-in.component';
import { SignUpComponent } from './component/Authentcation/sign-up/sign-up.component';
import { LockScreenComponent } from './component/Authentcation/lock-screen/lock-screen.component';
import { DownloadsComponent } from './component/single/downloads/downloads.component';
import { TablesComponent } from './component/single/tables/tables.component';
import { FAQComponent } from './component/single/faq/faq.component';
import { IconsComponent } from './component/single/icons/icons.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProductComponent,
    ProductDetailsComponent,
    OrdersComponent,
    SignInComponent,
    SignUpComponent,
    LockScreenComponent,
    DownloadsComponent,
    TablesComponent,
    FAQComponent,
    IconsComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule, MatCardModule,
    MatCheckboxModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatRadioModule,
    MatSidenavModule, MatTableModule,
    MatToolbarModule, MatBadgeModule,
    MatPaginatorModule, ChartModule,
    FontAwesomeModule, MatStepperModule,
    MatTabsModule, MatSlideToggleModule,
    MatMenuModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
