<script lang="ts" setup>
interface Props {
  message: string;
  loading?: boolean;
}

interface Emits {
  (event: 'click', value: string): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleClick = ({target}: { target: HTMLButtonElement }) => {
  emit('click', target.value)
}
</script>

<template>
  <el-button id="base-button" :loading="loading" @click="handleClick">
    {{ message }}
  </el-button>
</template>

<style scoped>

</style>
