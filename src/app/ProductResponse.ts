export interface ProductsResponse {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }
  export interface ProductListResponse {
    products: ProductsResponse[];
    total: number;
    skip: number;
    limit: number;
  }