import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="container header-container">
        <div class="logo">HEO</div>
        <nav>
          <ul class="nav-list">
            <li><a href="#" class="nav-link">Home</a></li>
            <li><a href="#" class="nav-link">Search</a></li>
            <li><a href="#" class="nav-link">Nails</a></li>
            <li><a href="#" class="nav-link">Services</a></li>
            <li><a href="#" class="nav-link">Prices</a></li>
            <li><a href="#" class="nav-link">Offers</a></li>
            <li><a href="#" class="nav-link">Team</a></li>
            <li><a href="#" class="nav-link">Contact</a></li>
          </ul>
        </nav>
        <div class="cta-button">
          <button class="btn btn-primary">Sign In</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      background-color: var(--color-sage);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      font-family: 'Poiret One', cursive;
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--color-white);
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      gap: 1.5rem;
    }
    
    .nav-link {
      color: var(--color-white);
      font-size: 0.9rem;
      font-weight: 300;
      letter-spacing: 0.5px;
      padding: 0.25rem 0;
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--color-white);
      transition: var(--transition);
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .cta-button .btn {
      background-color: var(--color-pink);
      color: var(--color-text);
      border-radius: 50px;
      padding: 0.5rem 1.25rem;
      font-size: 0.9rem;
    }
    
    .cta-button .btn:hover {
      background-color: var(--color-pink-dark);
      transform: translateY(-2px);
    }
    
    @media (max-width: 1024px) {
      .nav-list {
        gap: 1rem;
      }
    }
    
    @media (max-width: 768px) {
      .nav-list {
        display: none;
      }
      
      .header-container {
        justify-content: space-between;
      }
    }
  `]
})
export class HeaderComponent {}