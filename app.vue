<script lang="ts" setup>
import ConfirmDialog from '~/components/common/ConfirmDialog.vue';

useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ]
});
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
    <ConfirmDialog />
  </NuxtLayout>
</template>
