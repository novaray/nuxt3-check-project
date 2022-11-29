<script lang="ts" setup>
import { Product, ProductShape } from '~/repository/Product';
import { onMounted, ref } from 'vue';
import ProductDetailDialog from '~/components/domain/product/ProductDetailDialog.vue';
import { useProductDialogStore } from '~/store/dialog';
const config = useRuntimeConfig();

const handleProductDialogClosed = () => {
  console.log('product dialog closed');
};

const productDialogStore = useProductDialogStore();
productDialogStore.handleClose = handleProductDialogClosed;
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
    // 파라미터에 타입 선언하면 제대로 IDE에서 제대로 분석을 못하는 현상? 그래서 타입 어설션 사용.
    return (products as ProductShape[]).map(p => new Product(p.id, p.name, p.price, p.imageUrl));
  },
  server: false // 해당 부분 빼고 useLazyFetch로 대체 가능.
});

const handleProductDialogVisible = async () => {
  const product = await Product.fetchProductById(2);
  productDialogStore.setProduct(product);
  productDialogStore.loadData().then((res) => {
    alert(res);
    productDialogStore.open();
  });
};

</script>

<template>
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
  <BaseButton @click="handleProductDialogVisible">
    다이얼로그 열기
  </BaseButton>
  <ProductDetailDialog />
</template>
