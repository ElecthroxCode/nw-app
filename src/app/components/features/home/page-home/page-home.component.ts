import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServiceCategoriesComponent } from '../service-categories/service-categories.component';
import { BookingSearchComponent } from '../booking-search/booking-search.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { CardBusinessComponent } from '../card-business/card-business.component';

@Component({
  selector: 'app-page-home',
  imports: [
    HeroComponent,
    ServiceCategoriesComponent,
    BookingSearchComponent,
    GalleryComponent,
    CardBusinessComponent,
  ],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}
