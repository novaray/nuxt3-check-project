<script lang="ts" setup>
const props = defineProps({
  message: String
});
</script>

<template>
  <el-button>
    {{props.message}}
  </el-button>
</template>

<style scoped>

</style>
