import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title">Our Popular Services</h2>
        <p class="section-subtitle">Choose from our most requested nail designs</p>
        
        <div class="gallery-grid">
          @for (item of galleryItems; track item.id) {
            <div class="gallery-item">
              <img 
                [src]="item.imageUrl" 
                [alt]="item.title"
                loading="lazy"
                class="gallery-image"
              >
              <div class="gallery-overlay">
                <h3 class="gallery-title">{{ item.title }}</h3>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      padding: 4rem 0;
      background-color: var(--color-white);
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--color-text-light);
      margin-bottom: 2.5rem;
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
    
    .gallery-item {
      position: relative;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-soft);
      cursor: pointer;
      height: 250px;
    }
    
    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .gallery-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      padding: 1.5rem 1rem;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    
    .gallery-title {
      color: white;
      font-size: 1rem;
      margin: 0;
    }
    
    .gallery-item:hover .gallery-image {
      transform: scale(1.05);
    }
    
    .gallery-item:hover .gallery-overlay {
      transform: translateY(0);
    }
    
    @media (max-width: 992px) {
      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'French Manicure'
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Pastel Pink Nails'
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Gel Extension'
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Nail Art Design'
    }
  ];
}