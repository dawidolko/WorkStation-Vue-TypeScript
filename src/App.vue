<script setup lang="ts">
/*
 * Obsluga skip-linka.
 *
 * Sam href="#main-content" przenosil focus na poczatek landmarku <main>,
 * ktory na stronie glownej zaczyna sie banerem hero — uzytkownik klawiatury
 * ladowal wiec wizualnie na banerze i nadal musial przewijac do tresci.
 *
 * Preferujemy #main-start (pierwsza tresc pod hero), a #main-content zostaje
 * fallbackiem dla podstron, ktore takiego znacznika nie definiuja.
 */
function focusMainContent(event: MouseEvent) {
  const target =
    document.getElementById("main-start") ||
    document.getElementById("main-content");

  if (!target) return;

  event.preventDefault();
  target.focus();
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}
</script>

<template>
  <div class="select-none font-Manrope">
    <!--
      First focusable element on every route. Without it a keyboard user has to
      tab through the whole global navigation before reaching page content.
    -->
    <a class="skip-link" href="#main-content" @click="focusMainContent">
      Skip to main content
    </a>
    <router-view></router-view>
  </div>
</template>
