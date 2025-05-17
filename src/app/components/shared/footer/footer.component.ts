import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>HEO</h2>
            <p>Beauty Salon</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Manicure</a></li>
                <li><a href="#">Pedicure</a></li>
                <li><a href="#">Nail Extensions</a></li>
                <li><a href="#">Nail Art</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>About</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 HEO Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--color-sage);
      color: var(--color-white);
      padding: 4rem 0 2rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }
    
    .footer-logo h2 {
      font-family: 'Poiret One', cursive;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .footer-logo p {
      opacity: 0.8;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    .footer-section h3 {
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }
    
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
    
    .footer-section li {
      margin-bottom: 0.75rem;
    }
    
    .footer-section a {
      color: var(--color-white);
      opacity: 0.8;
      transition: var(--transition);
    }
    
    .footer-section a:hover {
      opacity: 1;
      padding-left: 5px;
    }
    
    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      font-size: 0.9rem;
      opacity: 0.7;
    }
    
    @media (max-width: 992px) {
      .footer-content {
        grid-template-columns: 1fr;
      }
      
      .footer-logo {
        text-align: center;
        margin-bottom: 2rem;
      }
    }
    
    @media (max-width: 768px) {
      .footer-links {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer-section {
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}