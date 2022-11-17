export interface ProductShape {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: string,
    public imageUrl: string
  ) {}
  
  public static async fetchProducts(): Promise<Product[]> {
    const config = useRuntimeConfig();
    const products: Product[] = await $fetch('/products', {
      baseURL: config.public.baseUrl,
      parseResponse: responseText => {
        const products: ProductShape[] = JSON.parse(responseText);
        return products.map(this.from);
      }
    });
    return products;
  }
  
  public static async fetchProductById(id: number): Promise<Product> {
    const config = useRuntimeConfig();
    const product: Product = await $fetch(`/products/${id}`, {
      baseURL: config.public.baseUrl,
      parseResponse: responseText => {
        const product: ProductShape = JSON.parse(responseText);
        return this.from(product);
      }
    });
    return product;
  }
  
  public static from(productShape: ProductShape): Product {
    return new Product(productShape.id, productShape.name, productShape.price, productShape.imageUrl);
  }
}
