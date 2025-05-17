import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-service-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="categories-section">
      <div class="container">
        <div class="categories-grid">
          @for (category of categories; track category.id) {
            <div class="category-card">
              <div class="category-icon">
                <span>{{ category.icon }}</span>
              </div>
              <h3 class="category-name">{{ category.name }}</h3>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .categories-section {
      padding: 4rem 0;
      background-color: var(--color-white);
    }
    
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }
    
    .category-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.5rem 1rem;
      border-radius: var(--radius-md);
      transition: var(--transition);
      cursor: pointer;
    }
    
    .category-card:hover {
      background-color: var(--color-cream);
      transform: translateY(-5px);
    }
    
    .category-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: var(--color-sage-light);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .category-name {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-text);
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      .categories-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .categories-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class ServiceCategoriesComponent {
  categories: ServiceCategory[] = [
    { id: 1, name: 'Manicure', icon: '💅' },
    { id: 2, name: 'Pedicure', icon: '👣' },
    { id: 3, name: 'Treatments', icon: '✨' },
    { id: 4, name: 'Spa', icon: '🌿' },
    { id: 5, name: 'Makeup', icon: '💄' },
    { id: 6, name: 'Hair', icon: '💇‍♀️' }
  ];
}