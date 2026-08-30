<script setup lang="ts">
import Navigation from "../../components/navigation-global.vue";
import WorkStationHero from "./Components/WorkStation-hero.vue";
import ComponentsGrid from "./Components/components-grid.vue";
import StatsSection from "./Components/stats-section.vue";
import AboutSection from "./Components/about-section.vue";
import Footer from "../../components/footer-global.vue";
</script>

<template>
  <div
    class="main-container flex h-full w-screen flex-col items-center bg-white">
    <Navigation color="k-black" />
    <main id="main-content" tabindex="-1" class="h-full w-screen">
      <WorkStationHero />
      <!--
        Cel skip-linka: pierwsza tresc pod banerem hero. Skok na poczatek
        <main> ladowal wizualnie na banerze, wiec uzytkownik klawiatury i tak
        musial przewijac dalej.
      -->
      <div id="main-start" tabindex="-1">
        <ComponentsGrid />
      <StatsSection />
      <AboutSection />
      </div>
    </main>
    <Footer />
  </div>
</template>
