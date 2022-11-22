import { DialogState } from '~/store/dialog/index';

export interface ConfirmDialogState extends DialogState<null> {
  data: null;
}

export const useConfirmDialogStore = defineStore('confirmDialog', {
  state: (): ConfirmDialogState => ({
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
