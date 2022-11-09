<template>
  <h1>Hello World!</h1>
  {{info}}
</template>

<script setup lang="ts">
import {ref} from 'vue';

const {data: api} = await useFetch('/api/hello?param1=abcd', {
  method: 'post',
  body: {
    name: 'skkim'
  }
});

const info = ref(api);


</script>
