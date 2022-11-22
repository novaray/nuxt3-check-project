<script lang="ts" setup>
import { ElIcon } from 'element-plus';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import { useConfirmDialogStore } from '~/store/dialog';
import BaseDialog from '~/components/base/BaseDialog.vue';

const store = useConfirmDialogStore();

const handleClose = () => {
  store.close();
};

const handleSuccess = () => {
  store.handleSuccess();
};
</script>

<template>
  <BaseDialog :visible="store.visible" style="width: 300px;">
    <template #header="{titleId, titleClass}">
      <div class="confirm-header">
        <h4 :id="titleId" :class="titleClass">confirm</h4>
        <BaseButton type="danger" @click="handleClose">
          <el-icon class="el-icon--left">
            <CircleCloseFilled/>
          </el-icon>
          Close
        </BaseButton>
      </div>
    </template>
    <template #content>
      Are you sure?
    </template>
    <template #footer>
      <span class="dialog-footer">
        <BaseButton @click="handleClose">
          Cancel
        </BaseButton>
        <BaseButton @click="handleSuccess">
          Confirm
        </BaseButton>
      </span>
    </template>
  </BaseDialog>
</template>

<style scoped>
.confirm-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
