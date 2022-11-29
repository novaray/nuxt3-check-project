<script lang="ts" setup>
import { ElIcon } from 'element-plus';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import BaseDialog from '~/components/base/BaseDialog.vue';
import { useConfirmDialogStore, useProductDialogStore } from '~/store/dialog';

const handleConfirmDialogSuccess = () => {
  confirmStore.close();
  setTimeout(() => {
    productDialogStore.close();
  }, 300);
};

const productDialogStore = useProductDialogStore();
const confirmStore = useConfirmDialogStore();
confirmStore.handleSuccess = handleConfirmDialogSuccess;

const handleClose = () => {
  productDialogStore.close();
};

const handleConfirm = () => {
  confirmStore.open();
};

</script>

<template>
  <BaseDialog :visible="productDialogStore.visible">
    <template #header="{ titleId, titleClass }">
      <div class="product-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <BaseButton type="danger" @click="handleClose">
          <el-icon class="el-icon--left">
            <CircleCloseFilled/>
          </el-icon>
          Close
        </BaseButton>
      </div>
    </template>
    <template #content>
      {{ productDialogStore.data }}
    </template>
    <template #footer>
      <div class="dialog-footer">
        <BaseButton @click="handleClose">
          Cancel
        </BaseButton>
        <BaseButton @click="handleConfirm">
          Confirm
        </BaseButton>
      </div>
    </template>
  </BaseDialog>
</template>

<style scoped>
.product-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
