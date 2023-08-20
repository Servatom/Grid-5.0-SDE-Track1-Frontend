export interface IOrder {
  id: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  color: string;
  size: string;
  image: string;
  description: string;
  average_rating: number;
}
