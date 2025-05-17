import { Component } from '@angular/core';

@Component({
  selector: 'app-card-business',
  imports: [],
  template: `
  <section class="card-business-section">
  <div class="container">
    <h2 class="section-title">Business</h2>
    
    <div class="card-business-grid">
    @for(item of [0,0,0,0,0,0,0,0]; track item){
      <div class="card-business-item"
      (mouseenter)="hoveredIndex = $index" 
      (mouseleave)="hoveredIndex = null"
    >
        <div class="img-card" [class.img-hover]="hoveredIndex === $index"></div>
        <div class="card-content">
        <div class="">
          <h3 class="title-card">El cangri</h3>
          <p class="subtitle-card">Barbería</p>
        </div>
          <div class="star-container">⭐ <span>4.7</span></div>
          <p>Realizamos todo tipo de cortes de cabello de niños y cabelleros.</p>
        </div>
        <div class="card-btn">
          <button class="btn-c btn-primary" [class.btn-c-hover]="hoveredIndex === $index ">View more</button>
        </div>
      </div>
    }
    </div>
   
  </div>
</section>
  `,
  styles: [
    `
  .card-business-section {
      padding: 4rem 0;
      margin-top: 2rem;
      background-color: var(--color-white);
    }

    .section-title {
      text-align: center;
      margin-bottom: 3rem;
      color: var(--color-text);
    }

    .card-business-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    .card-business-item {
      /*position: relative;*/
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-soft);
      cursor: pointer;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .img-card{
      background-image: url('https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cover;
      background-position: center;
      height: 10rem;
      transition: transform 0.3s ease;
    }

    .img-hover{
      transform: scale(1.05);
    }

    .card-content{
      padding: 4px;
    }

    .title-card{
      margin-bottom: 0px;
    }
    .subtitle-card{
      color: var(--color-text-light);
    }
    
    .star-container{
      margin-bottom: 1.5rem;
    }

    .btn-c{
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-weight: 500;
      text-align: center;
      transition: var(--transition);
      border-radius: var(--radius-lg);
      background-color: var(--color-pink-light);
      color: var(--color-sage-dark);
    }

    .btn-c-hover{
      font-weight: 500;
      background-color: var(--color-sage-dark);
      color: var(--color-pink-light);
    }

    .card-btn{
      padding: 0px 4px 10px 4px;
      display: flex;
      justify-content: center;
    }

    @media (max-width: 992px) {
      .card-business-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .card-business-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .card-business-grid {
        grid-template-columns: 1fr;
      }
    }
    `,
  ],
})
export class CardBusinessComponent {
  hoveredIndex: number | null = null;
}
