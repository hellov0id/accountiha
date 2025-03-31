export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  image: string;
  telegramLink: string;
  features: string[];
  warranty: string;
  deliveryTime: string;
  seller: {
    name: string;
    rating: number;
    salesCount: number;
  };
  seoDescription: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
  subcategoryNames: {
    [key: string]: string;
  };
}