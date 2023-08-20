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

export interface ISUggestedProduct {
  current_price: number;
  discounted: boolean;
  link: string;
  name: string;
  original_price: number;
  query_url: string;
  thumbnail: string;
}
