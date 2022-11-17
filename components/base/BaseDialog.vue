<script lang="ts" setup>
import { ElDialog } from 'element-plus';
interface BaseDialogProps {
  visible: boolean;
}
interface BaseDialogEmits {
  (event: 'opened'): void;
  (event: 'closed'): void;
}

defineProps<BaseDialogProps>();
const emit = defineEmits<BaseDialogEmits>();
const handleOpened = () => {
  emit('opened');
}
const handleClosed = () => {
  emit('closed');
}

</script>

<template>
  <el-dialog v-model="visible" @opened="handleOpened" @closed="handleClosed">
    <slot name="header">

    </slot>
    <slot name="content">

    </slot>
    <slot name="footer">

    </slot>
  </el-dialog>
</template>
