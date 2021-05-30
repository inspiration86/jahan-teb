import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './about/department/department.component';
import { TeamComponent } from './about/team/team.component';
import { ServicesComponent } from './home/services/services.component';
import { SliderComponent } from './home/slider/slider.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { NewestProductsComponent } from './home/newest-products/newest-products.component';
import { PartnersComponent } from './home/partners/partners.component';
import { FeaturesComponent } from './home/features/features.component';
import { SubscriptionComponent } from './home/subscription/subscription.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmodulesModule } from '../SharedModules/sharedmodules.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SharedComponentsModule } from '../SharedComponents/sharedcomponents.module';
import { HomeComponent } from './home/home.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    SubscriptionComponent,
    FeaturesComponent,
    PartnersComponent,
    NewestProductsComponent,
    LatestNewsComponent,
    SliderComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    FaqComponent,
    NewsComponent,
    NewsDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    DepartmentComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    SharedmodulesModule,
    SharedComponentsModule,
    SharedModule,
    NgImageFullscreenViewModule,
    NgxImageZoomModule,
    JwPaginationModule,
    CarouselModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
