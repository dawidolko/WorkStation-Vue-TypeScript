<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  color?: "black" | "transparent" | "k-black";
}

const props = withDefaults(defineProps<Props>(), {
  color: "transparent",
});

let style = computed(() => {
  return "bg-" + props.color;
});

const hamburgerState = ref("hide");

function showHamburger(): void {
  hamburgerState.value = "show";
}

function hideHamburger(): void {
  hamburgerState.value = "hide";
}
</script>

<template>
  <header
    id="navi"
    class="main-container flex h-full w-screen flex-col items-center"
    :class="style"
    data-test="nav-desktop">
    <div
      class="relative flex w-4/5 max-w-6xl flex-row items-center justify-between border-b border-zinc-500 py-6 md:w-11/12 lg:w-4/5">
      <button
        id="hamburger"
        class="select-none lg:hidden"
        @click="showHamburger()"
        data-test="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <router-link
        to="/"
        class="text-3xl font-extrabold tracking-tight antialiased transition duration-300 hover:scale-110 hover:text-k-main"
        data-test="nav-logo">
        WorkStation
      </router-link>

      <nav class="hidden tracking-widest lg:flex lg:gap-8">
        <router-link
          to="/"
          class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
          active-class="!text-k-main underline"
          data-test="nav-home"
          >Home
        </router-link>
        <router-link
          to="/setup"
          class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
          active-class="!text-k-main underline"
          data-test="nav-setup"
          >Setup
        </router-link>
        <router-link
          to="/components"
          class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
          active-class="!text-k-main underline"
          data-test="nav-components"
          >Components
        </router-link>
        <router-link
          to="/specs"
          class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
          active-class="!text-k-main underline"
          data-test="nav-specs"
          >Specs
        </router-link>
      </nav>

      <div class="w-5"></div>
    </div>

    <transition>
      <nav
        class="absolute flex w-screen flex-row justify-around gap-2 bg-black p-9 text-xs font-semibold tracking-widest"
        v-if="hamburgerState === 'show'"
        :class="$route.path === '/' ? 'bg-k-black' : 'bg-black'"
        data-test="nav-mobile">
        <button
          class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
          @click="hideHamburger()"
          data-test="close-hamburger">
          Close
        </button>
        <router-link
          to="/"
          class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
          active-class="!text-k-main underline"
          :class="$route.path === '/' && 'hidden'"
          @click="hideHamburger()"
          data-test="mobile-nav-home"
          >Home
        </router-link>
        <router-link
          to="/setup"
          class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
          active-class="!text-k-main underline"
          :class="$route.path === '/setup' && 'hidden'"
          @click="hideHamburger()"
          data-test="mobile-nav-setup"
          >Setup
        </router-link>
        <router-link
          to="/components"
          class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
          active-class="!text-k-main underline"
          :class="$route.path === '/components' && 'hidden'"
          @click="hideHamburger()"
          data-test="mobile-nav-components"
          >Components
        </router-link>
        <router-link
          to="/specs"
          class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
          active-class="!text-k-main underline"
          :class="$route.path === '/specs' && 'hidden'"
          @click="hideHamburger()"
          data-test="mobile-nav-specs"
          >Specs
        </router-link>
      </nav>
    </transition>
  </header>
</template>
