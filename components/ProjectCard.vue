<template>
  <NuxtLink
    :to="link"
    class="rounded-xl relative perspective inline-block cursor-pointer"
  >
    <div class="overflow-hidden rounded-xl relative">
      <div
        class="bg-stone-700 text-stone-200 text-center absolute h-full w-full rounded-xl flex items-center justify-center opacity-0 hover:opacity-80 transition-all duration-300 z-50"
      >
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>
      <img class="zoom-image rounded-xl" :src="image" :alt="title" />
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
defineProps({
  title: String,
  image: String,
  link: String,
});
</script>
<style scoped>
.perspective {
  transform: scale(1);
}
.zoom-image {
  transition: transform 0.3s ease-in-out;
}
.perspective:hover .zoom-image {
  transform: scale(1.3);
}
</style>
