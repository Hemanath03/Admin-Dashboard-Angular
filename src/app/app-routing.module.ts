import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PortfolioComponent } from './component/dashboard/portfolio/portfolio.component';

import { OrdersComponent } from './component/ecommerce/orders/orders.component';
import { ProductComponent } from './component/ecommerce/product/product.component';
import { ProductDetailsComponent } from './component/ecommerce/product-details/product-details.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { DownloadsComponent } from './component/single/downloads/downloads.component';
import { FAQComponent } from './component/single/faq/faq.component';
import { IconsComponent } from './component/single/icons/icons.component';
import { TablesComponent } from './component/single/tables/tables.component';
import { SignInComponent } from './component/Authentcation/sign-in/sign-in.component';
import { SignUpComponent } from './component/Authentcation/sign-up/sign-up.component';
import { LockScreenComponent } from './component/Authentcation/lock-screen/lock-screen.component';

const routes: Routes = [
  {path:'',component:PortfolioComponent},
  {path:'portfolio',component:PortfolioComponent},
  
  // authentication
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'lock',component:LockScreenComponent},
  // eCommerce
  {path:'order',component:OrdersComponent},
  {path:'product',component:ProductComponent},
  {path:'product_details',component:ProductDetailsComponent},

  {path:'nav',component:SideNavComponent},
  // single
  {path:'download',component:DownloadsComponent},
  {path:'faq',component:FAQComponent},
  {path:'icons',component:IconsComponent},
  {path:'table',component:TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
