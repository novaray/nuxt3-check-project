<script lang="ts" setup>
import { ElIcon } from 'element-plus';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import { Product } from '~/repository/Product';
import BaseDialog from '~/components/base/BaseDialog.vue';

interface ProductDetailDialogProps {
  visible: boolean;
  product: Product
}
interface ProductDetailDialogEmits {
  (event: 'close'): void;
}

defineProps<ProductDetailDialogProps>();
const emit = defineEmits<ProductDetailDialogEmits>();

const handleClose = () => {
  emit('close');
};

</script>

<template>
  <BaseDialog :visible="visible">
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
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
      {{product}}
    </template>
    <template #footer>
      <span class="dialog-footer">
        <BaseButton @click="handleClose">
          Cancel
        </BaseButton>
        <BaseButton @click="handleClose">
          Confirm
        </BaseButton>
      </span>
    </template>
  </BaseDialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
