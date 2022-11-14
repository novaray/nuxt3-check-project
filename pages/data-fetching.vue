<script lang="ts" setup>
import { Product, ProductShape } from '~/repository/Product';
import { onMounted, ref } from 'vue';
const config = useRuntimeConfig();

const products = ref<Product[]>();
const product = ref<Product>();

onMounted(async () => {
  products.value = await Product.fetchProducts();
  product.value = await Product.fetchProductById(1);
});

const test = await Product.fetchProducts();
const {data: productsByUseFetch} = await useFetch('/products', {
  baseURL: config.public.baseUrl,
  transform: products => {
    // 인제아 타입 선언하면 제대로 IDE에서 제대로 분석을 못하는 현상? 그래서 타입 어설션 사용.
    return (products as ProductShape[]).map(p => new Product(p.id, p.name, p.price, p.imageUrl));
  },
  server: false
});
</script>

<template>
  <div>
    <h1>hey, there?</h1>
    <div>
      {{products}}
    </div>
    <div>
      {{product}}
    </div>
    <div>
      {{productsByUseFetch}}
    </div>
  </div>
</template>
