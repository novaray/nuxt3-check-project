import { DialogState } from '~/store/dialog/index';
import { Product } from '~/repository/Product';

export type ProductDialogData = Product | null;

export interface ProductDialogState extends DialogState<ProductDialogData> {
  data: ProductDialogData;
}

export const useProductDialogStore = defineStore('productDialog', {
  state: (): ProductDialogState => ({
    visible: false,
    data: null,
    handleClose: () => {},
    handleSuccess: () => {}
  }),
  actions: {
    open() {
      this.visible = true;
    },
    close() {
      this.data = null;
      this.visible = false;
    },
    setProduct(product: Product) {
      this.data = product;
    },
    loadData() {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve('hello');
        }, 1000)
      );
    }
  },
});
