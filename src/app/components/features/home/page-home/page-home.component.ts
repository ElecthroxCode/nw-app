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
  template: `
    <app-hero></app-hero>
    <app-service-categories></app-service-categories>
    <app-booking-search></app-booking-search>
    <app-gallery></app-gallery>
    <div>
      <app-card-business></app-card-business>
    </div>
  `,
  styles: [`

    `],
})
export class PageHomeComponent {}
