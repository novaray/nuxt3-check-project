export * from './confirmDialog';
export * from './productDialog';

export interface DialogState<T> {
  visible: boolean;
  data: T;
  handleClose: () => void;
  handleSuccess: () => void;
}
