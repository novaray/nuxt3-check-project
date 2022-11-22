import { DialogState } from '~/store/dialog/index';
import { Product } from '~/repository/Product';

export type ProductDialogData = Product | null;

export interface ProductDialogState extends DialogState<ProductDialogData> {
  data: ProductDialogData
}

export const useProductDialogStore = defineStore('productModal', {
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
      this.visible = false;
    }
  },
});
