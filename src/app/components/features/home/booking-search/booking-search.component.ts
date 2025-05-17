import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="booking-section">
      <div class="container">
        <div class="booking-container">
          <div class="search-controls">
            <div class="search-group">
              <button class="search-button">Search</button>
            </div>
            <div class="search-group">
              <input 
                type="text" 
                class="search-input" 
                placeholder="Service or location..."
              >
            </div>
            <div class="search-group">
              <input 
                type="date" 
                class="search-input date-input"
              >
            </div>
            <div class="search-group">
              <button class="search-button primary">Find</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .booking-section {
      padding: 2rem 0 4rem;
      background-color: var(--color-cream);
    }
    
    .booking-container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .search-controls {
      display: flex;
      background-color: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-soft);
      overflow: hidden;
    }
    
    .search-group {
      flex: 1;
      position: relative;
    }
    
    .search-group:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 25%;
      bottom: 25%;
      width: 1px;
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    .search-input {
      width: 100%;
      padding: 1rem;
      border: none;
      font-family: 'Raleway', sans-serif;
      font-size: 0.9rem;
      color: var(--color-text);
      outline: none;
    }
    
    .search-input::placeholder {
      color: var(--color-text-light);
    }
    
    .search-button {
      width: 100%;
      height: 100%;
      padding: 1rem;
      background-color: transparent;
      color: var(--color-text);
      font-size: 0.9rem;
      cursor: pointer;
      transition: var(--transition);
      border: none;
      outline: none;
    }
    
    .search-button:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
    
    .search-button.primary {
      background-color: var(--color-sage);
      color: var(--color-white);
    }
    
    .search-button.primary:hover {
      background-color: var(--color-sage-dark);
    }
    
    @media (max-width: 768px) {
      .search-controls {
        flex-direction: column;
      }
      
      .search-group::after {
        display: none;
      }
      
      .search-group:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
  `]
})
export class BookingSearchComponent {}