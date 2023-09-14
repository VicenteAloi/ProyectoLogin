export interface product {
  id: number,
  model: string,
  brand: string
  description: string,
  price: Float32Array;
  stock: Int16Array;
  date_register: string;
  date_updated: string;
  image: string;
}