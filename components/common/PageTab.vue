<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus';
import {ElTabs, ElTabPane} from 'element-plus';
interface PageTabProps {
  tabName: string;
}

const props = defineProps<PageTabProps>();
const handleClick = async (tab: TabsPaneContext) => {
  await navigateTo(`/${tab.paneName}`);
}

</script>

<template>
  <el-tabs :model-value="props.tabName" class="page-tabs" @tab-click="handleClick">
    <el-tab-pane label="index" name=""></el-tab-pane>
    <el-tab-pane label="Data fetching" name="data-fetching"></el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.page-tabs {
  margin-bottom: 1rem;
}

</style>
