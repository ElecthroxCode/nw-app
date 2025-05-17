export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  categoryId: number;
  imageUrl: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
}