<template>
  <div>안녕하세요</div>
  <div>patch 테스트</div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const count = ref(0);

onMounted(() => {
  console.log(" Hello Vue");
});
</script>
