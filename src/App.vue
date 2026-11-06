<script setup lang="ts">
/*
 * The bare href moved focus to the start of <main>, which on the home page is the
 * hero banner, so a keyboard user still had to scroll. #main-start is the first
 * content under the hero, with #main-content as the fallback for other routes.
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
