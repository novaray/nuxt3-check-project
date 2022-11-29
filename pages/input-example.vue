<script lang="ts" setup>
import BaseTextInput from '~/components/base/BaseTextInput.vue';

const textValue = ref('');
</script>

<template>
  <div>
    <BaseTextInput
      v-model="textValue"
      label="텍스트 입력란"
    >
    </BaseTextInput>
  </div>
</template>

<style scoped>

</style>
