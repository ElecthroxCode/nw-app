import { Injectable } from '@angular/core';
import { Service, ServiceCategory } from '../models/service.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeautyService {
  private services: Service[] = [
    {
      id: 1,
      name: 'Classic Manicure',
      description: 'A traditional manicure with nail shaping, cuticle care, and polish application.',
      price: 35,
      duration: 45,
      categoryId: 1,
      imageUrl: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg'
    },
    {
      id: 2,
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish that stays chip-free for up to two weeks.',
      price: 45,
      duration: 60,
      categoryId: 1,
      imageUrl: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg'
    },
    {
      id: 3,
      name: 'Spa Pedicure',
      description: 'Luxurious foot treatment with exfoliation, massage, and polish.',
      price: 55,
      duration: 60,
      categoryId: 2,
      imageUrl: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg'
    },
    {
      id: 4,
      name: 'Nail Art Design',
      description: 'Custom nail art designs tailored to your preferences.',
      price: 20,
      duration: 30,
      categoryId: 1,
      imageUrl: 'https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg'
    }
  ];

  private categories: ServiceCategory[] = [
    { id: 1, name: 'Manicure', icon: '💅' },
    { id: 2, name: 'Pedicure', icon: '👣' },
    { id: 3, name: 'Treatments', icon: '✨' },
    { id: 4, name: 'Spa', icon: '🌿' },
    { id: 5, name: 'Makeup', icon: '💄' },
    { id: 6, name: 'Hair', icon: '💇‍♀️' }
  ];

  constructor() { }

  getServices(): Observable<Service[]> {
    return of(this.services);
  }

  getServiceById(id: number): Observable<Service | undefined> {
    const service = this.services.find(s => s.id === id);
    return of(service);
  }

  getCategories(): Observable<ServiceCategory[]> {
    return of(this.categories);
  }

  getServicesByCategory(categoryId: number): Observable<Service[]> {
    const filteredServices = this.services.filter(s => s.categoryId === categoryId);
    return of(filteredServices);
  }
}