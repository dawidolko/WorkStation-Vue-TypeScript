<script setup lang="ts"></script>

<template>
  <div class="select-none font-Manrope">
    <!--
      First focusable element on every route. Without it a keyboard user has to
      tab through the whole global navigation before reaching page content.
      The target id is set on each page's <main>.
    -->
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <router-view></router-view>
  </div>
</template>
