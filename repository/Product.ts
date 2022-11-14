export interface ProductShape {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export class Product implements ProductShape {
  constructor(
    private _id: number,
    private _name: string,
    private _price: string,
    private _imageUrl: string
  ) {}
  
  public static async fetchProducts(): Promise<Product[]> {
    const config = useRuntimeConfig();
    const products: Product[] = await $fetch('/products', {
      baseURL: config.public.baseUrl,
      parseResponse: responseText => {
        const products: ProductShape[] = JSON.parse(responseText);
        return products.map(p => new Product(p.id, p.name, p.price, p.imageUrl));
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
        return new Product(product.id, product.name, product.price, product.imageUrl);
      }
    });
    return product;
  }
  
  get id(): number {
    return this._id;
  }
  
  get name(): string {
    return this._name;
  }
  
  get price(): string {
    return this._price;
  }
  
  get imageUrl(): string {
    return this._imageUrl;
  }
  
  
  set id(value: number) {
    this._id = value;
  }
  
  set name(value: string) {
    this._name = value;
  }
  
  set price(value: string) {
    this._price = value;
  }
  
  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
