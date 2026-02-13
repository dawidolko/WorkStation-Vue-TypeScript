<script setup lang="ts">
const props = defineProps<{
  topSrc: string;
  botSrc: string;
  rightSrc: string;
}>();
</script>

<template>
  <section
    v-if="props.topSrc && props.botSrc && props.rightSrc"
    class="mt-16 flex h-full w-full flex-col items-center bg-white lg:mt-32">
    <div
      class="flex w-4/5 max-w-6xl flex-col gap-3 lg:grid lg:max-h-[40rem] lg:grid-cols-7 lg:grid-rows-2 lg:gap-5">
      <div
        class="overflow-hidden rounded-md col-span-3 col-start-1 row-span-1 row-start-1">
        <img
          loading="lazy"
          class="aspect-video h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-95 lg:aspect-auto"
          :src="props.topSrc"
          alt="Component detail view" />
      </div>
      <div
        class="overflow-hidden rounded-md col-span-3 col-start-1 row-span-1 row-start-2">
        <img
          loading="lazy"
          class="aspect-video h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-95 lg:aspect-auto"
          :src="props.botSrc"
          alt="Component detail view" />
      </div>
      <div
        class="overflow-hidden rounded-md order-first col-span-4 col-start-4 row-start-1 row-end-3 lg:order-none">
        <img
          loading="lazy"
          class="aspect-square h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-95 lg:aspect-auto"
          :src="props.rightSrc"
          alt="Component detail view" />
      </div>
    </div>
  </section>
</template>
