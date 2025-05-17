import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageHomeComponent } from './components/features/home/page-home/page-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    PageHomeComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
      <app-page-home></app-page-home>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    main {
      flex: 1;
    }
  `,
  ],
})
export class AppComponent {
  title = 'HEO Beauty Salon';
}
