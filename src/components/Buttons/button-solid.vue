<script setup lang="ts">
type namedLocation = {
  name?: string;
  path?: string;
  params?: {
    id: number | string;
  };
};

interface Props {
  content?: string;
  color?: "light" | "dark";
  add?: string;
  to?: namedLocation | string;
  size?: "small" | "big";
}

const props = withDefaults(defineProps<Props>(), {
  content: "to product",
  to: "",
  size: "big",
});
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    v-bind="to ? { to: props.to } : { type: 'button' }"
    class="inline-block text-center rounded-sm border-2 uppercase tracking-wide text-k-black shadow-md transition duration-100 hover:translate-y-0.5 active:translate-y-1"
    :class="[
        props.color === 'light'
          ? [
              'bg-k-main',
              'text-k-black',
              'border-k-main',
              'hover:border-k-black',
            ]
          : ['bg-k-black', 'text-white', 'border-k-black', 'hover:text-k-main-dark'],
        props.size == 'small'
          ? ['w-40', 'py-3', 'text-sm', 'font-black']
          : ['w-52', 'py-3'],
        props.add,
      ]">
    {{ props.content }}
  </component>
</template>
