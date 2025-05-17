import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Beauty Services Booking</h1>
          <p class="hero-subtitle">Find, match and book your perfect beauty appointment</p>
          <div class="hero-cta">
            <button class="btn btn-primary">Start Now</button>
          </div>
        </div>
        <div class="hero-image">
          <img 
            src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Woman with beauty products"
            loading="lazy"
          >
          <div class="hero-decoration">
            <div class="decoration-item"></div>
            <div class="decoration-item"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background-color: var(--color-sage);
      min-height: 500px;
      display: flex;
      align-items: center;
      padding: 2rem 0;
      overflow: hidden;
      position: relative;
    }
    
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }
    
    .hero-content {
      color: var(--color-white);
      z-index: 1;
    }
    
    .hero-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .hero-subtitle {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .hero-cta .btn {
      font-size: 1rem;
      padding: 0.75rem 2rem;
      border-radius: 50px;
      background-color: var(--color-pink);
      color: var(--color-text);
      font-weight: 400;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .hero-cta .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    
    .hero-image {
      position: relative;
      z-index: 1;
      text-align: right;
    }
    
    .hero-image img {
      max-width: 100%;
      height: auto;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-soft);
    }
    
    .hero-decoration {
      position: absolute;
      top: 10%;
      right: 5%;
      z-index: -1;
    }
    
    .decoration-item {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--color-pink-light);
      margin-bottom: 1rem;
      opacity: 0.6;
    }
    
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .hero-image {
        grid-row: 1;
        text-align: center;
        margin-bottom: 2rem;
      }
      
      .hero-content {
        grid-row: 2;
      }
      
      .hero-title {
        font-size: 2rem;
      }
    }
  `]
})
export class HeroComponent {}