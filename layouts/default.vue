<script lang="ts" setup>
import PageTab from '~/components/common/PageTab';

const route = useRoute();
const pathName = ref<string>(route.path.split('/')[1]);
</script>

<template>
  <div>
    <PageTab :tab-name="pathName" />
    <slot />
  </div>
</template>

<style scoped>

</style>
