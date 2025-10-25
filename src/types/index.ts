export interface User {
  id: string;
  email: string;
}

export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem extends CoffeeItem {
  quantity: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}
